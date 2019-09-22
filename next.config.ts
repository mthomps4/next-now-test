import withTypescript from '@zeit/next-typescript';

export default withTypescript({
  webpack(config, _options) {
    config.node = {
      fs: 'empty'
    };

    return config;
  }
});

// export default {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     };

//     return config;
//   }
// };
