module.exports = () => {
	const { PACKAGES_STORYBOOK, PACKAGES } = process.env;
	
	const packages = JSON.parse(JSON.parse(PACKAGES));
	const packages_storybook = JSON.parse(PACKAGES_STORYBOOK);
	
	console.log('packages ==> ', packages);
	console.log('PACKAGES_STORYBOOK ==> ', packages_storybook);
	
	return {}
}
