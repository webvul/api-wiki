var request = require('request')
	, mongoose = require('mongoose')
	, crypto = require('crypto');

exports.login = function (req, res) {
	res.render('user/index', {
		title: '登陆',
		message: req.flash('error')
	})
}

exports.logout = function (req, res) {
	req.session.empNo = null;
	req.session.username = null;
    res.redirect('/');
}

exports.session = function(req, res) {
	var empNo = req.body.empNo;
	var password = req.body.password;
	
	
//	console.log(empNo + " ==> " + password);
//	var usercode = req.body.empNo;
//	var passwordhash = crypto.createHash('md5').update(req.body.password).digest("hex");
//	req.session.username = 'admin';
//	req.session.empNo = '90592';
//	res.redirect('/');
//
//
//	request({url: 'http://100.dooioo.com:10019/account/loginMd5Pass/'+usercode+'/'+passwordhash, json:true}, function (error, response, body){
//		if (!error && response.statusCode == 200) {
//			if(body.status === "ok") {
//				request({url:'http://100.dooioo.com:10019/account/info/'+usercode, json:true}, function(error, response, body){
//					req.session.username = body.employeeInfo.userName || usercode;
//					req.session.empNo = usercode;
//
//
//					User.update({empNo: usercode}, {"username": body.employeeInfo.userName, "empNo": usercode}, {"upsert": true}, function (err, numberAffected, raw){
//						//console.log('The raw response from Mongo was ', raw);
//					});
//
//					res.redirect('/');
//				});
//
//			} else {
//				res.redirect('/login');
//			}
//		} else {
//			res.redirect('/login');
//		}
//	});
}