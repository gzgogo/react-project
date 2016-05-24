# react-project
react工程基础结构

## 操作说明

### 开发命令
该命令使用webpack.dev.config.js配置文件，利用webpack-dev-server以及react-hot-loader使页面在代码修改后进行实时刷新和热替换。

```
npm run dev
```

>webpack-dev-server将所有内容编译打包到内存中，并不生成实际文件。

### 编译命令
该命令使用webpack.prod.config.js配置文件，通过webpack将内容编译并打包到dst目录下。

```
npm run build
```
