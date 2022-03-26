const priceSliderFunc = (productData, priceRange) =>
  productData.filter(({ price }) => Number(price) <= Number(priceRange));

export { priceSliderFunc };
