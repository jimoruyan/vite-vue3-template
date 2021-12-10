# 1 概述

## 1.1 简介

vite-vue3-template是一个管理后台系统中前端解决方案，它基于 [vue] [element-ui-plus] [vite]实现。它使用了最新的前端技术栈，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。


你需要在本地安装 [node](http://nodejs.org/) ，本项目技术栈基于[vue3] [vuex4] [vue-router4] [axios] [vite2] [element-ui-plus] [ES2015+] ，所有的请求数据都使用[Mock.js]进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。



## 1.2 功能（正在开发中）

```bash
- 登录 / 注销 / 用户数据加载

- 权限验证 / 菜单构建 / 页面权限

- 本地开发服务器  / 编码规范检测 / less支持

```

## 1.3 开发

```bash
// 推荐使用yarn来下载依赖及构建，yarn可以理解为npm的优化版本，如果没有安装要先安装yarn
npm install yarn -g

// 进入项目目录
cd vite-vue3-template

// 安装依赖
yarn install

// 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

// 启动服务
yarn dev

// **如果插件安装在自定义路径('yarn' 不是内部或外部命令，也不是可运行的程序)，需要配置环境变量：**
path里面加 D:\nodejs\node_global\node_modules\yarn\bin


## 1.4 发布

```bash
// 构建测试环境
yarn build:stage

// 构建生产环境
yarn build:prod

```

# 2 代码风格
本项目的风格指南主要是参照 `vue` 官方的[风格指南](https://v3.cn.vuejs.org/style-guide)。在真正开始使用该项目之前建议先阅读一遍指南，这能帮助让你写出更规范和统一的代码。当然每个团队都会有所区别。其中大部分规则也都配置在了[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)之中，当没有遵循规则的时候会报错，详细内容见[eslint](./eslint.md)章节。

当然也有一些特殊的规范，是不能被 eslint 校验的。需要人为的自己注意，并且来遵循。最主要的就是文件的命名规则，这里来举例说明。

如果使用vscode，可配置保存后自动按照 eslint 规则格式化代码


## 2.1 Component

所有的`Component`文件都是以大写开头 (PascalCase)，这也是官方所[推荐的](https://cn.vuejs.org/v2/style-guide/index.html)。

但除了 `index.vue`。

例子：

- `@/src/components/BackToTop/index.vue`
- `@/src/components/Charts/Line.vue`
- `@/src/view/example/components/Button.vue`

## 2.2 JS文件

所有的`.js`文件都遵循横线连接 (kebab-case)。

例子：

- `@/src/utils/open-window.js`
- `@/src/view/svg-icons/require-icons.js`
- `@/src/components/MarkdownEditor/default-options.js`

## 2.3 Views

在`view`文件下，代表路由的`.vue`文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：

- `@/src/view/svg-icons/index.vue`
- `@/src/view/svg-icons/require-icons.js`

使用横线连接 (kebab-case)来命名`view`主要是出于以下几个考虑。

- 横线连接 (kebab-case) 也是官方推荐的命名规范之一 [文档](https://cn.vuejs.org/v2/style-guide/index.html)
- `view`下的`.vue`文件代表的是一个路由，所以它需要和`component`进行区分(component 都是大写开头)
- 页面的`url` 也都是横线连接的，比如`https://www.xxx.admin/export-excel`，所以路由对应的`view`应该要保持统一
- 没有大小写敏感问题

## 2.4 ESlint检测
模板工程中配置ESlint检测，将开发环境中的的eslint配置文件设置为.eslintrc.js，或者设置为自动搜索配置。


# 3 目录结构
本项目已经为你生成了一个相对完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── build                         // 构建相关
├── mock                          // 项目mock 模拟数据
├── public                        // 静态资源
│   ├── document                  // 此文件夹中放置自己项目的帮助手册 
│   ├── favicon.ico               // favicon图标
│   └── index.html                // html模板
├── src                           // 源代码
│   ├── app                       // 页面的业务代码，可再分子系统或大模块，如果页面不多也可不分
│   │   ├── common                // 如果再细分了，common文件夹发通用代码
│   │   ├── sample                // 示例子模块
│   │   ├── system-sample         // 一些系统功能示例（未添加）
│   │   └── empty-need-rename     // 占坑，修改为自己的模块名，具体细分为api，assets，views，components，utils
│   ├── config                    // 项目配置文件夹，目录结构及文件名不要修改，按照需要再内部添加
│   │   ├── filters               // vue全局过滤器，新增直接放置在文件下，会自动加载
│   │   ├── router                // 路由配置定义
│   │   ├── store                 // vuex配置
│   │   ├── styles                // 样式定义，可根据需要修改
│   │   ├── svg-icons             // svg图标资源，可根据项目需要增加
│   │   ├── app-config.js         // 模板功能需要知道的项目一些配置
│   │   ├── handler.js            // 自定义通用操作的回调
│   │   └── ui-config.js          // 界面布局及显示配置
│   ├── framework                 // 框架代码，一般不需要修改
│   │   ├── components            // 框架封装的组件
│   │   ├── directive             // vue指令，包括了按钮权限就是通过指令实现
│   │   ├── icons                 // svg图标加载实现
│   │   ├── layout                // 整体布局实现
│   │   ├── store                 // vuex配置加载
│   │   ├── styles                // 样式实现
│   │   ├── utils                 // 工具类库
│   │   └── common-control.js     // 登录注销操作，业务调用时使用此文件的
│   ├── vendor                    // 如果需要引入第三方的js库，不通过npm依赖引入，则放到此文件夹中
│   ├── App.vue                   // 入口页面
│   ├── env-variable.js           // 环境变量代理文件，为了便于单独提取环境变量文件，使用时引入此文件，不要直接使用环境变量
│   ├── main.js                   // 入口文件 加载组件 初始化等
│   └── permission.js             // 权限管理
├── tests                         // 测试
├── .env.xxx                      // 环境变量配置
├── .eslintignore                 // eslint 忽略项
├── .eslintrc-common.js           // eslint 公司级别规则
├── .eslintrc.js                  // eslint 项目级别规则，继承了eslintrc-common，主要是添加了vue规则
├── babel.config.js               // babel 配置
├── vue.config.js                 // vue-cli 配置
└── package.json                  // package.json
```

# 4 Vuex配置（状态存储）

模板中预置了user与app模块存储用户、项目信息，并定义了常用的getters，如果添加新的模块可直接再modules下添加对应的文件，代码会自动批量读取。

# 5 VueRouter配置（路由）

路由配置在`src/router/index.js`,`新路由可在src/router/routes.js`中添加



# 6 权限控制
## 6.1 页面权限
页面权限分两种情况，一种是未登录时可访问的页面，一种是登录后可访问的页面。
### 6.1.1 whiteList页面
例如登录页面肯定是要未登录即可访问的页面，配置哪些页面未登录就可访问是通过定义路由时`meta`中的`whiteList`属性来实现的。

whiteList为true时对应的路由不登录即可访问，如果不是未登录即可访问的路由，在没有登录前访问时都会自动跳转到登录页面。


# 7 打包部署
## 7.1 多环境
模板工程是基于Vue CLI 3创建的工程，多环境机制是由vue-cli实现的，在此只做简要说明，具体了解请参见[https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F]

.env.xxx是环境变量文件，如果要多定义一种环境，则增加一个环境变量文件，例如增加一个test环境，则先增加.env.test文件，再在其中增加相应的环境变量，构建test环境，使用命令
```bash
vue-cli-service build --mode test
```
建议将命令定义到package.json中便于以后使用，模板工程已经预置了production和stage的构建命令
使用package中的命令，可以进入项目文件夹后执行以下命令
```bash
// production构建
yarn run build:prod

// stage构建
yarn run build:stage

// 或者test这样构建，package.json需要提前定义"build:test": "vite build --mode test"
yarn run build:test
```
## 7.2 构建与部署
构建后会生成dist文件夹，部署到服务器上时，将dist全部内容部署上去，dist的名称需要根据情况修改。
如果前端部署在tomcat下，需要web.xml文件处理404的情况，模板工程已经加了，在public/WEB-INF下