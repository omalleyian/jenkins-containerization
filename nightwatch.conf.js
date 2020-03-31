const GECKO_DRIVER = require('geckodriver');
const IE_DRIVER = require('iedriver');
const SELENIUM_SERVER = require('selenium-server');

module.exports = {
  src_folders: ["src/tests"],
  output_folder: "output/reports",
  parallel_process_delay: 10,
  "test_workers": {
    "enabled": false,
    "workers": "auto"
  },

  selenium: {
    start_process: true,
    start_session: false,
    server_path: SELENIUM_SERVER.path,
    port: 4444,
    cli_args: {
      "webdriver.gecko.driver": GECKO_DRIVER.path,
      "webdriver.ie.driver": IE_DRIVER.path
    }
  },

  test_settings: {
    default: {
      launch_url: "http://localhost",
      selenium_port: 4444,
      selenium_host: "localhost",
      desiredCapabilities: {
        browserName: "firefox",
      }
    },
    headlessFirefox: {
      desiredCapabilities: {
        browserName: "firefox",
        marionette: true,
        javascriptEnabled: true,
        acceptSslCerts: true,
        headlessFirefoxOptions: {
            args: ['headless']
        }
      }
    },
    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true
      }
    }
  }
}
