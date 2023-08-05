export const cuisineData = [
    { id: 1, name: "Italian", reviews: [], averageRating: 4 },
    { id: 2, name: "Mexican", reviews: [], averageRating: 4 },
    { id: 3, name: "Chinese", reviews: [], averageRating: 4 },
    { id: 4, name: "Indian", reviews: [], averageRating: 4 }
  ];
  
  
  export const restaurantsData = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine_id: 1,
      address: "123 Main Street",
      phone: "555-1234",
      menu: [
        {
          name: "Margherita Pizza",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/9e7/bdf4fa911a76e5ba0656f5adad9749e7.png?output-format=webp",
          price: 500,
          qty: "one"
        },
        {
          name: "Pepperoni Pizza",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/6c9/c89a5e86eece9f96e3b8be3f6bb2c6c9.jpg?output-format=webp",
          price: 400,
          qty: "two"
        },
        {
          name: "Pasta Carbonara",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/6d8/84eeabf844ca5c9c310a8ed3671086d8.jpg?output-format=webp",
          price: 250,
          qty: "one"
        },
        {
          name: "Tiramisu",
          imgSrc: "https://b.zmtcdn.com/data/o2_assets/87c70510634544f14945f5c2acf173a11632716549.png",
          price: 300,
          qty: "one"
        }
      ],
          ratings: [
        {
          rating: 2,
          comment: "Disappointing food and slow service",
          revName: "Riya",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
        },
        {
          rating: 2,
          comment: "Overpriced menu for mediocre quality",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
          revName: "Krish"
        },
        {
          rating: 1,
          comment: "Lackluster flavors and unappealing presentatio",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
          revName: "Kripla"
        },
      ],
      averageRating: 1.6,
      description: "Delicious pizzas and pasta."
    },
    {
      id: 5,
      name: "Yummy Section",
      cuisine_id: 1,
      address: "555 No Street",
      phone: "888-7574",
      menu: [
              {
          name: "Capsicum Pizza",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/ab6/7e971ab815c31b32526ff32b70470ab6.jpg",
          price: 150,
          qty: "one"
        },
        {
          name: "Tomato Pizza",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/d19/86520521016d1860d50556146b172d19.jpg?output-format=webp",
          price: 150,
          qty: "one"
        },
        {
          name: "White sauce Pasta",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/d2f/26b3e83665ae7019dfae69cbd20a0d2f.png?output-format=webp",
          price: 150,
          qty: "one"
        },
        {
          name: "Italiano",
          imgSrc: "https://b.zmtcdn.com/data/o2_assets/6e4652a07d4850046388c830ebb71ac41678798512.jpeg",
          price: 250,
          qty: "one"
        }],
      ratings: [
        {
          rating: 1,
          comment: "Too spicy and unbalaned spices",
          revName: "Riya",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
        },
        {
          rating: 5,
                  comment: "Delicious food and exceptional service",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
          revName: "Krish"
        },
        {
          rating: 4,
          comment: "A hidden gem with mouthwatering dishes",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
          revName: "Kripla"
        },
      ],
      averageRating: 3.3,
      description: "Authentic Italian food"
    },
    {
      id: 2,
      name: "Taco Town",
      cuisine_id: 2,
      address: "456 Elm Street",
      phone: "555-5678",
      menu: [
        {
          name: "Tacos al Pastor",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/bac/4ed982a105a49f1b998c72b127ae7bac.jpg?output-format=webp",
          price: 650,
          qty: "two"
        },
        {
          name: "Guacamole",
          imgSrc: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-1-2.jpg",
          price: 550,
          qty: "two"
        },
              {
          name: "Quesadillas",
          imgSrc: "https://www.simplyrecipes.com/thmb/KE5S60KPY7_1SBTldQaWmLLfqG4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg",
          price: 200,
          qty: "one"
        },
        {
          name: "Churros",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/24b/c3aa5e4de50ee0fa29ebf50bd521724b.jpg",
          price: 100,
          qty: "one"
        },
      ],
      ratings: [
        {
          rating: 4,
          comment: "Top-notch cuisine that will leave you craving for more",
          revName: "Riya",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
        },
        {
          rating: 1,
          comment: "Uncooked dishes and unresponsive staff",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
          revName: "Krish"
        },
        {
          rating: 4,
          comment: "Delivery is quick and waiting time is low",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
          revName: "Kripla"
        },
      ],
      averageRating: 3,
          description: "Authentic Mexican street food."
    },
    {
      id: 3,
      name: "Golden Dragon",
      cuisine_id: 3,
      address: "789 Oak Street",
      phone: "555-9012",
      menu: [
        {
          name: "Kung Pao Chicken",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/5b9/179a744bd2dc5ed82d8d7af1c49945b9.jpg",
          price: 200,
          qty: "one"
        },
        {
          name: "Fried Rice",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/434/ccbd47fc40c557fc300b044885feb434.jpg?output-format=webp",
          price: 300,
          qty: "one"
        },
        {
          name: "Spring Rolls",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/629/1ed96f8336e431ea6436fd58bdb17629.jpg?output-format=webp",
          price: 550,
          qty: "two"
        },
        {
          name: "Fortune Cookies",
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Fortune_cookies.jpg/220px-Fortune_cookies.jpg",
          price: 450,
          qty: "two"
        },
      ],
          ratings: [
        {
          rating: 3,
          comment: "Good food but place is not that clean",
          revName: "Riya",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
        },
        {
          rating: 5,
          comment: "Great food and environment",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
          revName: "Krish"
        },
        {
          rating: 4,
          comment: "Delivery is quick and waiting time is low",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
          revName: "Kripla"
        },
      ],
      averageRating: 4,
      description: "Traditional Chinese cuisine."
    },
      {
      id: 4,
      name: "Curry House",
      cuisine_id: 4,
      address: "321 Maple Street",
      phone: "555-3456",
      menu: [
        {
          name: "Butter Chicken", 
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/9c4/54d395b87a0bffc696562e58935319c4.jpg?output-format=webp",
          price: 550,
          qty: "two"
        },
        {
          name: "Naan Bread", 
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/3de/f76cfb06d388018b1553938bba6743de.jpg?output-format=webp",
          price: 450,
          qty: "two"
        },
        {
          name: "Biryani", 
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/bdd/725162deeb004cc683f1af5dd3a72bdd.jpg?output-format=webp",
          price: 400,
          qty: "two"
        },
        {
          name: "Gulab Jamun", 
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/1ce/e735a5f3dd40549bfcd803359da711ce.jpg?output-format=webp",
          price: 300,
          qty: "one"
        },
      ],
          ratings: [
        {
          rating: 3,
          comment: "Good food but place is not that clean",
          revName: "Riya",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
        },
        {
          rating: 5,
          comment: "Great food and environment",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
          revName: "Krish"
        },
        {
          rating: 4,
          comment: "Delivery is quick and waiting time is low",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
          revName: "Kripla"
        },
      ],
      averageRating: 4,
      description: "Flavorsome Indian dishes."
    },
    {
      id: 6,
      name: "Shah's Street",
      cuisine_id: 4,
      address: "875 Apple Road",
      phone: "875-5376",
      menu: [
              {
          name: "Shahi Tukda",
          imgSrc: "https://b.zmtcdn.com/data/dish_images/9ea3299d1dd078773cfef7ac7e7428411613652883.png",
          price: 400,
          qty: "two"
        },
        {
          name: "Lachha Prantha",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/7b6/b87a7990c7046fa8d49e6490e98f67b6.jpg?output-format=webp",
          price: 450,
          qty: "two"
        },
        {
          name: "Veg Thali",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/cb7/940581ae56931f0ef641763a0e66ccb7.jpg?output-format=webp",
          price: 500,
          qty: "one"
        },
        {
          name: "Rasgulla",
          imgSrc: "https://b.zmtcdn.com/data/dish_photos/aab/dea37c4858e80799213ec0b551712aab.jpg?output-format=webp",
          price: 550,
          qty: "two"
        },
      ],
      ratings: [
        {
          rating: 2,
          comment: "Unsatisfactory experience overall",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
                  revName: "Riya"
        },
              {
          rating: 5,
          comment: "Great food and environment",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
          revName: "Krish"
        },
        {
          rating: 5,
          comment: "A must-visit restaurant with a 5-star dining experience",
          pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
          revName: "Kripla"
        },
      ],
      averageRating: 4,
      description: "Flavorsome Indian dishes."
    }
  ];