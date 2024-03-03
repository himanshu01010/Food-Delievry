import React from "react";
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

const Login = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex item-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
        <div className="grid gap-2 item-start space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2 grid gap-2 item-start space-y-2 mt-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder='Password'/>
        </div>
        </CardContent>
        <CardFooter>
        <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
      </div>
      </ThemeProvider>
    </>
  );
};

export default Login;
