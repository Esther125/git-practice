// ary: number array
function sum(ary) {
	// TODO: sum all elements in ary
	let result = ary.reduce(
		(accumulator, current) => accumulator + current
	);
	return result;
}

console.log(sum([1, 5, 3, 2])); // 11