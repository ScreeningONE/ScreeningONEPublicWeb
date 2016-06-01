# Screening One Static Site

In order to build the static site, you'll need Ruby 2.1+ and bundler. To begin,
run `bundle install` and create a .env file in the project root like this and
fill in the secret sauce to your liking:

```
AWS_S3_REGION=us-east-1
AWS_S3_BUCKET=screeningonemarketing

# for uploading the static zip files from ./bin/publish
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# for grabbing content from contentful (set the space in _config.yml.erb
CONTENTFUL_ACCESS_TOKEN=

# for publishing to the staging area
STAGING_PUBLISH_S3_BUCKET=
STAGING_PUBLISH_AWS_ACCESS_KEY_ID=
STAGING_PUBLISH_AWS_SECRET_ACCESS_KEY=

# for publishing to production
PRODUCTION_PUBLISH_S3_BUCKET=screeningone.com
PRODUCTION_PUBLISH_AWS_ACCESS_KEY_ID=
PRODUCTION_PUBLISH_AWS_SECRET_ACCESS_KEY=
```

## Building

The rules for building and publishing are encoded in the .travis.yml file. It
requires you have your environment set up with the keys specified in the above
.env file. One easy way to make that happen is to invoke a shell via the dotenv
gem: `bundle exec dotenv bash`

Then:
```bash
# configure your Jekyll environment
JEKYLL_ENV=staging ./bin/rake config

# download content from contentful
JEKYLL_ENV=staging ./bin/rake contentful

# build or serve
./bin/jekyll (build or serve)
```
