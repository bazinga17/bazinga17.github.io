var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var time_spend = document.getElementById('get_time');
var _date = document.getElementById('date_in_time');


window.insert_time.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(time_spend.value);
    return t.set('card', 'shared', 'time_list', time_spend.value).then(function () { t.closePopup(); });
}); 

//t.render(function () {
//    return t.get('card', 'shared', 'time_list')
//        .then(function (time_list) {
//            time_spend.value = time_list;
//        })
//        .then(function () {
//            t.sizeTo('#insert_time');
//        });
//});
