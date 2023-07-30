import { FunctionComponent } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

interface SignInProps {
    
}
 
const SignIn: FunctionComponent<SignInProps> = () => {

   

    return (  
        <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
            <div className="flex flex-col space-y-2 text-center">
                <Icons.logo className="w-6 h-6 mx-auto" /> 
                <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                <p className="max-w-xs mx-auto text-sm">
                       By continuing, you are setting up a Reddit account and agree to our User Agreement and Privacy Policy     
                </p>

                <UserAuthForm  />

                {/* sign in form */}
                <p className="px=8 text-center text-sm text-zinc-700">
                    New to Reddit?{' '}
                    <Link href="/sign-up"
                        className="text-sm underline hover:text-zinc-800 hover:font-semibold">
                            Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
 
export default SignIn;