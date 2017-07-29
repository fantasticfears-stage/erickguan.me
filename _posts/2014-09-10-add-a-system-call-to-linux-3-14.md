---
title: Adding a system call to Linux 3.14
tags:
  - Linux
---

There are plenty of blog posts about adding a system call to Linux 2.6, but they are out of date now. Here is a article about adding a system call to Linux 3.14. I assume you can easily add the system call for further kernel. Shane wrote a [great post](https://shanetully.com/2014/04/adding-a-syscall-to-linux-3-14/) about it.

## System call

**System call** is how a user space application request a service from an operating system. Many libraries, even C standard library, are an wrapper with additional functions.

## Environment

Gentoo Linux(amd64): aufs-sources:3.14.5

If you are not a Gentoo user, you can get the kernel source from your package manager and [The Linux Kernel](http://kernel.org/).

## Adding a system call

A system call is defined in the system call entry table, a system call function prototype and actual implementation for the system call.

### syscall table

The syscall table is located in the `arch/x86/syscalls/syscall_64.tbl`.

#### Format

`<numver> <abi> <name> <entry point>`

- `number`: All syscalls are identified by a unique number. In order to call a syscall, we tell the kernel to call the syscall by its number rather than by its name.
- `abi`: The ABI, or application binary interface, to use. Either 64, x32, or common for both.
- `name`: This is simply the name of the syscall.
- `entry point`: The entry point is the name of the function to call in order to handle the syscall. The naming convention for this function is the name of the syscall prefixed with `sys_`. For example, the `read` syscall's entry point is `sys_read`.

#### How-to

Skipping the table, you'll find a series of x86 system calls starting with 512. I'll add the system call in the end after table right above that part.

For 3.14, the last system call is `315 common  sched_getattr       sys_sched_getattr`. So I add the new one as 316. It look like this:
`316 common  set_root            sys_set_root`

### System call function prototype

We need to define the function prototype in the `include/linux/syscalls.h` file.

Simply adding a line: `asmlinkage long sys_set_root(void);`

We'll add a system call takes no argument.

`asmlinkage` is a modifier. This macro tells the compiler that the function should not expect to find any of its arguments in registers (a common optimization), but only on the CPU's stack. You can find more in [FAQ](http://kernelnewbies.org/FAQ/asmlinkage).

### System call implementation

Now, just create a new file `kernel/set_root.c`. Kernel style guild requires 8 space tab for indentation. But I will insist 4 space here.

    #include <linux/kernel.h>
    #include <linux/init.h>
    #include <linux/sched.h>
    #include <linux/syscalls.h>

    asmlinkage long sys_set_root(void)
    {
        struct user_namespace *ns = current_user_ns();
        struct cred *new;

        kuid_t kuid = make_kuid(ns, 0);
        kgid_t kgid = make_kgid(ns, 0);

        if (!uid_valid(kuid)) {
            return -EINVAL;
        }

        new = prepare_creds();

        if (new != NULL) {
            new->uid = kuid;
            new->gid = kgid;

            new->euid = kuid;
            new->egid = kgid;

            new->suid = kuid;
            new->sgid = kgid;

            new-->fsuid = kuid;
            new->fsgid = kgid;

            return commit_creds(new);
        } else {
            abort_creds(new);
            return -ENOMEM;
        }
    }

The code set the user program as root unconditionally. DO NOT USE THIS KERNEL after the experiment, or you're in trouble.

### Adding our implementation to Makefile

Adding `set_root.o` to the end of `obj-y` line in the `kernel/Makefile`.

### Patch about the kernel

    diff --git a/arch/x86/syscalls/syscall_64.tbl b/arch/x86/syscalls/syscall_64.tbl
    index a12bddc..413209b 100644
    --- a/arch/x86/syscalls/syscall_64.tbl
    +++ b/arch/x86/syscalls/syscall_64.tbl
    @@ -322,6 +322,7 @@
    313    common  finit_module            sys_finit_module
    314    common  sched_setattr           sys_sched_setattr
    315    common  sched_getattr           sys_sched_getattr
    +316 common  set_root            sys_set_root

    #
    # x32-specific system call numbers    start at 512 to avoid cache impact
    diff --git a/include/linux/syscalls.h b/include/linux/syscalls.h
    index a747a77..c9f7c3c 100644
    --- a/include/linux/syscalls.h
    +++ b/include/linux/syscalls.h
    @@ -855,4 +855,6 @@ asmlinkage long sys_process_vm_writev(pid_t pid,
    asmlinkage long sys_kcmp(pid_t pid1, pid_t pid2, int type,
                            unsigned long idx1, unsigned long idx2);
    asmlinkage long sys_finit_module(int fd, const char __user *uargs, int flags);
    +asmlinkage long sys_set_root(void);
    +
    #endif
    diff --git a/kernel/Makefile b/kernel/Makefile
    index bc010ee..def272b 100644
    --- a/kernel/Makefile
    +++ b/kernel/Makefile
    @@ -10,7 +10,7 @@ obj-y     = fork.o exec_domain.o panic.o
                kthread.o sys_ni.o posix-cpu-timers.o
                hrtimer.o nsproxy.o
                notifier.o ksysfs.o cred.o reboot.o
    -           async.o range.o groups.o smpboot.o
    +           async.o range.o groups.o smpboot.o set_root.o

    ifdef CONFIG_FUNCTION_TRACER
    # Do not trace debug files and internal ftrace files
    diff --git a/kernel/set_root.c b/kernel/set_root.c
    new file mode 100644
    index 0000000..97fab9b
    --- /dev/null
    +++ b/kernel/set_root.c
    @@ -0,0 +1,38 @@
    +#include <linux/kernel.h>
    +#include <linux/init.h>
    +#include <linux/sched.h>
    +#include <linux/syscalls.h>
    +
    +asmlinkage long sys_set_root(void)
    +{
    +    struct user_namespace *ns = current_user_ns();
    +    struct cred *new;
    +
    +    kuid_t kuid = make_kuid(ns, 0);
    +    kgid_t kgid = make_kgid(ns, 0);
    +
    +    if (!uid_valid(kuid)) {
    +        return -EINVAL;
    +    }
    +
    +    new = prepare_creds();
    +
    +    if (new != NULL) {
    +        new->uid = kuid;
    +        new->gid = kgid;
    +
    +        new->euid = kuid;
    +        new->egid = kgid;
    +
    +        new->suid = kuid;
    +        new->sgid = kgid;
    +
    +        new->fsuid = kuid;
    +        new->fsgid = kgid;
    +
    +        return commit_creds(new);
    +    } else {
    +        abort_creds(new);
    +        return -ENOMEM;
    +    }
    +}

## Testing by invoking system call in a C program

You may want to know [how system call works](http://www.tldp.org/LDP/khg/HyperNews/get/syscall/syscall86.html).

But here is only the code according to GNU whoami. The standard library provide the system call wrapper.

    #include <stdio.h>
    #include <unistd.h>
    #include <sys/types.h>
    #include <pwd.h>
    #include <string.h>
    #include <errno.h>

    #define SYS_SET_ROOT 316

    void whoami(void);

    int main()
    {
        whoami();

        if (syscall(SYS_SET_ROOT) == -1) {
            fprintf(stderr, "Error calling syscall: %s\n", strerror(errno));
            return 1;
        }

        whoami();

        return 0;
    }

    void whoami()
    {
        // Code modified from GNU whoami source
        // http://git.savannah.gnu.org/gitweb/?p=coreutils.git;a=blob;f=src/whoami.c;h=7301abb146418e36785801ff57a3946068b69fc5;hb=HEAD
        uid_t uid = geteuid();
        struct passwd *pw = getpwuid(uid);

        if (pw != NULL) {
            puts(pw->pw_name);
        }
    }
