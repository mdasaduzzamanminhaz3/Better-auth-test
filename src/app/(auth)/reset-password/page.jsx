import React,{Suspense} from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-gray-600">Please enter your new password below.</p>
        <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordForm/>
        </Suspense>
        </div>
    );
};

export default ResetPasswordPage;