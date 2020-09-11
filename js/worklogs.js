var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

t.render(function () {
    return t.get('card', 'shared', 'all_time', 'not set')
        .then(function (time_list) {
            for (var i = 0; i < time_list.length; i++) {

                var x = document.getElementById('list_date');
                var opt = document.createElement('li');
                var node = document.createTextNode(time_list[i].name + ' - ' + time_list[i].time_start + ' ' + time_list[i].time_spend);
                opt.appendChild(node);
                x.appendChild(opt);
            }
        }).then(function () {
            t.sizeTo('#content');
        });
});




