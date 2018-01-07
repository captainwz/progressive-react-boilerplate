## Technology Stack
* React
* Babel
* Webpack
    * babel-loader
    * style-loader
    * css-loader
    * url-loader
    * file-loader
## Usage
```shell
../node_modules/.bin/webpack --config webpack.config.js
```
## Annotation
### Babel
Babel is a javascript compiler and has been playing a role of tranfoming senior syntax (es2015+) to junior syntax (es5) that is more compatible in most time.
Parts of `devDependencies` in `package.json` are defined as the followings.
```
"babel-core": "^6.26.0",
"babel-loader": "^7.1.2",
"babel-preset-env": "^1.6.1",
"babel-preset-es2015": "^6.24.1",
"babel-preset-react": "^6.24.1",
"babel-preset-stage-0": "^6.24.1"
```
* [**babel-core**](https://github.com/babel/babel/tree/master/packages/babel-core), Babel compiler core.
* [**babel-loader**](https://github.com/babel/babel-loader), webpack plugin for Babel.

It's not enough to do tranforming simply depending on babel-core and babel-loader before some presets are preseted.

* [**babel-preset-env**](https://babeljs.io/docs/plugins/preset-env/), A preset that compiles es2015+ down to es5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments. It's a combination of presets like `babel-preset-es2015`,`babel-preset-es2016`,`babel-preset-es2017`,`babel-preset-latest`,`babel-preset-node5`,`babel-preset-es2015-node`, etc. It's recommended officially to replace `babel-preset-es2015` with `babel-preset-env`.
* [**babel-preset-react**](https://github.com/babel/babel/tree/master/packages/babel-preset-react), Babel preset to interpret `jsx` syntax for all React plugins.
* [**babel-preset-stage-0**](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0), the preset includes plugins like [transform-do-expressions](https://babeljs.io/docs/plugins/transform-do-expressions/) and [transform-function-bind](https://babeljs.io/docs/plugins/transform-function-bind/). It also includes the following plugins: [babel-preset-stage-1](https://babeljs.io/docs/plugins/preset-stage-1/), [babel-preset-stage-2](https://babeljs.io/docs/plugins/preset-stage-2/), [babel-preset-stage-3](https://babeljs.io/docs/plugins/preset-stage-3/).
### css-loader, style-loader
`css-loader` interprets `@import` and `url()` like `import`/`require()` and will resolve them. `style-loader` adds CSS to the DOM by injecting a `<style>` tag.
### file-loader, url-loader
`file-loader` instructs webpack to emit the required object as file and to return its public URL. `url-loader` works like the `file-loader`, but can return a DataURL if the file is smaller than a byte limit.
