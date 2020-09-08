//var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var time_spend = document.getElementById('get_time').value;
var _date = document.getElementById('date_in_time').value;


window.insert_time.addEventListener('submit', function (event) {
    event.preventDefault();
    return t.set('card', 'shared', 'time_list', time_spend).then(function () { t.closePopup(); });
}); 


t.render(function () {
    return t.getAll()//('card', 'shared', 'time_list')
        //.then(function (time_list) {
        //    window.get_time.value = time_list;
        //    console.log(time_list);
        //})
        .then(function (data) {
            console.log(JSON.stringify(data));
            t.sizeTo('#insert_time').done()
        });
});


//t.render(function () {
//    //return Promise.all([t.get('card', 'shared', 'time_list')]);
//    t.get('card', 'shared', 'time_list', 'not set')
//        .then(function (data) {
//            console.log(JSON.stringify(data, null, 2));
//        });

//});

//document.getElementById('add_work').addEventListener('click', function () {    
//    t.set('card', 'shared', 'time_list', time_spend + _date);

//    t.get('card', 'shared', 'time_list', 'not set')
//        .then(function (data) {
//            console.log(JSON.stringify(data, null, 2));
//        });

//    return console.log('add');
//})
