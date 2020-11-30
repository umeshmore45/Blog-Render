const url = "https://umeshmore45.github.io/files/data.json";

export const data = (async () => {
  const get = await axios.get(url);
  return get.data;
})();
