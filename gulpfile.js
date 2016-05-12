'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'soundcloud.css',
	bundleFileName: 'soundcloud.js',
	moduleName: 'metal-soundcloud',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
