'use client';
import { resetPassword } from '@/lib/auth-client';
import { Form, toast } from '@heroui/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const ResetPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const handleResetPassword = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("user data before submit", userData);
        const resData = await resetPassword({
            newPassword: userData.password,
            token: token,
        })
        console.log("after submit reset password", resData);
        toast.success('Password has been reset successfully. You can now log in with your new password.');
    }
    return (
        <Form onSubmit={handleResetPassword} className="flex flex-col gap-4 w-full max-w-sm">
            <label htmlFor="new-password" className="text-gray-700">New Password</label>
            <input
                type="password"
                id="new-password"
                name="new-password"
                placeholder="Enter your new password"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring"
            >
                Reset Password
            </button>
        </Form>
    );
};

export default ResetPasswordForm;