class SlugObfuscator < ::Jekyll::Contentful::Mappers::Base
  def map
    result = super
    result['permalink'] = "proposals/#{result['slug']}-#{result['sys']['id']}/index.html"
    result
  end
end
