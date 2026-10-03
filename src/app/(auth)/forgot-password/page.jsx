'use client';
import { requestPasswordReset } from '@/lib/auth-client';
import { toast } from '@heroui/react';
import React from 'react';

const ForgotPasswordPage = () => {
    const handleForgotPassword = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        const resData = await requestPasswordReset({
            email: userData.email,
            redirectTo:'/reset-password' 
        })
        toast.success("Password reset link sent to your email. Please check your inbox.");
        console.log("after submit request password reset",resData); 

    }
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-gray-600">Please enter your email address to reset your password.</p>
        <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleForgotPassword}>
          <label htmlFor="email" className="text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring"
            >
                Send Reset Link
            </button>
        </form>
        </div>

    );
};

export default ForgotPasswordPage;