module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		config.module.rules.push({
			test: /\.markdown$/i,
			use: ["raw-loader"],
		});

		return config;
	},
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/downloads/index": { page: "/downloads" },
			"/releases/index": { page: "/releases" },
			"/staff/index": { page: "/staff" },
			"/skins/index": { page: "/skins" },
			"/skinsrenderer": { page: "/skinsrenderer" },
		};
	},

	// use this to use a different base path basePath: "/new",
};

const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
let newsFile = "/* eslint-disable @typescript-eslint/no-var-requires */\n";

const mkfilePath = "./data/mk";
fs.readdirSync(mkfilePath)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-9) === ".markdown"
	)
	.map((file, index) => {
		const fileDateParts = file.split("-");
		const fileDate =
			fileDateParts[0] + "_" + fileDateParts[1] + "_" + fileDateParts[2];
		newsFile +=
			"export const mkNews" +
			index.toString() +
			"___" +
			fileDate +
			' = require("./' +
			file +
			'");\n';
	});
fs.writeFile("./data/mk/index.js", newsFile, () => {});
