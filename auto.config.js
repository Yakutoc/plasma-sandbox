const npmOptions = {
    setRcToken: false,
    commitNextVersion: true,
};

const releasedOptions = {
    includeBotPrs: true,
    message: '🚀 This %TYPE is included in version: %VERSION 🚀',
};

/** Auto configuration */
module.exports = function rc() {
    const { upload_assets: uploadAssets = 'false' } = process.env || {};
    const plugins = [['npm', npmOptions], 'conventional-commits'];

    if (uploadAssets === 'true') {
        plugins.unshift(['released', releasedOptions]);
    }

    return {
        prereleaseBranches: ['dev'],
        plugins,
    };
};
