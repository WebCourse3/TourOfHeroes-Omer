import {Configuration,Color,Level} from './Configurations';
import * as fs from 'fs';

export class Logger {
	name: string;
	config: Configuration;

	constructor(name: string, configuration: Configuration) {
		this.name = name;
		this.config = configuration;
	}

	public log(level?: Level, ...strings: Array<string>) {
		let options = {
			"debug"   : this.debug,
			"info"    : this.info,
			"warning" : this.warning,
			"error"   : this.error
		};
		let lvl = level || this.config.logLevel;
		options[lvl].apply(this,strings);
	}

	public debug(...strings: Array<string>) {
		if (this.config.console) {
			this.debugToConsole(strings);
		}
		if (this.config.file) {
			this.debugToFile(strings);
		}
	}

		private debugToConsole(strings: Array<string>) {
		if (this.config.colors) {
			strings.forEach((msg) => {
				console.log(Color.White + '%s\x1b[0m', msg);
			});
		}
		else {
			strings.forEach((msg) => {
				console.log(msg);
			});
		}

	}

		private debugToFile(strings: Array<string>) {
			strings.forEach((msg) => {
				fs.appendFile(__dirname + 'test.log', `DEBUG: ${msg}\n`, function (err) {
					if (err) throw err;
				});
			})
	}

	public info(...strings: Array<string>) {
		if (this.config.console) {
			this.infoToConsole(strings);
		}
		if (this.config.file) {
			this.infoToFile(strings);
		}
	}

		private infoToConsole(strings: Array<string>) {
		if (this.config.colors) {
			strings.forEach((msg) => {
				console.log(Color.Green + '%s\x1b[0m', msg);
			});
		}
		else {
			strings.forEach((msg) => {
				console.log(msg);
			});
		}

	}

		private infoToFile(strings: Array<string>) {
			strings.forEach((msg) => {
				fs.appendFile(__dirname + 'test.log', `INFO: ${msg}\n`, function (err) {
					if (err) throw err;
				});
			})
	}

	public warning(...strings: Array<string>) {
		if (this.config.console) {
			this.warningToConsole(strings);
		}
		if (this.config.file) {
			this.warningToFile(strings);
		}
	}

		private warningToConsole(strings: Array<string>) {
			if (this.config.colors) {
				strings.forEach((msg) => {
					console.log(Color.Yellow + '%s\x1b[0m', msg);
				});
			}
			else {
				strings.forEach((msg) => {
					console.log(msg);
				});
			}

		}

		private warningToFile(strings: Array<string>) {
			strings.forEach((msg) => {
				fs.appendFile(__dirname + 'test.log', `WARN: ${msg}\n`, function (err) {
					if (err) throw err;
				});
			})
	}

	public error(...strings: Array<string>) {
		if (this.config.console) {
			this.errorToConsole(strings);
		}
		if (this.config.file) {
			this.errorToFile(strings);
		}
	}

		private errorToConsole(strings: Array<string>) {
			if (this.config.colors) {
				strings.forEach((msg) => {
					console.log(Color.Red + '%s\x1b[0m', msg);
				});
			}
			else {
				strings.forEach((msg) => {
					console.log(msg);
				});
			}
		}

		private errorToFile(strings: Array<string>) {
			strings.forEach((msg) => {
				fs.appendFile(__dirname + 'test.log', `ERROR: ${msg} \n`, function (err) {
					if (err) throw err;
				});
			})
		}

	public setConfiguration(conf:Configuration) {
		this.config = conf;
	}
}
