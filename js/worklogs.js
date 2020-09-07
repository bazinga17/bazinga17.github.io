var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

return t.get('card', 'shared', 'time_list').then(function (data) { });

var x = document.getElementById("list_date");
var opt = document.createElement("li");
opt.text = data;
console.log(x);

console.log(data);
