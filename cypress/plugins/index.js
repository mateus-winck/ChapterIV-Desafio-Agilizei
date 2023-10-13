module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.name === 'edge' && browser.isHeadless) {
        launchOptions.args.push('--disable-gpu');
        return launchOptions
      }
    });
  }