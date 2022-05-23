exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
	async: function (value) {
		let item = $.Deferred();
		setTimeout(function () {
			item.resolve(value);
		}, 10);
		return item.promise();
	},

	manipulateRemoteData: function (url) {
		let item = $.Deferred();

		$.ajax(url).then(function (resp) {
			let people = $.map(resp.people, function (person) {
				return person.name;
			});
			item.resolve(people.sort());
		});

		return item.promise();
	},
};
