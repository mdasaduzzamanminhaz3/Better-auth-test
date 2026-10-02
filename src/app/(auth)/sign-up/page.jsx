"use client";
import React from 'react';
import {Button, Description, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
import { signUp } from '@/lib/auth-client';
import {useState} from "react";
import {Eye, EyeSlash} from "@gravity-ui/icons";
const SignUpPage = () => {
      const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const {data:resData,error} = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password
    })
    console.log(resData,error);
  };
     const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-4">
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      
       <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
      
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
        </div>

    );
};

export default SignUpPage;