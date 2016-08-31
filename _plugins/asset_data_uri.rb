require 'jekyll-assets'

module Jekyll
  module Assets
    class Renderer
      def render_asset_data_uri(*args)
        "data:#{asset.content_type};base64,#{Base64.strict_encode64(asset.to_s)}"
      end
    end
  end
end

Liquid::Template.register_tag :asset_data_uri, Jekyll::Assets::Tag
