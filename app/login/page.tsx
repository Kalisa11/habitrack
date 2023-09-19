import AuthForm from "@components/AuthForm";
import { Component } from "lucide-react";

const Auth = () => {
  return (
    <>
      <Component size={40} className="mx-auto w-auto text-black" />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
      <AuthForm />
    </>
  );
};

export default Auth;
