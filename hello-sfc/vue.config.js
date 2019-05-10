module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/test/hello-sfc/dist/'
      : '/',
  };