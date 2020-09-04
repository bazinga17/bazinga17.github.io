var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var time_spend = document.getElementById('get_time').value;
var _date = document.getElementById('date_in_time').value;

document.getElementById('add_work').addEventListener('click', function () {
    console.log(t.card().iframe);

    //var x = document.getElementById("list_date");
    //var opt = document.createElement("li");
    //opt.text = time_spend + ' ' + _date;

    //console.log(x);

    //return console.log(time_spend + _date)
})