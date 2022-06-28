const fn1 = (num) => {
	console.log("hello hi welcome to fn1");
	let x;
	setTimeout(() => {
		// console.log("fn1 param is ", num);
		x = 101;
		console.log("the x is", x);
		setTimeout(() => {
			console.log("hello welcome to 2nd timeout");
		}, 10000);
	}, 5000);
	console.log(x);
	console.log("bye from fn1");
};
const fn2 = (num) => {
	console.log("hello the fn2 num param is", num);
};

fn1(10);
fn2(100);
