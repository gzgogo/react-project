# react-project
react工程基础结构

## 操作说明

### 开发命令
该任务利用`webpack-dev-server`以及`react-hot-loader`使页面在代码修改后进行实时刷新和热替换。
该项目提供了两种配置方法来完成此任务。

#### 1. 利用命令行参数
该命令使用`webpack.dev.config.js`配置文件。

```
npm run dev
```

实际命令为`webpack-dev-server --inline --hot --quiet --config webpack.dev.config.js --port 8888`。

>注意此方式不需要在配置文件中的`plugins`内添加热替换插件`new webpack.HotModuleReplacementPlugin()`，命令行的`--hot`参数会自动添加该插件。

#### 2. 自己创建WebpackDevServer对象
该命令使用`webpack.dev1.config.js`配置文件。

```
npm run dev1
```

实际命令为`node server.js`。

server.js文件内容如下：
```
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: true //去掉复杂的log信息
});

server.listen(8888, 'localhost', function (err, result) {
  if (err) 
    console.log(err);
  console.log('Listening at localhost:8888');
});
```

有时运行开发命令时会报如下错误：`Error: listen EADDRINUSE 127.0.0.1:8888`，遇到这种情况需要按照下面方法修改端口：
    修改`package.jso`文件内`scripts`字段的`dev`命令，找到`--port`，将其后面的`888`8改为其他端口，如`3000`


>webpack-dev-server将所有内容编译打包到内存中，并不生成实际文件。

### 编译命令
该命令使用`webpack.prod.config.js`配置文件，通过webpack将内容编译并打包到dst目录下。

```
npm run build
```

实际命令为`webpack --config webpack.prod.config.js`。
