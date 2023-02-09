const dishes = [
    {
        name: 'Eggplant Parmesan',
        vegetarian: true
    },
    {
        name: 'Spaghetti & Meatballs',
        vegetarian: false
    }
]

const vegetarianDishes = (dishes) => {
  return  dishes.filter(Isvegetarian => Isvegetarian.vegetarian === true);
}