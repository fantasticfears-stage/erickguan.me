---
title: "WebAssembly vs. JVM: An Informal Peek"
header:
  image: /assets/images/2023/garett-mizunaka-unsplash-1920.jpg
  og_image: /assets/images/2023/garett-mizunaka-unsplash-640.jpg
  teaser: /assets/images/2023/garett-mizunaka-unsplash-640.jpg
  caption: Photo by [Garett Mizunaka](https://unsplash.com/es/@garett3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/xFjti9rYILo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
tags:
  - Runtime
---

Recently, WebAssembly (WASM) has gained traction as a reference runtime, providing a way to run programs written in different programming languages. However, the Java Virtual Machine (JVM) is another popular platform for achieving similar functionality. When it comes to running programs on a virtual machine or compiling them into machine code, it's also worth considering LLVM. In this blog post, I'll share some thoughts based on my reading, although it's not a complete analysis but rather a collection of ideas to encourage thinking and exploration.

## Representation

LLVM offers three different forms: an in-memory compiler Intermediate Representation (IR), an on-disk bitcode representation (optimized for fast loading by Just-In-Time compilers), and a human-readable assembly language representation. It's important to note that LLVM itself is not a runtime. On the other hand, the JVM uses a binary representation for classes and interfaces, while WASM utilizes binary and text formats.

Despite the differences in representation, the core principle of linking a program and executing it remains the same. Instructions and data can be represented in either text or binary formats on disk. The program must be loaded into memory, either dynamically or statically, before execution can take place.

In my exploration, I found that the [WASM specification](https://webassembly.github.io/spec/core/exec/modules.html) surprisingly offers a simpler approach compared to LLVM and JVM. This simplicity may stem from the focus on optimization and features within the LLVM and JVM ecosystems. It's worth noting that WASM is relatively new and primarily targets browser and integrated environments. Additionally, WASM's streamability sets it apart from other tools.

### Modules in WASM

WASM organizes code structure into `modules`, which serve as the unit of loading and compilation. Unlike JVM, modules are not equivalent to interfaces or classes. Instead, a module encompasses types, functions, memory, global variables, data, and execution symbols. In contrast, JVM represents these structures through a ClassFile, which contains metadata such as types, constants, methods, fields, and attributes. Instructions are stored as an attribute. LLVM's representation, on the other hand, aligns more closely with machine code. Ultimately, LLVM supports compiler backends to translate its representation into machine code.

### Instructions in WASM

Based on the high-level constructs mentioned earlier, WASM offers various types of instructions, including numerical, memory, table, variable, parametric, reference, vector, and control instructions. Some of these instructions resemble assembly code, while others bear similarities to JVM instructions. However, JVM includes additional instructions for handling null values, basic types, exceptions, and inheritance-related operations.

By comparing these different platforms and their instruction sets, we can gain a better understanding of their respective strengths and use cases. How it is built is in details of course.

## Implementation

[wasmtime](https://github.com/bytecodealliance/wasmtime) serves as a standalone runtime for WebAssembly (WASM) and provides a clear structure outlined in its [Architecture](https://docs.wasmtime.dev/contributing-architecture.html) document. The runtime revolves around the concept of an `Engine`, which serves as the global compilation context. The `Store` maintains the context and isolates WASM objects within a thread. The document also explains the compilation and execution processes, although the validation process will be excluded from this blog.

Similar to the JVM, the runtime keeps track of all loaded modules. In the JVM, code is typically compiled into `.class` files, and the JVM and class loaders collaborate to load symbols and instructions for a program. On the other hand, wasmtime seems to have a module linking procedure. While the multithreaded environment of the JVM is often discussed, the details regarding multithreading in wasmtime are not mentioned as prominently, which piques my interest.

## Discussions

WASM defines a straightforward structure that allows programs to run on a runtime (or even without one). This approach facilitates the creation of desired characteristics across multiple programming languages. It differs from the approach taken by GraalVM. The ability to run different programming languages within a single runtime can significantly increase productivity. Integrating various programs and libraries into one runtime fosters better integration and reduces the cost of building blocks.


