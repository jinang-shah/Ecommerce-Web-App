const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    catagory: "electronics",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    catagory: "mobiles",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
    catagory: "electronics",
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
    catagory: "electronics",
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
    catagory: "electronics",
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
    catagory: "electronics",
  },
  {
    name: "LUMIX G7 Camera",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91xnO7qHAeL._SL1500_.jpg",
    description:
      "Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black)",
    price: 1400,
    countInStock: 10,
    catagory: "electronics",
  },
  {
    name: "Iphone 11",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SL1500_.jpg ",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1400,
    countInStock: 5,
    catagory: "mobiles",
  },
  {
    name: "Iphone 11 Pro",
    imageUrl:
      "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_SR240,110_QL70_.jpg",
    description: "New Apple iPhone 12 Pro Max (256GB) - Pacific Blue",
    price: 1400,
    countInStock: 10,
    catagory: "mobiles",
  },
  {
    name: "Iphone 11 Pro Max ",
    imageUrl:
      "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_SR240,110_QL70_.jpg",
    description: "New Apple iPhone 11 Pro Max (256GB) - Pacific Blue",
    price: 1400,
    countInStock: 10,
    catagory: "mobiles",
  },
  {
    name: "OPPO F19 Pro",
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/413B3aiSBdL._SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "OPPO F19 Pro+ 5G (Space Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    price: 1000,
    countInStock: 10,
    catagory: "mobiles",
  },
  {
    name: "OnePlus 8T 5G ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SX679_.jpg ",
    description:
      "Rear quad camera setup having 48MP main camera with Sony IMX586 sensor, 16MP ultra wide angle Lends, 5MP macro lens, 2MP monochrome lens | 16MP front camera with Sony IMX471 sensor",
    price: 1200,
    countInStock: 10,
    catagory: "mobiles",
  },
  {
    name: "Mi 11X 5G",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VQXjN6R7S._SL1500_.jpg",
    description:
      "Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool technology",
    price: 1300,
    countInStock: 5,
    catagory: "mobiles",
  },
  {
    name: "Samsung Refrigerator",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71EZGsB-w8L._SL1500_.jpg",
    description:
      "Samsung 253 L 3 Star with Inverter Double Door Refrigerator (RT28A3453S8/HL, Elegant Inox)",
    price: 1200,
    countInStock: 5,
    catagory: "electronics",
  },
  {
    name: "Samsung 7 Kg  Washing Machine",
    imageUrl: "https://m.media-amazon.com/images/I/81+HMuC6aJL._AC_UL320_.jpg",
    description:
      "Samsung 7 Kg Wi-Fi Enabled Inverter Fully-Automatic Front Loading Washing Machine (WW70T502DAX/TL,Inox, AI Control)",
    price: 1000,
    countInStock: 4,
    catagory: "electronics",
  },
  {
    name: "Samsung 6.0 Kg Inverter Washaing Machine",
    imageUrl: "https://m.media-amazon.com/images/I/614-yYoVkUL._AC_UL320_.jpg",
    description:
      "Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)",
    price: 900,
    countInStock: 5,
    catagory: "electronics",
  },
  {
    name: "Samsung 28 L Convection Microwave Oven",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61xdmmMjJ7L._SL1200_.jpg",
    description:
      "Samsung 28 L Convection Microwave Oven (MC28H5025VP/TL, Black with Magnolia Pattern, Slim)",
    price: 500,
    countInStock: 4,
    catagory: "electronics",
  },
  {
    name: "OnePlus 80 LED Smart Android TV",
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/41fVP%2Be7CzS._SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)",
    price: 600,
    countInStock: 4,
    catagory: "electronics",
  },
  {
    name: "Women's Regular Fit Kurta",
    imageUrl: "https://m.media-amazon.com/images/I/91U5rsZ84zL._AC_UL320_.jpg",
    description: "Material: Cotton with three quarter sleeve and round neck",
    price: 50,
    countInStock: 4,
    catagory: "fashion",
  },
  {
    name: "Salwar Suit Set",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81VBg2t5M6L._UX522_.jpg",
    description: "W for Woman Women's Straight Salwar Suit Set",
    price: 60,
    countInStock: 4,
    catagory: "fashion",
  },
  {
    name: "Silk Printed Saree",
    imageUrl: "https://m.media-amazon.com/images/I/91WCQ88UV5L._AC_UL320_.jpg",
    description: "W for Woman Women's Straight Salwar Sari",
    price: 70,
    countInStock: 4,
    catagory: "fashion",
  },
  {
    name: "Fancy Saree",
    imageUrl: "https://m.media-amazon.com/images/I/81Pks4Q52wL._AC_UL320_.jpg",
    description: "Women's Art Silk With Blouse Piece Saree",
    price: 20,
    countInStock: 3,
    catagory: "fashion",
  },
  {
    name: "Cotton Shift Dress",
    imageUrl: "https://m.media-amazon.com/images/I/71KeW+zxs7L._AC_UL320_.jpg",
    description: "Levi's Cotton Shift Dress",
    price: 10,
    countInStock: 1,
    catagory: "fashion",
  },
  {
    name: "Slim Fit Jeans",
    imageUrl: "https://m.media-amazon.com/images/I/71n6IwqJ4GL._AC_UL320_.jpg",
    description: "Women's Slim Fit Jeans",
    price: 40,
    countInStock: 4,
    catagory: "fashion",
  },
  {
    name: "Slim Fit T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71HjMVHXb7L._AC_UL320_.jpg",
    description: "Levis's Women's Slim Fit T-Shirt",
    price: 20,
    countInStock: 2,
    catagory: "fashion",
  },
  {
    name: "3 Seater Sofa",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91GqRS9mS8L._SL1500_.jpg",
    description:
      "Dimensions:- Length: 169 cm (66.53 in); Width: 75 cm (29.52 in); Height: 70 cm (27.55 in); Converts to Bed, Length: 169 cm (66.53 in); Width: 94 cm (37 in)",
    price: 200,
    countInStock: 2,
    catagory: "furtinure",
  },
  {
    name: "Shelf (MDF, Black)",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61OVVIlT4RL._SL1200_.jpg",
    description:
      "Made of medium density fibreboard wood (MDF), with a smooth glossy finish and classy black colour",
    price: 300,
    countInStock: 2,
    catagory: "furtinure",
  },
  {
    name: "Solimo XXL Bean Bag",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61Jc19XUcfL._SL1200_.jpg",
    description:
      "Made using leatherette fabric that is fade and tear resistant",
    price: 20,
    countInStock: 2,
    catagory: "furtinure",
  },
  {
    name: "Contemporary Coffee Table (Teak Finish)",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91YUw-INxiL._SL1500_.jpg",
    description:
      "Table Dimensions: Length (35 Inches), Width, (24 inches), Height (17 inches)",
    price: 150,
    countInStock: 2,
    catagory: "furtinure",
  },
  {
    name: "Book Shelf/Home Decor",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81mEx1b2HLL._SL1500_.jpg",
    description:
      "Bluewud Alex Wall Book Shelf/Home Decor Display & Storage Rack Cabinet Unit (Walnut, 5 Shelves)",
    price: 20,
    countInStock: 2,
    catagory: "furtinure",
  },
];

module.exports = products;
