exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
	reduceString: function (str, amount) {
		let re = new RegExp("(.)(?=\\1{" + amount + "})", "g");
		return str.replace(re, "");
	},

	wordWrap: function (str, cols) {
		let formatedString = "",
			wordsArray = [];
		wordsArray = str.split(" ");
		formatedString = wordsArray[0];
		for (let i = 1; i < wordsArray.length; i++) {
			if (wordsArray[i].length > cols) {
				formatedString += "\n" + wordsArray[i];
			} else {
				if (formatedString.length + wordsArray[i].length > cols) {
					formatedString += "\n" + wordsArray[i];
				} else {
					formatedString += " " + wordsArray[i];
				}
			}
		}

		return formatedString;
	},

	reverseString: function (str) {
		return str.split("").reverse().join("");
	},
};
