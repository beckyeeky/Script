/**
 * @supported 660C1F5C3E2B 8E5B14F73C92
 */
 //regex: ^https://api.zhihu.com/.*/questions
//Original author: onewayticket255

let body = $response.body
body=JSON.parse(body)
if (body['ad_info']) {
delete body['ad_info']
};
if (body.data) {
body['data'].forEach((element, index)=> {
    if(element['author']['name']=="盐选推荐"){ 
          body['data'].splice(index,1)  
     }
  })
 };
body=JSON.stringify(body)
$done({body})