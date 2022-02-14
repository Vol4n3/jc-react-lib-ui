const fs = require('fs');
const path = require('path');
const resolve = (...paths) => {
  return fs.realpathSync(path.join(__dirname, ...paths));
};
module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/*.tsx',
      sectionDepth: 1,
    },
  ],
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: props => {
      if (props.parent) {
        return !props.parent.fileName.includes('node_modules');
      }
      return true;
    },
  }).parse,
  webpackConfig: require('react-scripts/config/webpack.config'),
  styleguideComponents: {
    Wrapper: resolve('src/sg-overrides/styleguide.wrapper.tsx'),
    Logo: resolve('src/sg-overrides/styleguide.header.tsx'),
  },
  moduleAliases: {
    'jc-react-lib-ui': path.resolve(__dirname, 'src'),
  },
};
