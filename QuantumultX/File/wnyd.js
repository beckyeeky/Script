/**
 * @supported 8E5B14F73C92
 */
 var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done(body);

//By yxiaocai & JO2EY
