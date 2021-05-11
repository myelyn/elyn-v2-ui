const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')

let indexPath

fs.readdir(path.resolve('./packages'), (err, files) => {
	
	if (err) {
		console.log(err)
		process.exit(1)
	}
	inquirer.prompt([
		{
			type: 'list',
			message: '请选择组件',
			name: 'name',
			choices: files
		}
	]).then(answers => {
		indexPath = `./packages/${answers.name}/example/index.html`
		run()
	})
})

function run () {
  console.log(`parcel ${indexPath} -p 3000`)
  spawn('parcel', [indexPath, '-p', '3000'], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  })
}
