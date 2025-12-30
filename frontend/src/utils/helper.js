export const groupById = (data) => {
  return data.reduce((acc, item) => {
    acc[item._id] = acc[item._id] || [];
    acc[item._id].push(item);
    return acc;
  }, {});
};

export const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
