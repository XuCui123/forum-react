module.exports = (config) => {
  config.module.rules.forEach(rule => {
    if (rule.key === 'js' || rule.key === 'jsx') {
      rule.options.plugins = [
        'transform-runtime'
      ];
    }
  });
  return config;
};
