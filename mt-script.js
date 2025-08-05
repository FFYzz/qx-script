if ($response && $response.body) {
    body = $response.body
    var obj = JSON.parse(body);
    obj['data']['sku_inventorys'][0]['total_inventory'] = 1;
    body = JSON.stringify(obj);
    $done({ body: body });
} else {
    $done({});
}
