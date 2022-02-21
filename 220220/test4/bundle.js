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

	let a$1 = {
	    func: () => {
	        console.log("It's an a-func...");
	    },
	    deadCode() {
	        console.log("[a.js deadCode] Never been called here");
	    }
	};

	var a$2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		a: a$1
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(a$2);

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
