export const business = {
  name: "Giovanni's Dillicious Pickles",
  shortName: "Gio's Pickles",
  address: "1270 S Main St, New Hope, PA 18938",
  shortAddress: "1270 S Main St",
  phone: "(215) 478-8115",
  email: "giospickles@gmail.com",
  instagram: "https://www.instagram.com/giospickles/?hl=en",
  facebook: "https://www.facebook.com/giospickles",
  hours: [
    ["Monday", "Closed"],
    ["Tuesday–Saturday", "11:00 am – 8:00 pm"],
    ["Sunday", "11:00 am – 3:00 pm"],
  ],
};

export const menuCategories = [
  {
    title: "The Classics",
    note: "The original twelve, from bread & butter to dill relish",
    groups: [{ flavors: ["Bread & Butter", "Dill", "Garlic", "Gherkin", "Hamburger", "Old Bay", "Everything Bagel", "Bloody Mary", "Sweet Horseradish", "Full Sour", "Half Sour", "Dill Relish"] }],
  },
  {
    title: "Candy Collection",
    note: "Sweet, nostalgic flavors with a pickle-shop twist",
    groups: [
      { label: "Standalone Sweets", flavors: ["Cotton Candy", "Butterscotch"] },
      { label: "Jolly Rancher", flavors: ["Watermelon", "Green Apple", "Cherry", "Blue Raspberry", "Grape"] },
    ],
  },
  {
    title: "Pickled Veggies",
    note: "Classic vegetables, plus garlic, spicy, and everything variations",
    groups: [
      { label: "Tomatoes", flavors: ["Plain", "Garlic", "Spicy", "Spicy Garlic", "Everything"] },
      { label: "Mushrooms", flavors: ["Plain", "Garlic", "Spicy"] },
      { label: "Olives", flavors: ["Plain", "Garlic", "Spicy", "Everything"] },
      { label: "Other Veggies", flavors: ["Carrots", "Cauliflower", "Beets", "Banana Peppers", "TBD #13", "Pepperoncini", "Sweet Relish"] },
    ],
  },
  {
    title: "Fresh From The Patch",
    note: "Fruit-forward flavors with a bright, fresh crunch",
    groups: [{ flavors: ["Cherry", "Blueberry", "Blackberry", "Mango", "Pineapple", "Peach", "Strawberry", "TBD #8"] }],
  },
  {
    title: "Bring The Heat",
    note: "Bold, spicy flavors for people who like extra kick",
    groups: [{ flavors: ["Garlic Hot", "Spicy Dill", "Spicy Everything", "Spicy Bread & Butter", "Reaper", "Reaper Bread & Butter", "Jalapeños"] }],
  },
];

export const sandwiches = [
  ["The Original", "Turkey, sharp provolone, lettuce, tomato, and Gio's house sauce — between two crunchy pickle halves"],
  ["The Italian Stallion", "Capicola, salami, provolone, roasted peppers, and a fistful of pickle attitude"],
  ["The Veggie", "Fresh mozzarella, greens, roasted veggies, and a bright, tangy crunch"],
];
