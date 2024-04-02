const npmOptions = {
    setRcToken: false,
    commitNextVersion: true,
    subPackageChangelogs: false
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
    const { UPLOAD_ASSETS: uploadAssets = 'false', packages_targets } = process.env || {};
    const plugins = [['released', releasedOptions], ['npm', npmOptions], 'conventional-commits'];
    
    if (uploadAssets === 'true') {
        plugins.unshift(['./auto-plugins/dist/upload-assets-extend.js',
            {
                ...uploadAssetsPluginOptions,
                uploadAssetsTargets: JSON.parse(packages_targets)
            }
        ]);
    }

    return {
        "labels": [
            { "releaseType": "prerelease", "name": "Prerelease" }
        ],
        noVersionPrefix: true,
        prereleaseBranches: ['dev'],
        plugins,
    };
};
