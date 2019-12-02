/**
 * @supported 8E5B14F73C92
 */

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
$done({body: JSON.stringify(obj)}); 
