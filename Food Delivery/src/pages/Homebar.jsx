import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Homebar() {
    return (
        <div className="flex items-center justify-between bg-slate-200 p-4">
            
            <div className="flex items-center">
                <img src="" alt="Logo" className="h-10 w-10" />
            </div>

        
            <div className="flex-grow mx-4">
                <Input id="search" type="text" class="placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." />
            </div>

        
            <div className="flex items-center space-x-4">
                <Link to="/">
                    <Button variant="outline" className="border-black bg-blue-400 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 h-8">Home</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline" className="border-black bg-blue-400 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 h-8">Offers</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline" className="border-black bg-blue-400 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 h-8">Cart</Button>
                </Link>
                <Link to="/login">
                    <Button variant="outline" className="border-black bg-blue-400 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 h-8">Login</Button>
                </Link>
            </div>
        </div>
    );
}
