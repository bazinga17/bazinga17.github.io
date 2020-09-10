var Promise = TrelloPowerUp.Promise;

var icon_time = 'https://bazinga17.github.io/icon_tr.png';
var _name = "TimeTrack";
var time_all = 52;
var time_uniq = 2;

TrelloPowerUp.initialize({
    'card-back-section': function (t, options) {
        //var claimed = options.entries.filter(function (attechment) { return attechment })
        return [{
            id: 'Worktime', // optional if you aren't using a function for the title
            //claimed: claimed,
            icon: icon_time, // Must be a gray icon, colored icons not allowed.
            title: 'Work log',
            content: {
                type: 'iframe',
                url: t.signUrl('./worklogs.html', {
                    arg: 'you can pass your section args here'
                }),
                height: 230
            }
        }];
    },

    'card-badges': function (t, opts) {
        return t.get('card', 'shared', 'time_list')
            .then(function (time_list) {
                return [{
                    text: time_list[0] + 'h ' + time_list[1] + 'm ' + time_list[2] + 's' || '',
                    color: time_list ? 'blue' : null,
                }];
            });
    },
    'board-buttons': function (t, opts) {
        return [{
            icon: {
                dark: icon_time,
            },
            text: 'Upload time',
            callback: function () { console.log(t.list("name")); },
        }
        ]
    },

    'card-buttons': function (t, options) {
        return [{
            text: _name,
            icon: icon_time,
            callback: chooseTime
        }]
    },

    'card-detail-badges': function (t, options) {
        return t.get('card', 'shared', 'time_list')
            .then(function (time_list) {
                return [{
                    title: "Time",
                    text: time_list[0] + 'h ' + time_list[1] + 'm ' + time_list[2] + 's' || '',
                    color: time_list ? 'blue' : null,
                }];
            });
    }
    
});

var chooseTime = function (t) {
    return t.popup({
        title: 'Add work time',
        url: './section.html',
    })
};


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

var randomBadgeColor = function () {
    return ['green', 'yellow', 'red', 'none'][Math.floor(Math.random() * 4)];
};

var getBadges = function (t) {
    return t.card('name')
        .get('name')
        .then(function (cardName) {
            console.log('We just loaded the card name for fun: ' + cardName);

            return [{
                // dynamic badges can have their function rerun after a set number
                // of seconds defined by refresh. Minimum of 10 seconds.
                dynamic: function () {
                    // we could also return a Promise that resolves to this as well if we needed to do something async first
                    return {
                        title: 'Detail Badge', // for detail badges only
                        text: 'Dynamic ' + (Math.random() * 100).toFixed(0).toString(),
                        color: randomBadgeColor(),
                        refresh: 10 // in seconds
                    };
                }
            }, {
                // its best to use static badges unless you need your badges to refresh
                // you can mix and match between static and dynamic
                title: 'Detail Badge', // for detail badges only
                text: 'Static',
                color: null
            }, {
                // card detail badges (those that appear on the back of cards)
                // also support callback functions so that you can open for example
                // open a popup on click
                title: 'Popup Detail Badge', // for detail badges only
                text: 'Popup',
                callback: function (context) { // function to run on click
                    return context.popup({
                        title: 'Card Detail Badge Popup',
                        url: './settings.html',
                        height: 184 // we can always resize later, but if we know the size in advance, its good to tell Trello
                    });
                }
            }, {
                // or for simpler use cases you can also provide a url
                // when the user clicks on the card detail badge they will
                // go to a new tab at that url
                title: 'URL Detail Badge', // for detail badges only
                text: 'URL',
                url: 'https://trello.com/home',
                target: 'Trello Landing Page' // optional target for above url
            }];
        });
};

var boardButtonCallback = function (t) {
    return t.popup({
        title: 'Popup List Example',
        items: [
            {
                text: 'Open Modal',
                callback: function (t) {
                    return t.modal({
                        url: './modal.html', // The URL to load for the iframe
                        args: { text: 'Hello' }, // Optional args to access later with t.arg('text') on './modal.html'
                        accentColor: '#F2D600', // Optional color for the modal header 
                        height: 500, // Initial height for iframe; not used if fullscreen is true
                        fullscreen: true, // Whether the modal should stretch to take up the whole screen
                        callback: () => console.log('Goodbye.'), // optional function called if user closes modal (via `X` or escape)
                        title: 'Hello, Modal!', // Optional title for modal header
                        // You can add up to 3 action buttons on the modal header - max 1 on the right side.
                        actions: [{
                            url: 'https://google.com', // Opens the URL passed to it.
                            alt: 'Leftmost',
                            position: 'left',
                        }, {
                            callback: (tr) => tr.popup({ // Callback to be called when user clicks the action button.
                                title: 'Settings',
                                url: 'settings.html',
                                height: 164,
                            }),
                            alt: 'Second from left',
                            position: 'left',
                        }, {
                            callback: () => console.log('🏎'),
                            alt: 'Right side',
                            position: 'right',
                        }],
                    })
                }
            },
            {
                text: 'Open Board Bar',
                callback: function (t) {
                    return t.boardBar({
                        url: './board-bar.html',
                        height: 200
                    })
                        .then(function () {
                            return t.closePopup();
                        });
                }
            }
        ]
    });
};

var cardButtonCallback = function (t) {
    // Trello Power-Up Popups are actually pretty powerful
    // Searching is a pretty common use case, so why reinvent the wheel
    var items = ['acad', 'arch', 'badl', 'crla', 'grca', 'yell', 'yose'].map(function (parkCode) {
        var urlForCode = 'http://www.nps.gov/' + parkCode + '/';
        var nameForCode = '🏞 ' + parkCode.toUpperCase();
        return {
            text: nameForCode,
            url: urlForCode,
            callback: function (t) {
                // In this case we want to attach that park to the card as an attachment
                // but first let's ensure that the user can write on this model
                if (t.memberCanWriteToModel('card')) {
                    return t.attach({ url: urlForCode, name: nameForCode })
                        .then(function () {
                            // once that has completed we should tidy up and close the popup
                            return t.closePopup();
                        });
                } else {
                    console.log("Oh no! You don't have permission to add attachments to this card.")
                    return t.closePopup(); // We're just going to close the popup for now.
                };
            }
        };
    });

    // we could provide a standard iframe popup, but in this case we
    // will let Trello do the heavy lifting
    return t.popup({
        title: 'Choose time',
        items: items, // Trello will search client-side based on the text property of the items
        search: {
            count: 5, // How many items to display at a time
            placeholder: 'Search National Parks',
            empty: 'No parks found'
        }
    });

    // in the above case we let Trello do the searching client side
    // but what if we don't have all the information up front?
    // no worries, instead of giving Trello an array of `items` you can give it a function instead
    /*
    return t.popup({
      title: 'Popup Async Search',
      items: function(t, options) {
        // use options.search which is the search text entered so far
        // and return a Promise that resolves to an array of items
        // similar to the items you provided in the client side version above
      },
      search: {
        placeholder: 'Start typing your search',
        empty: 'Huh, nothing there',
        searching: 'Scouring the internet...'
      }
    });
    */
};
