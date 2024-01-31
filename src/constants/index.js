import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    imgURL: shoe4,
    rating: "4.9",
    name: "Nike Air Jordan-01",
    price: "$200.20",
    description: "The Nike Air Jordan-01 is a premium basketball shoe designed for superior performance and style. It features cutting-edge technology for cushioning and support, making it ideal for both on-court action and casual wear. With its signature design elements and heritage, the Nike Air Jordan-01 represents a timeless symbol of athleticism and fashion-forward culture.",
  },
  {
    imgURL: shoe5,
    rating: "4.7",
    name: "Nike Air Jordan-10",
    price: "$210.20",
    description: "The Nike Air Jordan 10, a part of the iconic Air Jordan line, boasts a sleek design and remarkable performance features. Known for its durable construction and innovative cushioning technology, the Air Jordan 10 delivers exceptional comfort and support, making it a favorite choice among basketball enthusiasts and sneaker aficionados alike.",
  },
  {
    imgURL: shoe6,
    rating: "4.8",
    name: "Nike Air Jordan-100",
    price: "$220.20",
    description: "The Nike Air Jordan-100 is a stylish and performance-driven basketball shoe designed for athletes and sneaker enthusiasts alike. Combining iconic design elements from the Air Jordan line with modern technology, the Air Jordan-100 offers superior comfort, support, and traction on the court.",
  },
  {
    imgURL: shoe7,
    rating: "4.6",
    name: "Nike Air Jordan-001",
    price: "$230.20",
    description: "The Nike Air Jordan-001 is a classic and iconic basketball shoe designed by Nike in collaboration with NBA legend Michael Jordan. Known for its sleek silhouette, innovative technology, and distinctive colorways, the Air Jordan-001 revolutionized the sneaker industry and became a cultural phenomenon.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
    imgURL: shieldTick,
    label: "Secure payment",
    subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way."
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morice Brown',
    rating: 4.5,
    feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
];


export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
