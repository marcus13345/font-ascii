'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorLetters = undefined;

exports.default = function (asciiLetters, color) {
  const colors = colorLetters(asciiLetters, color);

  return asciiLetters.reduce((acc, letter, widthIndex) => letter.split('\n').map((line, heightIndex) => (acc[heightIndex] || '') + line[colors[widthIndex]]), []);
};

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _sentenceToAsciiAlphabet = require('./sentenceToAsciiAlphabet');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const colorLetters = exports.colorLetters = (asciiLetters, argColor) => {
  const sampleColors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey'];

  return Array(asciiLetters.length).fill(0).map(_ => argColor || (0, _lodash.sample)(sampleColors));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jYXRBc2NpaUxldHRlcnMuanMiXSwibmFtZXMiOlsiYXNjaWlMZXR0ZXJzIiwiY29sb3IiLCJjb2xvcnMiLCJjb2xvckxldHRlcnMiLCJyZWR1Y2UiLCJhY2MiLCJsZXR0ZXIiLCJ3aWR0aEluZGV4Iiwic3BsaXQiLCJtYXAiLCJsaW5lIiwiaGVpZ2h0SW5kZXgiLCJhcmdDb2xvciIsInNhbXBsZUNvbG9ycyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0JBY2UsVUFBVUEsWUFBVixFQUF3QkMsS0FBeEIsRUFBK0I7QUFDNUMsUUFBTUMsU0FBU0MsYUFBYUgsWUFBYixFQUEyQkMsS0FBM0IsQ0FBZjs7QUFFQSxTQUFPRCxhQUFhSSxNQUFiLENBQW9CLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFjQyxVQUFkLEtBQTZCRCxPQUFPRSxLQUFQLENBQWEsSUFBYixFQUNyREMsR0FEcUQsQ0FDakQsQ0FBQ0MsSUFBRCxFQUFPQyxXQUFQLEtBQXVCLENBQUNOLElBQUlNLFdBQUosS0FBb0IsRUFBckIsSUFBMkJELEtBQUtSLE9BQU9LLFVBQVAsQ0FBTCxDQURELENBQWpELEVBQzZFLEVBRDdFLENBQVA7QUFFRCxDOztBQW5CRDs7OztBQUNBOztBQUNBOzs7O0FBR08sTUFBTUosc0NBQWUsQ0FBQ0gsWUFBRCxFQUFlWSxRQUFmLEtBQTRCO0FBQ3RELFFBQU1DLGVBQWUsQ0FBRSxLQUFGLEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUNuQixNQURtQixFQUNYLFNBRFcsRUFDQSxNQURBLEVBRW5CLE9BRm1CLEVBRVYsTUFGVSxFQUVGLE1BRkUsQ0FBckI7O0FBSUEsU0FBT0MsTUFBTWQsYUFBYWUsTUFBbkIsRUFBMkJDLElBQTNCLENBQWdDLENBQWhDLEVBQ0pQLEdBREksQ0FDQVEsS0FBS0wsWUFBYSxvQkFBT0MsWUFBUCxDQURsQixDQUFQO0FBRUQsQ0FQTSIsImZpbGUiOiJjb25jYXRBc2NpaUxldHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdjb2xvcnMnXG5pbXBvcnQgeyBkaW1lbnNpb25zIH0gZnJvbSAnLi9zZW50ZW5jZVRvQXNjaWlBbHBoYWJldCdcbmltcG9ydCB7IHNhbXBsZSB9IGZyb20gJ2xvZGFzaCdcblxuXG5leHBvcnQgY29uc3QgY29sb3JMZXR0ZXJzID0gKGFzY2lpTGV0dGVycywgYXJnQ29sb3IpID0+IHtcbiAgY29uc3Qgc2FtcGxlQ29sb3JzID0gWyAncmVkJywgJ2dyZWVuJywgJ3llbGxvdycsXG4gICAgJ2JsdWUnLCAnbWFnZW50YScsICdjeWFuJyxcbiAgICAnd2hpdGUnLCAnZ3JheScsICdncmV5J11cblxuICByZXR1cm4gQXJyYXkoYXNjaWlMZXR0ZXJzLmxlbmd0aCkuZmlsbCgwKVxuICAgIC5tYXAoXyA9PiBhcmdDb2xvciB8fCAgc2FtcGxlKHNhbXBsZUNvbG9ycykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhc2NpaUxldHRlcnMsIGNvbG9yKSB7XG4gIGNvbnN0IGNvbG9ycyA9IGNvbG9yTGV0dGVycyhhc2NpaUxldHRlcnMsIGNvbG9yKVxuXG4gIHJldHVybiBhc2NpaUxldHRlcnMucmVkdWNlKChhY2MsIGxldHRlciwgd2lkdGhJbmRleCkgPT4gbGV0dGVyLnNwbGl0KCdcXG4nKVxuICAgIC5tYXAoKGxpbmUsIGhlaWdodEluZGV4KSA9PiAoYWNjW2hlaWdodEluZGV4XSB8fCAnJykgKyBsaW5lW2NvbG9yc1t3aWR0aEluZGV4XV0pLCBbXSlcbn1cbiJdfQ==