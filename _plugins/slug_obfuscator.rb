class SlugObfuscator < ::Jekyll::Contentful::Mappers::Base
  def map
    result = super
    slug = result['title'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    result['permalink'] = "proposals/#{slug}-#{result['sys']['id']}/index.html"
    result
  end
end
