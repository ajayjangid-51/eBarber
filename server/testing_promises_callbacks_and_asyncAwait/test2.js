let promise1 = new Promise((resolve, reject) => {
	console.log("hello welcome to promise1");
	let x;
	console.log("the before x value is ", x);
	// setTimeout(() => {
	// 	x = 500;
	// 	resolve(() => {
	// 		console.log("the value of x is", x);
	// 	});
	// }, 10000);
	setTimeout(() => {
		x = 1000;
	}, 10000);

	// resolve();
	reject();
	console.log("the after x value is ", x);
	console.log("bye from promise1");
});

console.log("hello world!!");
// console.log(promise1.state);
promise1.then(
	() => {
		console.log("hello");
	},
	() => {
		console.log("rejected....");
	}
);
