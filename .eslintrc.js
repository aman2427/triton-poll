module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/babel",
	],

	"overrides": [
		// Server source files and configs
		{
			"files": [
				"src/server/**/*.js",
				"*.config.js",
				".*rc.js",
				".*rc",
			],
			"extends": [
				"plugin:evelyn/node",
				"plugin:evelyn/source",
			],
		},
		// Client source files
		{
			"files": [
				"src/client/**/*.js",
			],
			"extends": [
				"plugin:evelyn/react",
			],
			"globals": {
				// `process.env.NODE_ENV` webpack/babel evaluation
				"process": "readonly",
			},
		},
	],
};
