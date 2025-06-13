---
title: Ensuring the file uploaded by Refile
tags:
  - Rails
  - Ruby
  - Gem
---

[Refile](https://github.com/refile/refile) is an neat and simple file upload library for Ruby applications. It can be easily to integrated into Rails app. Be advised, I am on its git version `6a25a24059`.

Recently, I ran into trouble to validate the file exists or uploaded. I went through the AR layer, the model is [set at `before_save` hook](https://github.com/refile/refile/blob/6a25a24059/lib/refile/attachment/active_record.rb#L24-L26). There is no way to check the file is uploaded.

Thanks to its simple abstraction, `attacher` will [present](https://github.com/refile/refile/blob/6a25a24059/lib/refile/attachment/active_record.rb#L12-L15) when the file is uploaded.

Then the final resolution is straightforward. For example:

    class UserValidator < ActiveModel::Validator
      def validate(record)
        unless record.send(:avatar).present?
          attacher = "avatar_attacher"

          record.errors.add(:avatar, :blank, options) unless record.send(attacher).present?
		end
      end
    end

Only if the file is uploaded, the attcher will [be present](https://github.com/refile/refile/blob/6a25a24059/lib/refile/attacher.rb#L150-L152).
