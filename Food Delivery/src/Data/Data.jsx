import React from "react";
import { Separator } from "@/components/ui/separator";
import img1 from "../images/biryani.jpg";
import img2 from "../images/dosa.jpg";
import img3 from "../images/uttapam.jpg";
import img4 from "../images/idli.jpg";
import img5 from "../images/chole.jpg";
import img6 from "../images/rajma.jpg";
import img7 from "../images/tikka.jpg";
import img8 from "../images/aloo.jpg";
import img9 from "../images/pasta.jpg";
import img10 from "../images/pizza.jpg";
import img11 from "../images/lasagna.jpg";
import img12 from "../images/noodles.jpg";
import img14 from "../images/roll.jpg";
import img15 from "../images/chilli.jpg";
import img13 from "../images/momo.jpg";
import img16 from "../images/rasmalai.jpg";
import img17 from "../images/rasgulla.jpg";
import img18 from "../images/kaju.jpg";
import img19 from "../images/jalebi.jpg";
import img20 from "../images/gulab.jpg";


  const foodCategories = [
    {
      category: "South Indian",
      items: [
        {
          description: "",
          name: "Biryani",
          price: "$10",
          rating: 4.5,
          image: img1,
          link: "/biryani"
        },
        {
          description: "",
          name: "Dosa",
          price: "$8",
          rating: 4.2,
          image: img2,
          link: "/dosa"
        },
        {
          description: "",
          name: "Uttapam",
          price: "$7",
          rating: 4.0,
          image: img3,
          link: "/uttapam"
        },
        {
          description: "",
          name: "Idli",
          price: "$4",
          rating: 3.9,
          image: img4,
          link: "/idli"
        },
      ]
    },
    {
      category: "North Indian",
      items: [
        {
          description: "",
          name: "Chole Bathure",
          price: "$5",
          rating: 4.5,
          image: img5,
          link: "/Chole_bathure"
        },
        {
          description: "",
          name: "Rajam Chawal",
          price: "$2",
          rating: 4.2,
          image: img6,
          link: "/rajma_chawal"
        },
        {
          description: "",
          name: "Butter Chicken",
          price: "$7",
          rating: 4.8,
          image: img7,
          link: "/butter_chicken"
        },
        {
          description: "",
          name: "Aloo Paratha",
          price: "$1",
          rating: 4.7,
          image: img8,
          link: "/aloo_paratha"
        }
      ]
    },
    {
      category: "Italian",
      items: [
        {
          description: "",
          name: "Pasta",
          price: "$5",
          rating: 4.5,
          image: img9,
          link: "/pasta"
        },
        {
          description: "Cheesilicious pizzas to make every day extraordinary.",
          name: "Pizza",
          price: "$2",
          rating: 4.2,
          image: img10,
          link: "/pizza"
        },
        {
          description: "",
          name: "lasagna",
          price: "$7",
          rating: 4.8,
          image: img11,
          link: "/lasagna"
        }
      ]
    },
    {
      category: "Chinese",
      items: [
        {
          description: "",
          name: "Noodles",
          price: "$5",
          rating: 4.5,
          image: img12,
          link: "/noodles"
        },
        {
          description: "",
          name: "Spring Roll",
          price: "$2",
          rating: 4.2,
          image: img13,
          link: "/spring_roll"
        },
        {
          description: "",
          name: "Chilli potato",
          price: "$7",
          rating: 4.8,
          image: img14,
          link: "/chilli_potato"
        },
        {
          description: "",
          name: "Momo",
          price: "$4",
          rating: 4.5,
          image: img15,
          link: "/momo"
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          description: "",
          name: "Rasmalai",
          price: "$1",
          rating: 4.5,
          image: img16,
          link: "/rasmalai"
        },
        {
          description: "",
          name: "Rasgulla",
          price: "$2",
          rating: 4.2,
          image: img17,
          link: "/rasgulla"
        },
        {
          description: "",
          name: "Kaju Katli",
          price: "$5",
          rating: 4.8,
          image: img18,
          link: "/kaju_katli"
        },
        {
          description: "",
          name: "Jalebi",
          price: "$4",
          rating: 4.5,
          image: img19,
          link: "/Jalebi"
        },
        {
          description: "",
          name: "Gulab Jamun",
          price: "$3",
          rating: 4.7,
          image: img20,
          link: "/gulab_jamun"
        }
      ]
    },
    // Add more categories as needed
  ];

export default foodCategories;


