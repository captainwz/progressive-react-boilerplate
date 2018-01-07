## 技术栈
* React
* Babel
* Webpack
    * babel-loader
    * style-loader
    * css-loader
    * url-loader
    * file-loader
## 使用
```shell
../node_modules/.bin/webpack --config webpack.config.js
```
## 说明
### Babel
Babel是一个javascript解析器，更多时候扮演着将高级语法向下转义的角色。
在根目录的`package.json`里的`devDependencies`可以看到这么几个部分
```
"babel-core": "^6.26.0",
"babel-loader": "^7.1.2",
"babel-preset-env": "^1.6.1",
"babel-preset-es2015": "^6.24.1",
"babel-preset-react": "^6.24.1",
"babel-preset-stage-0": "^6.24.1"
```

* [**babel-core**](https://github.com/babel/babel/tree/master/packages/babel-core)，babel编译核心。
* [**babel-loader**](https://github.com/babel/babel-loader)，babel的webpack插件，在`webpack.config.js`中声明调用。

单靠babel-core和babel-loader是不够的，还需要声明需要哪些preset来解析哪些语法。

* [**babel-preset-env**](https://babeljs.io/docs/plugins/preset-env/)是一系列preset的集合，包括`babel-preset-es2015`,`babel-preset-es2016`,`babel-preset-es2017`,`babel-preset-latest`,`babel-preset-node5`,`babel-preset-es2015-node`等等,所以官方建议preset中就不要直接使用`babel-preset-es2015`了，改用`babel-preset-env`
* [**babel-preset-react**](https://github.com/babel/babel/tree/master/packages/babel-preset-react)，babel解析react jsx的插件
* [**babel-preset-stage-0**](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0)，babel面向一些更高级语法的解析插件，stage-0是stage-1的超集，再额外增加对[do-expressions](https://babeljs.io/docs/plugins/transform-do-expressions/),[function-bind](https://babeljs.io/docs/plugins/transform-function-bind/)这俩部分的解析。以此类推，stage-1是stage-2的超集，stage-2是stage-3的超集。
### css-loader, style-loader
`css-loader`尝试解析js文件中对于css文件的引入，`style-loader`会将样式以`<style>`标签形式插入DOM中，二者通常结合使用。
### file-loader, url-loader
当js中尝试将静态文件引入时候，编译过程中`file-loader`会将其转化为对应的路径，`url-loader`更近一步，如果是图片且大小小于设定的limit，则将其转化为DataURL。
