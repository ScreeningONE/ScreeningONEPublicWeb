require 'erb'
require 'pry'
require 'jekyll'
require 'jekyll-contentful-data-import'
require_relative '_plugins/slug_obfuscator'

desc "Import Contentful Data with Custom Mappers"
task :contentful do
  Jekyll::Commands::Contentful.process([], {}, Jekyll.configuration['contentful'])
end

desc "Process _config.tmpl.yml"
task :config do
  ENV['JEKYLL_ENV'] ||= 'production'
  template = File.read('_config.yml.erb')
  File.write('_config.yml', ERB.new(template).result)
end
