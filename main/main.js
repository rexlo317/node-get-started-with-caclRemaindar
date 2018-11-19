// Write your cade below:
function caclRemaindar(a, b) {
	return a%b;
};

function caclSum(Ary) {
	var a = 0;
	for (let i=0; i<Ary.length; i++)
		a = a + Ary[i];
	return a;
};

function caclSumInConditon(Ary,b) {
	var a = 0;
	for (let i=0; i<Ary.length; i++){
		if (Ary[i] < b)
			a = a + Ary[i];
	}
	return a;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}