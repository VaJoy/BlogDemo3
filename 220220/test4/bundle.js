(function () {
	'use strict';

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	let func$1 = () => {
	    console.log("It's an a-func...");
	};

	let deadCode = () => {
	    console.log("[a.js deadCode] Never been called here");
	};

	var a$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		func: func$1,
		deadCode: deadCode
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(a$1);

	// named exports
	var b = {
	    func() {
	        console.log("It's a b-func...");
	    },
	    deadCode() {
	        console.log("[b.js deadCode] Never been called here");
	    }
	};

	var func = () => {
	    console.log("It's a c-func...");
	};

	let a = require$$0;

	a.func();
	b.func();
	func();

})();
