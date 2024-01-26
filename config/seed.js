import Images from "../src/assets/index";

const PRODUCTS = {
  Armors: [
    {
      id: 1,
      name: "Bronze Knight Armor",
      image: Images.BknightArmor,
      price: "1,200.89",
      description: "Dark Knight Armor, for the dark adventurer.",
    },
    {
      id: 2,
      name: "Crusader Chainmail",
      image: Images.CruChainmail,
      price: "10,000.00",
      description: "Champion Armor of the best of the best Adventures .",
    },
    {
      id: 3,
      name: "Dark Justice Armor",
      image: Images.DarkgrayKightArmor,
      price: "4,999.99",
      description: "Armor of the Dark Justice, for the dark adventurer.",
    },
    {
      id: 4,
      name: "Golden Eagle Armor",
      image: Images.GoldenEagleArmor,
      price: "999.99",
      description: "Basic Plate Armor, for the basic adventurer.",
    },
    {
      id: 5,
      name: "Leather Armor",
      image: Images.LeatherArmor,
      price: "999.99",
      description: "Basic Plate Armor, for the basic adventurer.",
    },
    {
      id: 6,
      name: "Leather Ranger Armor",
      image: Images.RangerArmor,
      price: "999.99",
      description: "Basic Plate Armor, for the basic adventurer.",
    },
    {
      id: 7,
      name: "Viking Armor",
      image: Images.VikingArmor,
      price: "999.99",
      description: "Basic Plate Armor, for the basic adventurer.",
    },
  ],

  Weapons: [
    {
      id: 9,
      name: "Dark Short Sword",
      image: Images.DarkShortSword,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 10,
      name: "Flail",
      image: Images.Flail,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 11,
      name: "Iron Dagger",
      image: Images.IronDagger,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 12,
      name: "Morning Star",
      image: Images.MorningStar,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 13,
      name: "Simple Dagger",
      image: Images.SimpleDagger,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 14,
      name: "Simple Short Sword",
      image: Images.SimpleShortSword,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 15,
      name: "Throwing Axe",
      image: Images.ThrowingAxe,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 16,
      name: "Two Handed Axe",
      image: Images.TwohandedAxe,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 17,
      name: "Viking Dagger",
      image: Images.VikingDagger,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
  ],
  Potions: [
    {
      id: 18,
      name: "Love Potion",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.AaWjS1XZvO5Zi4xnL1Cq_gHaE8&pid=Api&P=0&h=180",
      price: "399.99",
      description: "For the lonely adventurer.",
    },
    {
      id: 19,
      name: "Shape Shifting Potion",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.nnsNvXzPJiYmCxIzbOW9HQHaEo&pid=Api&P=0&h=180",
      price: "224.99",
      description: "Shape Shifting Potion, for the Sneaky adventurer.",
    },
    {
      id: 20,
      name: "Stamina Potion",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.ZGSQFVaT-LLgRJfuZVvZSAHaEo&pid=Api&P=0&h=180",
      price: "56.99",
      description: "Stamina Potion, for the weary adventurer.",
    },
    {
      id: 21,
      name: "Mana Potion",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Bu8sivUY5lBlAj1b5tDRNgHaIr&pid=Api&P=0&h=180",
      price: "99.99",
      description: "Mana Potion, for mages who need recovery.",
    },
    {
      id: 22,
      name: "Health Potion",
      image: Images.Hpotion,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
    {
      id: 23,
      name: "Wraith Potion",
      image: Images.WraithPotion,
      price: "699.00",
      description: "Classic Knights Sword, for the classic adventurer.",
    },
  ],
  Scrolls: [
    {
      id: 24,
      name: "Arcane Blast",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.EiEvAbNXxN6HQBr2o6fwfQHaF7&pid=Api&P=0&h=180",
      price: "399.99",
      description: "Blaster Spell, garantes a strong blast.",
    },
    {
      id: 25,
      name: "Summoning Scroll",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.rsaVJhyr9S4DlWMNWYS7iwHaFj&pid=Api&P=0&h=180",
      price: "499.99",
      description: "Summoning Spell, for the summoner adventurer.",
    },
    {
      id: 26,
      name: "Flying Scroll",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.RLAcKHQDscY1SVuPO3ZWNwHaHa&pid=Api&P=0&h=180",
      price: "189.99",
      description: "Gain the ability to fly, for the flying adventurer.",
    },
    {
      id: 27,
      name: "Demon Summoning Scroll",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.WzfMFRX0w5ojhsYtBs6-jAHaJ4&pid=Api&P=0&h=180",
      price: "666.66",
      description: "Summon a powerful demon to fight for you.",
    },
  ],
};

export default PRODUCTS;
