'use strict';
var fs = require('fs');
var npath = require('path');


var default_predicate = function(file, name) {
    return file === name;
};

var ignore = function(_exclusion, file) {
    //console.log('->', _exclusion, ' file->', file, '  =>', _exclusion.indexOf(file));
    return _exclusion.indexOf(file) !== -1;
}


var _exists = function(group, cb) {
    for (var i in group) {
        var path = group[i];
        cb(path);
    }
}


var group_exist = function(group) {
    var files = [];
    var filter = function() {
        if (!fs.existsSync(path))
            files.push({
                exist: false,
                file: path
            });
        else
            files.push({
                exist: true,
                file: path
            });
    };

    _exists(group, filter);

    return files;
}

var exists = function(group) {

    var flag = true;
    var filter = function(path) {
        if (!fs.existsSync(path)) flag = false;
    }
    _exists(group, filter);
    return flag;
}



function _search(path, name, _options) {

    var ret = {
        found: false,
        path: ''
    };

    var options = _options || {};
    var exclude = options.exclude || [];
    var predicate = options._predicate || default_predicate;

    if (ignore(exclude , npath.basename(path))) return ret;

    var files = fs.readdirSync(path);

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (predicate(file, name)) {
            ret = {
                found: true,
                path: path + file,
                file: file,
            };
        } else
        if (fs.lstatSync(path + '/' + file).isDirectory()) 
            ret = _search(path + file + '/', name, options);

        if (ret.found) return ret;
    }

    return ret;
}

module.exports = {
    search: _search,
    exists: exists,
    group_exist: group_exist
};
