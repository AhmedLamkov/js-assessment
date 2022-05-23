exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
	listFiles: function (data, dirName) {
		let listOfFiles = [];
		let dirs = [];

		function processDir(dir) {
			let i;
			let file;
			let files = dir.files;

			dirs.push(dir.dir);

			for (i = 0; i < files.length; i++) {
				file = files[i];
				if (typeof file === "string") {
					if (!dirName || dirs.indexOf(dirName) > -1) {
						listOfFiles.push(files[i]);
					}
				} else {
					processDir(files[i]);
				}
			}

			dirs.pop();
		}

		processDir(data);

		return listOfFiles;
	},

	permute: function (arr) {
		var temp = [];
		var answer = [];

		function logResult() {
			answer.push(temp.slice());
		}

		function doIt() {
			let i;
			let item;

			for (i = 0; i < arr.length; i++) {
				item = arr.splice(i, 1)[0];
				temp.push(item);

				if (arr.length) {
					doIt();
				} else {
					logResult();
				}
				arr.splice(i, 0, item);
				temp.pop();
			}
			return answer;
		}

		return doIt();
	},

	fibonacci: function (n) {
		let a = 0;
		let b = 1;
		let c = 0;
		for (let i = 2; i <= n; i++) {
			c = a + b;
			a = b;
			b = c;
		}

		return n ? b : a;
	},

	validParentheses: function (n) {
		const addParanthesis = (cur, open, close) => {
			if (cur.length === n * 2) {
				res.push(cur);
				return;
			}
			if (open < n) {
				addParanthesis(cur + "(", open + 1, close);
			}
			if (close < open) {
				addParanthesis(cur + ")", open, close + 1);
			}
		};
		const res = [];
		addParanthesis("", 0, 0);
		return res;
	},
};
