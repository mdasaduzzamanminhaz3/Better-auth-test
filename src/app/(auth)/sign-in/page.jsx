"use client";
import React from "react";
import {useState} from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { signIn } from "@/lib/auth-client";
import {Eye, EyeSlash} from "@gravity-ui/icons";
const SignInPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const {data:resData,error} = await signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/"
    })
    console.log(resData,error);
    
  };
   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-4">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
    <TextField className="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
        />
        <InputGroup.Suffix className="pe-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
          <Button type="submit">
            Submit
          </Button>
      </Form>
      did you forget your password? <a href="/forgot-password" className="text-blue-500">forgot password</a>
    </div>
  );
};

export default SignInPage;
