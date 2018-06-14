const interpret = require("interpret");
const path = require("path");
const fs = require("fs");

const extensions = Object.keys(interpret.extensions).sort((a, b) => {
	return a === ".js" ? -1 : b === ".js" ? 1 : a.length - b.length;
});

module.exports = (argv) => {
	const defaultConfigFiles = ["webpack.config", "webpackfile"]
		.map(function(filename) {
			return extensions.map(function(ext) {
				return {
					path: path.resolve(filename + ext),
					ext: ext
				};
			});
		})
		.reduce(function(a, i) {
			return a.concat(i);
		}, []);

	let i;
	let configFiles = [];
	if (argv.config) {
		const configArgList = Array.isArray(argv.config)
			? argv.config
			: [argv.config];
		configFiles = configArgList;
	} else {
		for (i = 0; i < defaultConfigFiles.length; i++) {
			const webpackConfig = defaultConfigFiles[i].path;
			if (fs.existsSync(webpackConfig)) {
				configFiles.push(webpackConfig);
				break;
			}
		}
	}
	return configFiles;
};


