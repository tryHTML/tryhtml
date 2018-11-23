#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const chalk = require('chalk');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const app = importJsx('./app');

meow(`
	Usage
	  $ tryhtml

	Options
    -h, --help      Show help message and close
    -v, --version   View package Version
`, {
	flags: {
			help: {
				type: 'boolean',
				alias: 'h'
			},
			version: {
				type: 'boolean',
				alias: 'v'
			}
	}
});

const fallback = async () => {

const logo = `
  _              _   _               _
 | |            | | | |             | |
 | |_ _ __ _   _| |_| |__  _ __ ___ | |
 | __| '__| | | | __| '_ \\| '_ \` _ \\| |
 | |_| |  | |_| | |_| | | | | | | | | |
  \\__|_|   \\__, |\\__|_| |_|_| |_| |_|_|
            __/ |
           |___/
`;
	console.log(chalk.hex('#9457af')(logo));
};

termImg(path.join(__dirname, './resources/tryhtml.png'), {fallback});

render(h(app));
