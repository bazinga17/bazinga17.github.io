var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var time_spend = document.getElementById('get_time');
var _date = document.getElementById('date_in_time');

var list = [];
var timeAll = 0;

window.insert_time.addEventListener('submit', function (event) {
    event.preventDefault();
    t.get('card', 'shared', 'time_list', 'no')
        .then(function (time_list) {
            if (time_list != 'no') {
                timeAll = parseFloat(time_spend.value) + parseFloat(time_list)
            }
            console.log(timeAll);

            return t.set('card', 'shared', 'time_list', timeAll).then(function () { t.closePopup(); });
        });
}); 

t.render(function () {
    return t.sizeTo('#insert_time');

});
