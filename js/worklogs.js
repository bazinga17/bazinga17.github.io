var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

t.render(function () {
    return t.get('card', 'shared', 'time_list', 'not set')
        .then(function (data) {
            var x = document.getElementById('list_date');
            var opt = document.createElement('li');
            opt.text = data;
            x.appendChild(opt);

        }).then(function () {
            t.sizeTo('#content');
        });
});




