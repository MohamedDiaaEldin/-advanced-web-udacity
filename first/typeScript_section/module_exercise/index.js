// const {concat, cut3} = require('./arrays')
const arrays = require('./utilities/arrays')
const array_math = require('./utilities/array_math')



console.log(arrays.concat([1, 2], [4, 5]))
console.log(arrays.cut3([1, 2, 3 , 4]))

/// arrays math
console.log(array_math.sum([2, 2, 3]))
console.log(array_math.lgNum([2, 2, 3]))