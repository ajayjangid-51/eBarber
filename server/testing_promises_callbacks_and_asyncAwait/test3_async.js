const fn = async () => {
	let i = 1;
	while (i < 10000) i++;
	console.log("the value of i is ", i);
	setTimeout(() => {
		return "hello";
	}, 5000);
	// return "hello";
};
console.log("comeon broo.");
const fn1 = async () => {
	return "okay";
};
fn().then(
	() => {
		console.log("hello good");
	},
	() => {
		console.log("error ji");
	}
);
fn1().then(() => {
	console.log("i am fn1");
});
console.log("hi broooo...");
console.log("bye broo..");
