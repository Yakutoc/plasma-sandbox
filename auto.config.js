const npmOptions = {
    setRcToken: false,
    commitNextVersion: true,
};

const releasedOptions = {
    includeBotPrs: true,
    message: '🚀 This %TYPE is included in version: %VERSION 🚀',
};

const uploadAssetsPluginOptions = {
    assets: ['./utils/assets/**/*'],
    message: '🐤 Download canary assets:',
    group: '(color|shadow|typo|borderRadius|spacing).*\\.(kt|xml|swift|ts)',
    compact: true,
};

/** Auto configuration */
module.exports = function rc() {
    const { upload_assets: uploadAssets = 'false', packages_targets } = process.env || {};
    const plugins = [['released', releasedOptions], ['npm', npmOptions], 'conventional-commits'];
    
    console.log(packages_targets);
    
    if (uploadAssets === 'true') {
        plugins.unshift(['./auto-plugins/dist/upload-assets-extend.js',
            {
                ...uploadAssetsPluginOptions,
                packagesTargets: JSON.parse(packages_targets)
            }
        ]);
    }

    return {
        prereleaseBranches: ['dev'],
        plugins,
    };
};
