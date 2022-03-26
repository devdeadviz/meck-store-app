const categoryFilterFunc = (sortedProdData, categories) => {
  if (Object.values(categories).every((current) => !current))
    return sortedProdData;
  return sortedProdData.filter((product) => categories[product.categoryName]);
};

export { categoryFilterFunc };
