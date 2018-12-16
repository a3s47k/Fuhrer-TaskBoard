const express = require('express');

const router = express.Router();
var fs = require('fs');
var md5 = require('md5');


router.post('/', (req, res, next) => {
	console.log(123)
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT,POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	var object;
	fs.readFile('./db/users.json', 'utf8', function (err, data) {
		if (err) throw err;
		object = JSON.parse(data);
		let pass = md5(req.body.password);
		let user = req.body.username.toLowerCase().trim();
		var flag = false;
		let message;
		let tmpJson = {
			username: null,
			fullname: null,
			email: null,
		}
		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				var element = object[key];
				if (element.username === user) {
					if (element.password === (pass)) {
						flag = true;
						tmpJson.username = element.username;
						tmpJson.fullname = element.fullname;
						tmpJson.email = element.email;
						break;
					}

				}
			}
		}
		if (flag === true) {
			res.jsonp({
				status: true,
				message: "Login success",
				data: tmpJson
			})

		} else {
			res.jsonp({
				status: false,
				message: "Login fail"
			})
		}
	});
});

module.exports = router;















// const express = require('express');
// var bodyParser = require('body-parser');
// const router = express.Router();
// var fs = require('fs');
// var md5 = require('md5');

// router.post('/', (req, res, next) => {

// 	var obj;
// 	fs.readFile('./db/user.json', 'utf8', function (err, data) {
// 		if (err) throw err;
// 		obj = JSON.parse(data);

// 		let status = false;


// 		for (let key in obj) {
// 			if (obj.hasOwnProperty(key)) {
// 				let user = req.body.username;
// 				let pass = md5(req.body.password);
// 				let element = obj[key];
// 				console.log(element.username)
// 				console.log(element.password)
// 				if (element.username === user) {
// 					console.log(user+" "+element.user)
// 					if (element.password === pass) {

// 						status = true;
// 					} else {
// 						status = false;

// 					}
// 				} else {
// 					status = false
// 				}
// 			}
// 		}
// 		console.log(status)
// 		console.log("_____________")
// 		if (status === true) {
// 			res.redirect('/')
// 		} else {
// 			res.redirect('/login')
// 		}
// 	});
// });

// module.exports = router;
