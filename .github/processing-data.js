module.exports = function processingData() {
	const arr = [
		'plasma-web',
		'plasma-ASDK',
		'plasma-b2c',
		'caldera',
	].map((i) => `@salutejs/${i}`);
	
	return {
		"PACKAGES": JSON.stringify(arr)
	}
}
