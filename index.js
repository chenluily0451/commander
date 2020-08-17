#!/usr/bin/env node

const program = require('commander');
const Prompt = require("inquirer");
const util = require('./util');



program
	.description('平台初始化工具')
	.version('0.0.1','-v','查看当前版本号')


program
	.command("init")
	.alias("ii")
	.description("初始化平台")
	.action(() => {
		Prompt.prompt(util.loginQuestions).then(result => {
			console.log("您的项目名称是：" + JSON.stringify(result));
			return new Promise(resolve =>{
				util.execFun1(result.projectName).then(res=>{
					console.log(`文件夹${result.projectName}已创建...`);
					resolve(result.projectName)
				});
			})
		}).then( res =>{
			console.log(res)
			Prompt.prompt(util.initQuestions).then(result => {
				console.log("您选择的技术栈信息如下：" + result.platType);
				util.execFun2(res, result.platType).then(res=>{
					console.log("项目安装中...")
				})
			});
		})

	})


program.parse(process.argv);