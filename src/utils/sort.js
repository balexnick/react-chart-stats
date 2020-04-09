export const sortLow = (arr, row) =>{
	arr.sort(function(a, b) {
		return b[row] - a[row];
	})
}

export const sortHigh = (arr, row) =>{
	arr.sort(function(a, b) {
		return a[row] - b[row];
	})
}