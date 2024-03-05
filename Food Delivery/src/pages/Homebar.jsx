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
                <Input id="search" type="text" placeholder="Search" className="border-black h-7 w-50" />
            </div>

        
            <div className="flex items-center space-x-4">
                <Link to="/">
                    <Button variant="outline" className="border-black hover:text-black">Home</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline" className="border-black hover:text-black">Offers</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline" className="border-black hover:text-black">Cart</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline" className="border-black hover:text-black">Login</Button>
                </Link>
            </div>
        </div>
    );
}
