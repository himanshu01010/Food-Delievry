import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(name)
    axios.post('/api/signup',{name,email,password})
    .then(result => console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex item-center justify-center">
          <Card className="w-[400px]">
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 item-start space-y-2">
                <Label htmlFor="email">Name</Label>
                <Input id="name" type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="grid gap-2 item-start space-y-2 mt-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="grid gap-2 grid gap-2 item-start space-y-2 mt-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleSubmit}>Signup</Button>
            </CardFooter>
            <p className="mb-2">Already Have an Account</p>
            <Link to="/login">
              <Button className="w-full">Login</Button>
            </Link>
          </Card>
        </div>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
