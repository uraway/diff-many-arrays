module.exports = function diffArray(...args) {
  const arrays = [...args];

  return []
    .concat(...args)
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .filter((item) => {
       for (let i = 0; i < arrays.length; i += 1) {
         if (!arrays[i].includes(item)) {
           return true;
         }
       }
       return false;
    });
};
