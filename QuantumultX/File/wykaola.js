/**
 * @supported 8E5B14F73C92
 */
 var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)}); 