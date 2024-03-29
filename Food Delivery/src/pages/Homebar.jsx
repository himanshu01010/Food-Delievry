import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Homebar() {
    return (
        <div className="flex items-center justify-between bg-violet-200 p-4">
            
            <div className="flex items-center">
                {/* <img src="/logo.png" alt="Logo" className="h-10 w-10" /> */}
                <Link to="/">
                    <Button className=" bg-violet-200 hover:bg-violet-200 text-3xl italic font-semibold text-violet-600 hover:text-violet-800">FlavorDash</Button>
                </Link>
            </div>

        
            <div className="flex-grow mx-4">
                <Input id="search" type="text" placeholder="Search for anything" className="placeholder:italic text-violet-700 boder border-violet-500 hover:border-violet-700 h-10 w-3/5 " />
            </div>

        
            <div className="flex items-center space-x-8">
                <a href="/" >
                    <img src="home.png" alt="home" className="w-11 h-11" />
                </a>
                <a href="/offers" >
                    <img src="offer.png" alt="offer" className="w-12 h-12" />
                </a>
                <a href="/cart" >
                    <img src="cart.png" alt="cart" className="w-11 h-11" />
                </a>
                <a href="/login" >
                    <img src="login.png" alt="login" className="w-12 h-13" />
                </a>
            </div>
        </div>

        
    );
}
