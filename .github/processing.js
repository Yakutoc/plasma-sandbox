const PACKAGES_CYPRESS = [
	'@salutejs/plasma-web',
	'@salutejs/plasma-b2c',
	'@salutejs/plasma-ui',
	'@salutejs/plasma-temple',
];

const PACKAGES_STORYBOOK = [
	...PACKAGES_CYPRESS,
	'@salutejs/plasma-new-hope',
	'@salutejs/plasma-ASDK',
	'@salutejs/caldera',
	'@salutejs/caldera-online'
];

module.exports = () => {
	return {
		HAS_SCOPE: true,
		HAS_DOCUMENTATION_CHANGED: false,
		PACKAGES_STORYBOOK: JSON.stringify(PACKAGES_STORYBOOK),
		PACKAGES: JSON.stringify([
			'@salutejs/plasma-new-hope',
			'@salutejs/plasma-ASDK',
			'@salutejs/caldera'
		])
	}
}
