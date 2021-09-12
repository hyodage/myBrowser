// 引入node内置的http模块，来进行http的服务器开发
const http = require('http');
// 创建一个http的服务器
const server = http.createServer((request,response)=>{
    // 请求的信息在request内，比如url，request.url
    console.log('请求的url虚拟地址是',request.url);
    response.writeHead(200,{'Content-Type':'text/html'});//设置返回内容的编码
    response.write(' hello world\n');//给浏览器返回的内容
    response.end();//结束请求,要有结束不然浏览器会一直请求
})
// 监听端口
server.listen(1234,()=>{
   console.log('服务器开启成功，您可以通过：http://localhost:1234');
})