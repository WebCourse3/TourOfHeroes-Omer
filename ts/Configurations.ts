export class Configuration {
	console: Boolean;
	file: Boolean;
	colors: Boolean;
	logLevel: string;

	constructor(console:boolean,file:boolean, colors: boolean, logLevel:Level) {
		this.console = console;
		this.file = file;
		this.colors = colors;
		this.logLevel = logLevel;
	}
}

export enum Color {

	Red = '\x1b[31m',
	Green = '\x1b[32m',
	Yellow = '\x1b[33m',
	White = '\x1b[37m'
}

export  enum Level {
	info = "info",
	debug = "debug",
	warning = "warning",
	error = "error"
}