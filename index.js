var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.dirname(require.resolve('chai-changes')) + '/chai-changes.js'));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-changes': ['factory', framework]};
