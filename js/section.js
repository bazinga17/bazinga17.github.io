var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

//document.getElementById('date_in_time').value.set()

var time_spend = document.getElementById('get_time');
var _date = document.getElementById('date_in_time');

function div(val) {
    return (val - val % 60) / 60;
}

function get_spend(interval, d_val) {

    console.log(d_val);

    let res = interval.split(" ", 3);
    console.log(res);

    if (res.length == 3) // all time
    {
        let _sec = parseFloat(res[2]) + d_val[0].sec;
        let _min = parseFloat(res[1]) + d_val[0].min;

        var s_del = div(_sec);
        var m_del = div(_min);

        d_val[0].sec = _sec - 60 * s_del;
        d_val[0].min = _min - 60 * m_del + s_del;
        d_val[0].hour += parseFloat(res[0]) + m_del;
    }
    else if (res.length == 2)// h and min
    {
        let _min = parseFloat(res[1]) + d_val[0].min;

        var m_del = div(_min);

        d_val[0].min = _min - 60 * m_del;
        d_val[0].hour += parseFloat(res[0]) + m_del;
    }
    else if (res.length == 1) //h
    {
        d_val[0].hour += parseFloat(res[0]);
    }
    console.log(d_val);

    return d_val;
}

window.insert_time.addEventListener('submit', function (event) {
    event.preventDefault();

    t.get('card', 'shared', 'all_time', 'no')
        .then(function (all_time) {

            if (all_time != 'no')
            {
                let date_time = all_time;//for all time
                console.log(date_time);

                if (time_spend.value != "")
                {
                    var res = time_spend.value.split(" ", 3);

                    get_spend(time_spend.value, date_time);

                    return t.set('card', 'shared', 'all_time', date_time).then(function () { t.closePopup(); });
                }
            }
            else                //new card
            {
                let date_time = [{ hour: 0, min: 0, sec: 0 }];//for all time

                if (time_spend.value != "")
                {                    
                    var res = time_spend.value.split(" ", 3);

                    get_spend(time_spend.value, date_time);                    

                    return t.set('card', 'shared', 'all_time', date_time).then(function () { t.closePopup(); });
                }
            }
        });

//    t.get('card', 'shared', 'user_list123', 'no').then(function (list_user)
//    {
//        if (list_user != 'no') {
//            let users = list_user;

//            let val = new Date(_date.value);
//            let _d = val.getFullYear() + '/' + (val.getMonth() + 1) + '/' + val.getDate();
//            let _t = val.getHours() + ':' + val.getMinutes() + ':' + val.getSeconds();

//            users.push({ name: 'name1', date_in: _d, time_in: _t, spend: time_spend.value });

//            return t.set('card', 'shared', 'user_list', users).then(function () { t.closePopup(); });
//        }
//        else {
//            let users = [];

//            let val = new Date(_date.value);
//            let _d = val.getFullYear() + '/' + (val.getMonth() + 1) + '/' + val.getDate();
//            let _t = val.getHours() + ':' + val.getMinutes() + ':' + val.getSeconds();

//            users.push({ name: 'name1', date_in: _d, time_in: _t, spend: time_spend.value });

//            return t.set('card', 'shared', 'user_list', users).then(function () { t.closePopup(); });
//        }
//    });
}); 

t.render(function () {
    return t.sizeTo('#insert_time');

});
