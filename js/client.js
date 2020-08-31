var Promise = TrelloPowerUp.Promise;

var icon_time = 'https://bazinga17.github.io/icon_tr.png';

console.log('2');
var time_all = 52;
var time_uniq = 2;

TrelloPowerUp.initialize({
    'card-badges': function (t, opts)
    {
        return t.card('name').get('name').then(function (cardName) {
            return [{ text: time_all }, { text: time_uniq }];
        });
    },

    'board-buttons': function (t, opts) {
        return [{
            icon: {
                dark: icon_time,
                light: BLACK_ICON
            },
            text: 'Callback',
            callback: function () { console.log(t.board()); },
        }
        ]
    }
});


//TrelloPowerUp.initialize({
//  // Start adding handlers for your capabilities here!
//	'card-buttons': function (t, options)
//	{
//		return t.set("member", "shared", "hello", "world").then(function () {
//			return [{
//				icon: BLACK_ROCKET_ICON, text: 'Estimate Size', callback: function (t) {
//					return t.popup({
//						title: "Estimation",
//						url: 'estimate.html',
//					});
//				}
//			}];
//		})
//    },

//    'card-badges': function (t, opts)
//    {
//        let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
//        t.card()

        
//        return t.card('name')
//            .get('name')
//            .then(function (cardName) {
//                console.log('We just loaded the card name for fun: ' + cardName);
//                console.log(t);
//                console.log(opts);
//                return [{
//                    // Dynamic badges can have their function rerun
//                    // after a set number of seconds defined by refresh.
//                    // Minimum of 10 seconds.
//                    dynamic: function () {
//                        // we could also return a Promise that resolves to
//                        // this as well if we needed to do something async first
//                        return {
//                            text: cardName,
//                            icon: BLACK_ROCKET_ICON,
//                            color: 'green',
//                            refresh: 10 // in seconds
//                        };
//                    }
//                }, {
//                    // It's best to use static badges unless you need your
//                    // badges to refresh.
//                    // You can mix and match between static and dynamic
//                        text: 'Static',
//                        icon: BLACK_ROCKET_ICON, // for card front badges only
//                    color: null
//                }];
//            });
//    }
//}); 

//window.TrelloPowerUp.initialize({
//    'board-buttons': function (t, opts) {
//        return [{
//            icon: {
//                dark: icon_time,
//                //light: BLACK_ICON
//            },
//            text: 'Callback',
//            callback: function () { console.log('click'); },

//        }
//        ]
//    }
//});




