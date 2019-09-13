function msg(num) {
	console.log('completed', num);
}

function test1(callback) {
	setTimeout(function() {
		var prime = 0;
		var flag = true;
		for (var i = 3; i < 10000; i++) {
			flag = true;
			for (var j = 2; j < i; j++) {
				if (i % j === 0) {
					flag = false;
					break;
				}
			}
			if (flag) {
				console.log(i);
				prime += 1;
			}
		}
		callback(prime);
	}, 0);
}


console.log('started');
test1(msg);
console.log('finished');