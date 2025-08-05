console.log("match script");
if ($response && $response.body) {
    console.log("match script: response body exist");
    body = $response.body
    var obj = JSON.parse(body);
    obj['data']['sku_inventorys'][0]['total_inventory'] = 1;
    body = JSON.stringify(obj);
    console.log(body);
    $done({ body: body });
} else {
    console.log("match script: response body not exist");
    $done({});
}
