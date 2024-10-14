const path = require("node:path");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("./package.json");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	devServer: {
		static: path.join(__dirname, "dist"),
		hot: true,
		compress: true,
		port: 9000,
		allowedHosts: [".host.com", "host2.com"],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
	},
	output: {
		publicPath: "auto",
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/, // Adiciona suporte para arquivos CSS
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/, // Adiciona suporte para imagens e SVG
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[hash].[ext]",
							outputPath: "assets",
						},
					},
				],
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "poc-mf",
			filename: "remoteEntry.js",
			exposes: {
				"./Button": "./src/components/Button",
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: packageJson.dependencies.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: packageJson.dependencies["react-dom"],
				},
				"react-router-dom": {
					singleton: true,
					requiredVersion: packageJson.dependencies["react-router-dom"],
				},
				zustand: {
					singleton: true,
					requiredVersion: packageJson.dependencies.zustand,
				},
			},
		}),
	],
};
