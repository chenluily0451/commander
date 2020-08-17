const exec = require('child_process').exec;

const initQuestions = [{
	type: 'list',
	name: 'platType',
	message: '请选择平台类型?',
	choices: [
		'vue',
		'react',
		'angular'
	]
}];

const loginQuestions = [
	{
		type: 'input',
		name: 'projectName',
		message: '请输入项目名称',
	}
]

const execFun1 = function (dirName){
	return new Promise(function (resolve, reject){
		exec('mkdir ' + dirName,function (err,con) {
			if (err) {
				console.error(err);
				return;
			}
		});
		resolve();
	});
}
const execFun2 = function (dirName, platform){
	return new Promise(function (resolve, reject){
		exec('npm install ' + platform + ' --save',function (err,con) {
			if (err) {
				console.error(err);
				return;
			}
		});

		resolve();
	});
}

module.exports = {
	initQuestions,
	loginQuestions,
	execFun1,
	execFun2
}