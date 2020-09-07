var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var time_spend = document.getElementById('get_time').value;
var _date = document.getElementById('date_in_time').value;

t.render(function () {
    //return Promise.all([t.get('card', 'shared', 'time_list')]);
    document.getElementById('date_in_time') = Date().toISOString();
});

document.getElementById('add_work').addEventListener('click', function () {    
    t.set('card', 'shared', 'time_list', time_spend + _date);
    return console.log('add');
})
