require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./gtm.js')

/**
 * The URL where data will be loaded from
 * Can be either a Google Doc link to a public sheet or a link to a publicly accessible CSV file
 *
 * @type {string}
 */
window.dataUrl = 'https://raw.githubusercontent.com/raduvoinea/Utils/master/test%20-%20Build%20your%20Technology%20Radar.csv'

const GoogleSheetInput = require('./util/factory')
GoogleSheetInput().build()
