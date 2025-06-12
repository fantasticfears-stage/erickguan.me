# frozen_string_literal: true

require "bundler/setup"
require "rake"

# Default task — run `rake` with no arguments
# to start the Jekyll development server
task default: :serve

# -----------------------------------------------------------------------------
# Jekyll helpers
# -----------------------------------------------------------------------------

desc "Start Jekyll in development mode with live-reload and drafts"
task :serve do
  sh "bundle exec jekyll serve --livereload --watch --incremental --drafts"
end

# -----------------------------------------------------------------------------
# Code quality helpers
# -----------------------------------------------------------------------------

require "standard/rake"
