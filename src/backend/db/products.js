import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Keychron K2",
    subTitle: "(HOT-SWAPPABLE)",
    price: "Rs. 7,699.00",
    categoryName: "Compact Keyboards",
    image:
      "https://www.meckeys.com/wp-content/uploads/2021/08/K2%E5%8F%AF%E6%8F%92%E6%8B%94%E9%93%9D%E5%90%88%E9%87%91-min-262x175.jpg",
    upcoming: true,
  },
  {
    _id: uuid(),
    title: "Keychron K2",
    subTitle: "",
    price: "Rs. 7,199.00",
    categoryName: "Compact Keyboards",
    image:
      "https://www.meckeys.com/wp-content/uploads/2021/03/K2-ALUM_RGB-262x175.jpeg",
    upcoming: true,
  },
  {
    _id: uuid(),
    title: "Cyber Moon Keyboard",
    subTitle: "",
    price: "Rs. 26,296.63",
    categoryName: "Short Keyboards",
    image: "",
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Hot-Swappable Keyboard",
    subTitle: "",
    price: "Rs. 25,296.63",
    categoryName: "Custom Keyboards",
    image: "",
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Purple Midnight Keyboard",
    subTitle: "",
    price: "Rs. 20,199.00",
    categoryName: "Short Keyboards",
    image: "",
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Preonic Keyboard MX Kit",
    subTitle: "",
    price: "Rs. 25,499.00",
    categoryName: "Custom Keyboards",
    image: "",
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Islay Night Keyboard",
    subTitle: "",
    price: "Rs. 28,599.00",
    categoryName: "Custom Keyboards",
    image: "",
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Zodiac Keyboard",
    subTitle: "",
    price: "Rs. 26,999.00",
    categoryName: "Short Keyboards",
    image: "",
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Split Keyboard",
    subTitle: "",
    price: "Rs. 26,296.63",
    categoryName: "Split Keyboards",
    image: "",
    upcoming: false,
  },
];
