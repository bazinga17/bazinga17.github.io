var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  // Start adding handlers for your capabilities here!
	 'card-buttons': function(t, options) {
	 return t.set("member", "shared", "hello", "world")
	// .then(function(){
	// 	  return [{
	// icon: BLACK_ROCKET_ICON,
	// 		  text: 'Estimate Size',
	//       callback: function(t) {
	//         return t.popup({
	//           title: "Estimation",
	//           url: 'estimate.html',
	//         });
	//       }
	// 	  }];
	// })
	// },
}); 
