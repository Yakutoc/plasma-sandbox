module.exports = () => {
	const { STATE } = process.env;
	
	const packages = JSON.parse(JSON.parse(STATE.PACKAGES));
	const packages_storybook = JSON.parse(STATE.PACKAGES_STORYBOOK);
	
	console.log('STATE ==> ', STATE);
	console.log('packages ==> ', packages);
	console.log('PACKAGES_STORYBOOK ==> ', packages_storybook);
	
	return {}
}
