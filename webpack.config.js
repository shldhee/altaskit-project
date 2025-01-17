// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CompiledExtractPlugin } = require("@compiled/webpack-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js", // 생성될 번들 파일 이름
    path: path.resolve(__dirname, "dist"), // 생성 파일이 저장될 디렉토리
    publicPath: "/", // 브라우저에서 번들 파일이 제공될 경로
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          { loader: "babel-loader" },
          {
            // ↓↓ Compiled should run last ↓↓
            loader: "@compiled/webpack-loader",
            options: {
              transformerBabelPlugins: ["@atlaskit/tokens/babel-plugin"],
              extract: true,
              inlineCss: true,
            },
          },
        ],
      },
      {
        test: /compiled-css\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // 일반 CSS 처리
        test: /\.css$/,
        exclude: /compiled-css\.css$/i, // 컴파일된 CSS 제외
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CompiledExtractPlugin({ sortShorthand: true }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 정적 파일 경로
    historyApiFallback: true, // 모든 경로를 index.html로 리다이렉트
    hot: true, // HMR 활성화
    port: 3000, // 포트 번호
  },
};
