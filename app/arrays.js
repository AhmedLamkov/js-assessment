exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
	indexOf: function (arr, item) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				return i;
			}
		}

		return -1;
	},

	sum: function (arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	},

	remove: function (arr, item) {
		const result = arr.filter((x) => x !== item);
		for (let i = 0; i < arr.length; i++) {
			return result;
		}
	},

	removeWithoutCopy: function (arr, item) {
		for (i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				arr.splice(i, 1);
				i--;
				arr.length--;
			}
		}
		return arr;
	},

	append: function (arr, item) {
		arr.push(item);
		return arr;
	},

	truncate: function (arr) {
		arr.pop();
		return arr;
	},

	prepend: function (arr, item) {
		arr.unshift(item);
		return arr;
	},

	curtail: function (arr) {
		arr.shift(arr);
		return arr;
	},

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insert: function (arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
	},

	count: function (arr, item) {
		let count = 0;
		for (i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				count++;
			}
		}
		return count;
	},

	duplicates: function (arr, copies) {
		const uniqSet = new Set();
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < i; j++)
				if (arr[j] === arr[i]) {
					uniqSet.add(arr[i]);
				}
		}
		const uniq = Array.from(uniqSet);
		return uniq;
	},

	square: function (arr) {
		let ret = [];

		for (i = 0; i < arr.length; i++) {
			ret.push(arr[i] * arr[i]);
		}

		return ret;
	},

	findAllOccurrences: function (arr, target) {
		let indexes = [],
			i;
		for (i = 0; i < arr.length; i++) if (arr[i] === target) indexes.push(i);
		return indexes;
	},
};
