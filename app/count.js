exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
	count: function (start, end) {
		let timeout;
		function doIt() {
			console.log(start++);

			if (start <= end) {
				timeout = setTimeout(doIt, 100);
			}
		}

		doIt();

		return {
			cancel: function () {
				timeout && clearTimeout(timeout);
			},
		};
	},
};
