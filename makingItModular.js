var filterFunction = require('./solution_filter.js');
var dir = process.argv[2];
var filterString = process.argv[3];

filterFunction(dir, filterString, function(error, list) {
    if (error)
        return console.error('There was an error:', error);

    list.forEach(function(file) {
        console.log(file);
    });
});
