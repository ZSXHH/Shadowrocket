#TG频道：https://t.me/iixiaobai
var APs = [
'aaa ',
'bbb ',
'ccc ',
'ddd ',
'eee ',
];

//console.log(APs);
var line = APs.join('&');

//console.log(APs);
$persistentStore.write(line,'Line');
$done({});
