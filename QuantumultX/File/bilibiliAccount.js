/**
 * @supported 8E5B14F73C92
 */
let body = $response.body
body=JSON.parse(body)
body['data']['sections'].splice(2,1)
body=JSON.stringify(body)
$done({body})
