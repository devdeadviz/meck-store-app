import { v4 as uuid } from "uuid";
import image1 from "../../assets/keyboard-1.jpg";
import image2 from "../../assets/keyboard-2.jpg";
import image3 from "../../assets/keyboard-3.jpg";
import image4 from "../../assets/keyboard-4.jpg";
import image5 from "../../assets/keyboard-5.jpg";
import image6 from "../../assets/keyboard-6.jpg";
import image7 from "../../assets/keyboard-7.jpg";
import image8 from "../../assets/keyboard-8.jpg";
import image9 from "../../assets/keyboard-9.jpg";

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
    price: "Rs. 26,296.63",
    categoryName: "Short Keyboards",
    image: image1,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Hot-Swappable Keyboard",
    price: "Rs. 25,296.63",
    categoryName: "Custom Keyboards",
    image: image2,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Keychron K2 Keyboard",
    price: "Rs. 8,299.00",
    categoryName: "Compact Keyboards",
    image: image3,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Purple Midnight Keyboard",
    price: "Rs. 20,199.00",
    categoryName: "Short Keyboards",
    image: image4,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Mechanical Keyboards",
    price: "Rs. 18,999.99",
    categoryName: "Compact Keyboards",
    image: image5,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Preonic Keyboard MX Kit",
    price: "Rs. 25,499.00",
    categoryName: "Custom Keyboards",
    image: image6,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Islay Night Keyboard",
    price: "Rs. 28,599.00",
    categoryName: "Custom Keyboards",
    image: image7,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Zodiac Keyboard",
    price: "Rs. 26,999.00",
    categoryName: "Short Keyboards",
    image: image8,
    upcoming: false,
  },
  {
    _id: uuid(),
    title: "Split Keyboard",
    price: "Rs. 26,296.63",
    categoryName: "Split Keyboards",
    image: image9,
    upcoming: false,
  },
];
