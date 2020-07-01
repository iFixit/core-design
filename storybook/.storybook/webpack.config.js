module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  });

  config.resolve.extensions.push(".js");

  return config;
};
