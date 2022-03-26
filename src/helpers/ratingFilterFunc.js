const ratingFilterFunc = (productData, prodRating) =>
  productData.filter(({ rating }) => Number(rating) >= Number(prodRating));

export { ratingFilterFunc };
