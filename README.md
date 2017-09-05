# MusicPlayer
学习react的新项目，node下开发，涉及React开发，组件和，路由，组件通信等。
### webpack
webpack是一个前端资源加载/打包工具，前端的常用资源都可以作为一个模块导出，直接在代码中引用即可，
然后按照配置把代码打包整合起来。
### html-webpack-plugin
生成html文件
### Hot-Module-Replacement
热替换，hot-loader
### state,props
react中的数据有两种：state和props,state表示react本身的数据而props表示从其他组件传入的数据
### React组件生命周期
  *首先是Mounting:已插入真实DOM
  *然后是Updating:正在被重新渲染
  *最后是Unmounting:已移出真实DOM
  
  具体来说，
  初始化阶段： getDefaultProps:获取实例的默认属性
              getIntialState:获取每个实例的初始化状态
              componentWillMount:组件即将被装载，渲染到页面上
              render:组件在这里生成DOM节点
              componentDidMount:组件真正被装载之后，可以修改DOM
  运行中状态： componentWillReceiveProps:组件将要接收到属性的时候调用
              shouldComponentUpdate:组件接收到新状态或者新属性的时候调用
              componentWillUpdate:不能修改属性和状态
              render:只能访问this.props和this.state;
              componentDidUpdate:可以修改DOM
  销毁阶段：   componentWillUnmount:销毁

*做header组件时候，加了类名row无法使得栅格系统实现，因为link标签没闭合。绑定事件要解绑，否则重复调用*
  




