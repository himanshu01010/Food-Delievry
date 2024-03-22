import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Homebar() {
    return (
        <div className="flex items-center justify-between bg-slate-200 p-4">
            
            <div className="flex items-center">
                {/* <img src="/logo.png" alt="Logo" className="h-10 w-10" /> */}
                <Link to="/">
                    <Button className="bg-slate-200 hover:bg-slate-200 text-3xl italic font-semibold text-violet-600">FlavorDash</Button>
                </Link>
            </div>

        
            <div className="flex-grow mx-4">
                <Input id="search" type="text" placeholder="Search for anything" className="placeholder:italic border-violet-500 h-10 w-3/5 " />
            </div>

        
            <div className="flex items-center space-x-4">
                <Link to="/">
                    <Button variant="outline" className=" bg-violet-400 hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-20 h-8">Home</Button>
                </Link>
                <Link to="/offers">
                    <Button variant="outline" className=" bg-violet-400 hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-20 h-8">Offers</Button>
                </Link>
                <Link to="/cart">
                    <Button variant="outline" className=" bg-violet-400 hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-20 h-8">Cart</Button>
                </Link>
                <Link to="/login">
                    <Button variant="outline" className=" bg-violet-400 hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-20 h-8">Login</Button>
                </Link>
            </div>
        </div>

        
    );
}
