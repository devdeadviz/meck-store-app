const sortFunc = (productData, sortBy) => {
  if (sortBy === "LOW_TO_HIGH")
    return [...productData].sort(
      (firstProd, secondProd) => firstProd.price - secondProd.price
    );
  if (sortBy === "HIGH_TO_LOW")
    return [...productData].sort(
      (firstProd, secondProd) => secondProd.price - firstProd.price
    );
  return productData;
};

export { sortFunc };
