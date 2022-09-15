var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data.map_data ='{"4":1}'
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
