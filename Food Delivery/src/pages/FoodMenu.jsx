import React from "react";
import { Separator } from "@/components/ui/separator";


const FoodMenu = () => {
  const foodCategories = [
    {
      category: "South Indian",
      items: [
        {
          name: "Biryani",
          price: "$10",
          rating: 4.5,
          image: "biryani.jpg",
          link: "/biryani"
        },
        {
          name: "Dosa",
          price: "$8",
          rating: 4.2,
          image: "dosa.jpg",
          link: "/dosa"
        },
        {
          name: "Uttapam",
          price: "$7",
          rating: 4.0,
          image: "uttapam.jpg",
          link: "/uttapam"
        },
        {
          name: "Idli",
          price: "$4",
          rating: 3.9,
          image: "idli.jpg",
          link: "/idli"
        },
      ]
    },
    {
      category: "North Indian",
      items: [
        {
          name: "Chole Bathure",
          price: "$5",
          rating: 4.5,
          image: "chole.jpg",
          link: "/Chole_bathure"
        },
        {
          name: "Rajam Chawal",
          price: "$2",
          rating: 4.2,
          image: "rajma.jpg",
          link: "/rajma_chawal"
        },
        {
          name: "Butter Chicken",
          price: "$7",
          rating: 4.8,
          image: "tikka.jpg",
          link: "/butter_chicken"
        },
        {
          name: "Aloo Paratha",
          price: "$1",
          rating: 4.7,
          image: "aloo.jpg",
          link: "/aloo_paratha"
        }
      ]
    },
    {
      category: "Italian",
      items: [
        {
          name: "Pasta",
          price: "$5",
          rating: 4.5,
          image: "pasta.jpg",
          link: "/pasta"
        },
        {
          name: "Pizza",
          price: "$2",
          rating: 4.2,
          image: "pizza.jpg",
          link: "/pizza"
        },
        {
          name: "lasagna",
          price: "$7",
          rating: 4.8,
          image: "lasagna.jpg",
          link: "/lasagna"
        }
      ]
    },
    {
      category: "Chinese",
      items: [
        {
          name: "Noodles",
          price: "$5",
          rating: 4.5,
          image: "noodles.jpg",
          link: "/noodles"
        },
        {
          name: "Spring Roll",
          price: "$2",
          rating: 4.2,
          image: "roll.jpg",
          link: "/spring_roll"
        },
        {
          name: "Chilli potato",
          price: "$7",
          rating: 4.8,
          image: "chilli.jpg",
          link: "/chilli_potato"
        },
        {
          name: "Momo",
          price: "$4",
          rating: 4.5,
          image: "momo.jpg",
          link: "/momo"
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Rasmalai",
          price: "$1",
          rating: 4.5,
          image: "rasmalai.jpg",
          link: "/rasmalai"
        },
        {
          name: "Rasgulla",
          price: "$2",
          rating: 4.2,
          image: "rasgulla.jpg",
          link: "/rasgulla"
        },
        {
          name: "Kaju Katli",
          price: "$5",
          rating: 4.8,
          image: "kaju.jpg",
          link: "/kaju_katli"
        },
        {
          name: "Jalebi",
          price: "$4",
          rating: 4.5,
          image: "jalebi.jpg",
          link: "/Jalebi"
        },
        {
          name: "Gulab Jamun",
          price: "$3",
          rating: 4.5,
          image: "gulab.jpg",
          link: "/gulab_jamun"
        }
      ]
    },
    // Add more categories as needed
  ];

  return (
    <div className="px-6 py-8 max-w-screen-xl mx-auto">
      {foodCategories.map((category, index) => (
        <div key={index}>
          <h2 className="px-10 text-4xl font-bold text-violet-300 mb-4">{category.category}</h2>
          <br />
          <div className="flex flex-wrap mx-10">
            {category.items.map((item, idx) => (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-6 mb-20">
                  <a href={`/${category.category.toLowerCase()}/${item.name && item.name.toLowerCase()}`}>
                <div className="bg-violet-200 hover:bg-violet-400 border border-violet-300 hover:border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden shadow-md">
                    <img src={item.image} className="w-full h-32 object-cover" alt={item.name} />
                  <div className="p-4">
                    <a href={`/${category.category.toLowerCase()}/${item.name && item.name.toLowerCase()}`} className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                      {item.name}
                    <p className="text-sm text-gray-600">{item.price}    </p>
                    <a href="/cart" className="block mt-2 text-sm font-semibold text-blue-500 hover:underline">Add to Cart</a>
                    </a>
                  </div>
                </div>
                  </a>
              </div>
            ))}
          </div>
          {index < foodCategories.length - 1 && <Separator />} 
          <br />
          <br />
        </div>
      ))}
    </div>
    
    // <div>
    //   {foodCategories.map(category => (
    //     <div key={category.category}>
    //       <h2>{category.category}</h2>
    //       <div>
    //         {category.items.map(item => (
    //           <div key={item.name}>
    //             <Link to={`/${category.category.toLowerCase()}/${item.name.toLowerCase()}`}>
    //               <h3>{item.name}</h3>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>


    );
  
};

export default FoodMenu;


