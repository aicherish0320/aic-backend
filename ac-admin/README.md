# ac-admin

## 第一章

本章中我们处理了 **编程格式规范的问题**，整个规范大体可以分为两大类：

1. 代码格式规范
2. git 提交规范

### 代码格式规范

对于 代码格式规范 而言，我们通过 `ESLint + Prettier + VSCode` 配置配合进行了处理；最终达到了在保存代码时，自动规范化代码格式的目的

### git 提交规范

对于 git 提交规范 而言我们使用了 husky 来监测 Git Hooks 钩子，并且通过以下插件完成了对应的配置：

1. 约定式提交规范
2. `commitizen` git 提交规范工具
3. `commitlint` 用于检查提交信息
4. `pre-commit` git hooks 钩子
5. `lint-staged` 只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送

## 第二章-项目架构之搭建登陆架构解决方案与实现

### Vue3 新特性

- Composition API
  - Options API
    - 方便
    - 易学
    - 清晰
    - 问题：当你的组件变得越来越复杂时，组件的可读性会变得越来越差
  - Composition API
    - 定义数据与使用数据放在一起进行处理，以达到更加易读、更加方便扩展的目的
- 响应式变更
- 全新的全家桶
- 新的 TS 支持
- Vite

### 通用后台登陆方案解析

- 封装 axios 模块
- 接口请求模块
- 登陆请求动作
- Token 缓存
- 登陆鉴权

### 登陆鉴权

- 当用户未登录时，不允许进行除 login 之外的其他页面
- 用户登陆后，token 未过期之前，不允许进入 login 页面

## 第四章-项目架构之搭建 Layout 架构解决方案与实现

- 用户退出方案
- 动态侧边栏方案
- 动态面包屑方案

### 退出登陆方案实现

- 用户主动退出
  - 用户点击登陆按钮之后退出
- 用户被动退出
  - token 过期
- 无论哪种方式退出，在用户退出时，所需执行的操作都是固定的
  - 清理掉当前用户缓存数据
  - 清理掉权限相关的配置
  - 返回登陆页

### 动态 menu 菜单

动态菜单其实主要是和 动态路由表 配置来去实现用户权限的

- 根据路由表的配置，自动生成对应的 menu 菜单
- 当路由表发生变化时， menu 菜单自动发生变化

### 全新 vue 能力：组件状态驱动的动态 css 值

### 动态面包屑方案

- 静态面包屑
  - 在每个页面中写死对应的面包屑菜单
    - 缺点：
      - 每个页面都得写一遍
      - 页面路径结构变化了，得手动更改
- 动态面包屑
  - 根据当前的 url 自动生成面包屑导航菜单
    - 1. 创建、渲染基本的面包屑组件
    - 2. 计算面包屑结构数据
    - 3. 根据数据渲染动态面包屑内容

### 第四章总结

- 用户退出方案
- 动态侧边栏方案
- 动态面包屑方案

## 第五章-通用功能开发

- 国际化
- 动态换肤
- screenfull
- headerSearch
- tagsView
- guide

### 国际化实现原理

#### vue-i18n

- 创建 messages 数据源
- 创建 locale 语言变量
- 初始化 i18n 实例
- 注册 i18n 实例

### element-plus 国际化处理

### 自定义语言包国际化处理

### 动态换肤

想要实现动态换肤的一个前置条件就是：色值不可以写死

对于自定义主题而言，核心的原理其实就是 修改 scss 变量来进行实现主题色变化

1. 对于 element-plus ：因为它是第三方的包，所以它不是完全可控的，那么对于这种最简单直白的方案，就是直接拿到它编译后的 css 色值替换，利用 style 内部样式表优先级高于 外部样式表的特性，来进行主题替换

2. 对于自定义主题：因为自定义主题是 完全可控的，所以我们实现起来就轻松很多，只需要修改对应的 scss 变量即可

### screenfull 原理及方案分析

### headerSearch 原理及方案分析

headerSearch 指 页面搜索

headerSearch 是复杂后台系统中非常常见的一个功能，它可以：在指定搜索框中对当前应用中所有页面进行检索，以 select 的形式展示出来被检索的页面，已达到快速进入的目的

### tagsView

> Vue 默认将事件放在组件的根元素上，注意注释节点

## 第六章

## 第八章-权限受控解决方案之分级分控权限管理·

- 权限理论：明确什么是 RBAC 权限控制体现
- 辅助业务：完善用户、角色、权限三个页面功能
- 核心功能：落地实现 RBAC 权限控制系统

### RBAC 权限控制体系

- 员工管理为用户指定角色
- 通过角色列表为角色指定权限
- 通过权限列表查看当前项目所有权限

根据不同的权限数据，利用 addRoute API 生成不同的私有路由表 即可实现 页面权限 功能
