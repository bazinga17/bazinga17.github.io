var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();


var time_spend = document.getElementById('get_time');
var _date = document.getElementById('date_in_time');

function div(val) {
    return (val - val % 60) / 60;
}

window.insert_time.addEventListener('submit', function (event) {
    event.preventDefault();

    //t.get('card', 'shared', 'all_time', 'no')
    //    .then(function (all_time) {

    //        if (all_time != 'no')
    //        {
    //            let date_time = all_time;//for all time

    //            console.log(date_time);

    //            if (time_spend.value != "")
    //            {
    //                var res = time_spend.value.split(" ", 3);

    //                if (res.length == 3) // all time
    //                {
    //                    let _sec = parseFloat(res[2]) + date_time[0].sec;
    //                    let _min = parseFloat(res[1]) + date_time[0].min;

    //                    var s_del = div(_sec);
    //                    var m_del = div(_min);

    //                    date_time[0].sec = _sec - 60 * s_del;
    //                    date_time[0].min = _min - 60 * m_del + s_del;
    //                    date_time[0].hour += parseFloat(res[0]) + m_del;

    //                }
    //                else if (res.length == 2)// h and min
    //                {
    //                    let _min = parseFloat(res[1]) + date_time[0].min;

    //                    var m_del = div(_min);

    //                    date_time[0].min = _min - 60 * m_del;
    //                    date_time[0].hour += parseFloat(res[0]) + m_del;
    //                }
    //                else if (res.length== 1) //h
    //                {
    //                    date_time[0].hour += parseFloat(res[0]);
    //                }
    //            }
    //            console.log(date_time);
    //            return t.set('card', 'shared', 'all_time', date_time).then(function () { t.closePopup(); });
    //        }
    //        else                //new card
    //        {
    //            let date_time = [{ hour: 0, min: 0, sec: 0 }];//for all time

    //            if (time_spend.value != "")
    //            {                    
    //                var res = time_spend.value.split(" ", 3);

    //                if (res.length == 3) // all time
    //                {
    //                    var s_del = div(parseFloat(res[2]));
    //                    var m_del = div(parseFloat(res[1]));

    //                    date_time[0].sec = parseFloat(res[2]) - 60 * s_del;
    //                    date_time[0].min = parseFloat(res[1]) - 60 * m_del + s_del;
    //                    date_time[0].hour = parseFloat(res[0]) + m_del;

    //                }
    //                else if (res.length == 2)// h and min
    //                {
    //                    var m_del = div(parseFloat(res[1]));

    //                    date_time[0].min = parseFloat(res[1]) - 60 * m_del;
    //                    date_time[0].hour = parseFloat(res[0]) + m_del;
    //                }
    //                else if (res.length == 1) //h
    //                {
    //                    date_time[0].hour = parseFloat(res[0]);
    //                }

    //                return t.set('card', 'shared', 'all_time', date_time).then(function () { t.closePopup(); });
    //            }
    //        }
    //    });

    t.get('card', 'shared', 'user_list123', 'no').then(function (list_user)
    {
        //if (list_user != 'no') {
        //    let list_us = list_user;

        //    list_us.add({ name: 'user2', time_start: _date.value, spend: time_spend.value });
        //    console.log(list_us);

        //    return t.set('card', 'shared', 'user_list', list_us).then(function () { t.closePopup(); });
        //}
        //else
        //{
            var users = [{ name: 'name1', time_start: _date.value, spend: time_spend.value }];
            console.log(users);
            return t.set('card', 'shared', 'user_list', users).then(function () { t.closePopup(); });
        //}
    });
}); 

t.render(function () {
    return t.sizeTo('#insert_time');

});
