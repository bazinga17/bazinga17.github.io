var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

TrelloPowerUp.initialize({
  // Start adding handlers for your capabilities here!
	'card-buttons': function (t, options)
	{
		return t.set("member", "shared", "hello", "world").then(function () {
			return [{
				icon: BLACK_ROCKET_ICON, text: 'Estimate Size', callback: function (t) {
					return t.popup({
						title: "Estimation",
						url: 'estimate.html',
					});
				}
			}];
		})
    },

    'card-badges': function (t, opts)
    {
        let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
        return t.card('name')
            .get('name')
            .then(function (cardName) {
                console.log('We just loaded the card name for fun: ' + cardName);
                console.log(t);
                console.log(opts);
                return [{
                    // Dynamic badges can have their function rerun
                    // after a set number of seconds defined by refresh.
                    // Minimum of 10 seconds.
                    dynamic: function () {
                        // we could also return a Promise that resolves to
                        // this as well if we needed to do something async first
                        return {
                            text: cardName,
                            icon: BLACK_ROCKET_ICON,
                            color: 'green',
                            refresh: 10 // in seconds
                        };
                    }
                }, {
                    // It's best to use static badges unless you need your
                    // badges to refresh.
                    // You can mix and match between static and dynamic
                        text: 'Static',
                        icon: BLACK_ROCKET_ICON, // for card front badges only
                    color: null
                }];
            });
    }
}); 




