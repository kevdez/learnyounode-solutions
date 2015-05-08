var fs = require('fs');
var path = require('path');

var ls_filtered_by_extension = function(filePath, extFilter, callback) {
	fs.readdir(filePath, function(err, list){
		if (err)
			return callback(err);
		var filteredData = [];
		for (var i = 0; i < list.length; i++) {
			if('.'+extFilter == path.extname(list[i]))
				filteredData.push(list[i]);
		};

		callback(null,filteredData);
	});
};

module.exports = ls_filtered_by_extension;
