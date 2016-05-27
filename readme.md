# Screen One Website

## Development
Assuming you have Ruby and RubyGems installed.
```
git clone git@bitbucket.org:brandedcrate/screening-one.git
cd screening-one
bundle install
./bin/jekyll serve
```

## Build
Same steps as development. But, instead of `serve` to build every time a file is changed, it's replaced with `build` to build only once.
```
./bin/jekyll/ build
```

## Creating Proposals
To create proposals, you will need to login to contentful and create content there.  
Then publish them and a call will be made to the server to fetch all of the published content from contentful.

