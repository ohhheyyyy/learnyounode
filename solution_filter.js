var fs = require('fs');
var path = require('path');

module.exports = function(dir, filterString, callback) {

    fs.readdir(dir, function(error, list) {
        if (error)
            return callback(error);

        list = list.filter(function(file) {
            return path.extname(file) === '.' + filterString;
        });

        callback(null, list);
    });
};
