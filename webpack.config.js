// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CompiledExtractPlugin } = require("@compiled/webpack-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

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
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader", // PostCSS 처리
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CompiledExtractPlugin({ sortShorthand: true }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ESLintPlugin({
      emitWarning: true, // 브라우저에 ESLint 결과를 표시할지를 결정해요.
      // 대상 파일 확장자를 지정해요.
      // eslint.config.js에서 설정하더라도 여기서 설정을 해야 해요.
      extensions: ["js", "jsx", "ts", "tsx"],
      exclude: "node_modules", // 제외할 디렉토리를 지정해요.
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 정적 파일 경로
    historyApiFallback: true, // 모든 경로를 index.html로 리다이렉트
    hot: true, // HMR 활성화
    port: 3000, // 포트 번호
  },
};
