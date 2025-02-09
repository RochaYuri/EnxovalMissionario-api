module.exports = function (arr) {
  let lastId = Math.max.apply(
    Math,
    arr.map((i) => i.id)
  );

  let id = lastId === -Infinity ? 1 : lastId + 1;
  return id;
};
