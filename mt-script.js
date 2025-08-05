var body = $response.body;
var obj = JSON.parse(body);

obj['data']['sku_inventorys'][0]['total_inventory'] = 1;
body = JSON.stringify(obj);

console.log(body);

$done(body);
