import './style.css'
import token from './.config/token'
import HelloWorld from './example/HelloWorld'
import Line from './example/Line'

Cesium.Ion.defaultAccessToken = token;

// 读取URL参数 cid http://localhost:5173/example.html?cid=ImageryLayers
const url = new URL(window.location.href);
const cid = url.searchParams.get('cid');
switch (cid) {
  case 'hello-world':
    new HelloWorld();
    break;

  case 'line':
    new Line();
    break;

  default:
    if (window.confirm('没有找到对应的示例，是否跳转到首页？')) {
      window.location.href = './index.html'; 
    }
    
    break;
}



