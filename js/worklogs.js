var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

t.render(function () {
    return t.get('card', 'shared', 'time_list', 'not set')
        .then(function (data) {
            var x = document.getElementById('list_date');
            console.log(x);
            var opt = document.createElement('li');
            opt.text = data;
            x.append(opt);

        }).then(function () {
            t.sizeTo('#content');
        });
});




