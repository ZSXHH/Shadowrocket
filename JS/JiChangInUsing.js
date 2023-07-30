//TG频道：https://t.me/iixiaobai
//在下方 '' 中内容替换为：前缀 订阅链接
var APs = [
'aaa',
'bbb',
'ccc',
'ddd',
'eee',
];

//console.log(APs);

//以&将上方数组合并为字符串，并赋值给line
var line = APs.join('&');

//console.log(line);

//将line即字符串写入Line中存储
$persistentStore.write(line,'Line');

//结束
$done();
