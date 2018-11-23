'use strict';
const {h, Text} = require('ink'); // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input'); // eslint-disable-line no-unused-vars
const open = require('opn');
const Gradient = require('ink-gradient');
const followers = require('instagram-followers');
const shortNumber = require('short-number');

const tryhtmlFollowers = [];

followers('tryhtml').then(no => {
	tryhtmlFollowers.push(no);
});

const handleSelect = item => {
	if (item.value) {
		open(item.value);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Download the November Wallpaper',
		value: 'https://tryht.ml/wallpaper'
	},
	{
		label: 'Latest IGTV post',
		value: 'https://www.instagram.com/tv/BqgCMSmB_Ji/'
	},
	{
		label: 'Visit tryhtml.org',
		value: 'https://trythml.org'
	},
	{
		label: 'Instagram',
		value: 'https://instagram.com/tryhtml'
	},
	{
		label: 'Facebook',
		value: 'https://facebook.com/tryhtml'
	},
	{
		label: 'Twitter',
		value: 'https://twitter.com/tryhtml'
	},
	{
		label: 'Donate',
		value: 'https://cash.me/tryhtml'
	},
	{
		label: 'Support',
		value: 'mailto:support@tryhtml.org'
	},
	{
		label: 'Feedback',
		value: 'https://feedback.abranhe.com/?project=TryHTML cli&message=I ❤️ tryHTML because ...'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<div>
			<Text>We are @tryhtml a tech comunity highlighting the programming industry with over {shortNumber(parseInt(tryhtmlFollowers.join('\n')))} followers.</Text>
			<br/>
		</div>
		<div>
		<Gradient name="atlas">
			<Text>Quick Links</Text>
		</Gradient>
			<br/>
		</div>
		<div>
		<SelectInput items={items} onSelect={handleSelect}/>
		</div>
	</div>
);
