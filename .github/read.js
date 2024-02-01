const getPackagesShortName = (list, dict) => {
	return list
		.filter((item) => dict.includes(item))
		.map((item) => {
			return item.replace('@salutejs/', '').replace('plasma-', '');
		})
}

module.exports = () => {
	const { PACKAGES_STORYBOOK, OUTPUT, PR_NAME = "pr-1021" } = process.env;
	
	const packagesStorybook= JSON.parse(PACKAGES_STORYBOOK).packages;
	const output= JSON.parse(OUTPUT);
	
	const links = [
		`website: http://plasma.sberdevices.ru/pr/pr-${PR_NAME}/`,
	];
	
	getPackagesShortName(output, packagesStorybook).forEach((packageName) => {
			links.push(`${packageName} storybook: http://plasma.sberdevices.ru/pr/pr-${PR_NAME}/${packageName}-storybook/`);
		});
	
	const message = `Documentation preview deployed!
            
   ${links.join('\n')}
  `;
	
	return message;
}
