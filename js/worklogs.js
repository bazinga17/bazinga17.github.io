var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

t.render(function () {
    return t.get('card', 'shared', 'all_time', 'not set')
        .then(function (time_list) {
            var x = document.getElementById('list_date');
            var opt = document.createElement('li');
            var node = document.createTextNode(time_list[0].hour + 'h ' + time_list[0].min + 'm ' + time_list[0].sec + 's');
            opt.appendChild(node);
            x.appendChild(opt);
        }).then(function () {
            t.sizeTo('#content');
        });
});




