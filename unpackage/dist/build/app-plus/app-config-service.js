
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/tabBar/home/home","pages/tabBar/policy/policy","pages/tabBar/mine/mine","pages/more/more","pages/more/moreInfo"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ffaaff","backgroundColor":"#ffaaff"},"tabBar":{"borderStyle":"black","color":"#fff","selectedColor":"#46A3FF","backgroundColor":"#ffaaff","list":[{"pagePath":"pages/tabBar/home/home","iconPath":"static/image/home.png","selectedIconPath":"static/image/home1.png","text":"首页"},{"pagePath":"pages/tabBar/policy/policy","iconPath":"static/image/list1.png","selectedIconPath":"static/image/list.png","text":"次页"},{"pagePath":"pages/tabBar/mine/mine","iconPath":"static/image/list1.png","selectedIconPath":"static/image/list.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"bill","compilerVersion":"2.9.7","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarBackgroundColor":"#ffaaff","navigationBarTextStyle":"white","navigationBarTitleText":"登录"}},{"path":"/pages/tabBar/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarBackgroundColor":"#ffaaff","navigationBarTextStyle":"white"}},{"path":"/pages/tabBar/policy/policy","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#ffaaff","navigationBarTextStyle":"white","navigationBarTitleText":"列表"}},{"path":"/pages/tabBar/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#ffaaff","navigationBarTextStyle":"white","navigationBarTitleText":"个人中心"}},{"path":"/pages/more/more","meta":{},"window":{"navigationBarBackgroundColor":"#ffaaff","navigationBarTextStyle":"white","navigationBarTitleText":"信息"}},{"path":"/pages/more/moreInfo","meta":{},"window":{"navigationBarBackgroundColor":"#ffaaff","navigationBarTextStyle":"white","navigationBarTitleText":"信息"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});