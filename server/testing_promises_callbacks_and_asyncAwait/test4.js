let promise = new Promise((resolve, reject) => {
	console.log("1");
	setTimeout(() => {
		resolve(100);
	}, 10000);
	console.log("2");
});
const fn2 = () => {
	console.log("i am fn2");
	return promise;
};

console.log("inbetween");
const fn = async () => {
	let x;
	console.log("the before value of x is", x);
	// x = await promise;
	// x = fn2();
	x = await fn2();
	console.log("the after value of x is", x);
	console.log("hello bye bye ji");
};
fn();
