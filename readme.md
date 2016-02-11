#Screen One Website

##Development
Assuming you have Ruby and RubyGems installed.
```
git clone git@bitbucket.org:brandedcrate/screening-one.git
cd screening-one
bundle install
./bin/jekyll serve
```

Compiling Sass might sometimes be a bit slow because jekyll uses `sass` instead of `sassc`
If you happen to have `npm` installed, install `node-sass` package to global.
```
npm install -g node-sass
node-sass --output-style compressed _sass/app.scss _site/css/main.css
```
Add `-w` parameter to `node-sass` command to keep watching

##Build
Same steps as development. But, instead of `serve` to build every time a file is changed, it's replaced with `build` to build only once.
```
./bin/jekyll/ build
```