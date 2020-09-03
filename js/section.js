var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var time_spend = document.getElementById('get_time');
var _date = document.getElementById('date_in_time');


document.getElementById('add_work').addEventListener('click', function () {
    return console.log(time_spend + _date)
        .then(function () {
            t.closePopup();
        })
})