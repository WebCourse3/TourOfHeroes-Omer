import {Configuration,Color} from './Configurations';

class Logger {
	name: string;
	config: Configuration;

	constructor(name: string, configuration: Configuration) {
		this.name = name;
		this.config = configuration;
	}

	public log(level: string, ...strings: Array<string>) {
		let options = {
			"debug"   : this.debug.apply(this,strings),
			"info"    : this.info.apply(this,strings),
			"warning" : this.warning.apply(this,strings),
			"error"   : this.error.apply(this,strings)
		};

		console.log(options[level]);
	}

	public debug(...strings: Array<string>) {
		if (this.config.console) {
			this.debugToConsole(strings);
		}
		else {
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
		// write to file
	}

	public info(...strings: Array<string>) {
		if (this.config.console) {
			this.infoToConsole(strings);
		}
		else {
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
		// write to file
	}

	public warning(...strings: Array<string>) {
		if (this.config.console) {
			this.warningToConsole(strings);
		}
		else {
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
		// write to file
	}

	public error(...strings: Array<string>) {
		if (this.config.console) {
			this.errorToConsole(strings);
		}
		else {
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
			// write to file
		}

}

let logger = new Logger('kaki', {console: true, file: false, colors: true, logLevel: true});

logger.debug('hello world');
logger.info('hello world');
logger.warning('hello world');
logger.error('hello world');
logger.log('debug', 'kukuflitzu', 'my', 'life');
