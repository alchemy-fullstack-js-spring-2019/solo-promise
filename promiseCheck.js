module.exports = promise => {
  if(promise instanceof Promise) return true;
  return false;
};
