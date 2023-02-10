const dishes = [
  {
    name: "Eggplant Parmesan",
    vegetarian: true,
  },
  {
    name: "Spaghetti & Meatballs",
    vegetarian: false,
  },
];

const vegetarianDishes = (args) => {
  return args.filter((Isvegetarian) => Isvegetarian.vegetarian === true);
};

let answer = vegetarianDishes(dishes);
console.log(answer[0]["name"]);
