var path = require('path');

module.exports = function (environment) {
    return require(path.join(process.cwd(), 'config/env', environment + '.js'));
};