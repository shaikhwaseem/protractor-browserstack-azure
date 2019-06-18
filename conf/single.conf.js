exports.config = {
  'specs': [ '../specs/single.js' ],
  'plugins': [{'package': "protractor-browserstack-reporter"}],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  'capabilities': {
    'project': 'Test Run',
    'build': 'Protractor Azure',
    'name': 'single_test',
    'browserName': 'chrome',
    'browserstack.debug': 'true'
  }
};
