const { override, fixBabelImports, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const isEnvProduction = process.env.NODE_ENV === "production";

const addCompression = () => config => {
  if (isEnvProduction) {
    config.plugins.push(
      // gzip压缩
      new CompressionWebpackPlugin({
        test: /\.(css|js)$/,
        // 只处理比1kb大的资源
        threshold: 1024,
        // 只处理压缩率低于90%的文件
        minRatio: 0.9
      })
    );
  }

  return config;
};

// 查看打包后各包大小
const addAnalyzer = () => config => {
  config.plugins.push(new BundleAnalyzerPlugin());
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addCompression(),
  addAnalyzer(),
  addWebpackPlugin(
    // 终端进度条显示
    new ProgressBarPlugin(),
    new AntdDayjsWebpackPlugin()
  ),
);