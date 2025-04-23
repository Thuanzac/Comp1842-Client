const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:3000', // Đảm bảo rằng frontend sẽ chuyển tiếp các yêu cầu đến backend tại cổng 3000
  },
});
