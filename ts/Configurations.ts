export  interface Configuration {
	console: Boolean,
	file: Boolean,
	colors: Boolean,
	logLevel: Boolean;
}

export enum Color {

	Red = '\x1b[31m',
	Green = '\x1b[32m',
	Yellow = '\x1b[33m',
	White = '\x1b[37m'
}