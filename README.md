# electron-quick-start
A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `preload.js` - A content script that runs before the renderer process loads.
`
  
````bash
# electron入门
  https://www.electronjs.org/zh/docs/latest/tutorial/quick-start
  
  http://www.17bigdata.com/book/electron/ZaiZhuJinChengNeiKeYongDeMoKuai/ELECTRONMENUMoKuai.html
````

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```
Electron打包详解 推荐Forge 方式
```bash
# https://www.electronforge.io/cli#package
# https://www.electron.build/cli

# (生成图标图片)
https://www.jianshu.com/p/20683c387fa0 
```

Electron 变量管理
```bash
1.script 中 传递到process.env中
cross-env Project_Entrance=vue-app

2.运行时获取不同的变量文件 loadEnv
const {loadEnv} = require('vite');
let localEnv = loadEnv(process.env.Project_Entrance, "./", '')

3.生产环境electron-settings  生成本地配置文件
```

Electron 混用commonjs 和es6 代码
```bash
1使用webpack
https://blog.csdn.net/qq_41831345/article/details/122959222

https://webpack.js.org/configuration/output/
```

webpack  Electron 混用commonjs 和es6 代码
```bash
 解决node不能识别import的问题  
 1 跟目录运行webpack  自动寻找webpack.config.js
webpack --config ./configs/webpack.config.main.prod.babel.js 

2. 可以加运行时参数 node -r @babel/register ./test_webpack/src/index.js 
https://babeljs.io/docs/babel-preset-typescript


@babel/register 和 webpack的babel-loader都会寻找babel.config.js文件!!!

webpack 中编译 ts 有两种方式ts-loader 和 babel-loader + @babel/preset-typescript
https://www.zybuluo.com/Dale-Lin/note/2380838
https://www.webpackjs.com/loaders/babel-loader/
```


vue
```bash
1使用vue cli
https://cli.vuejs.org/zh/config/

```


vue
```bash

pyinstaller.exe --collect-all serial --hidden-import=uvloop  --collect-all requests  --collect-all sanic_ext --collect-all sanic   ./src/screwdriverapi.py   -F -n screwdriverapi
当你在使用 Electron Forge 打包应用程序时，出现 "Could not find light.exe or candle.exe" 的错误消息通常是由于缺少 WiX 工具集引起的。WiX 是一种用于创建 Windows 安装程序的开源工具集。
```