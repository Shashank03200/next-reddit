'use client'

import { FunctionComponent, useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import {signIn} from 'next-auth/react'
import { Icons } from "./Icons";
import { useToast } from "@/components/ui/use-toast"



interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}
 


const UserAuthForm: FunctionComponent<UserAuthFormProps> = ({className, ...props}) => {

    const [isLoading, setIsLoading]     = useState(false);
    const {toast} = useToast();

    const loginWithGoogle = async() => {
        setIsLoading(true);
        await signIn('google')
        try{
            setIsLoading(true);
        }catch(error){
            toast({
                title:'Error',
                description:"Error loggin with Google",
                variant:'destructive'
            })
        }
    }

    return ( 
        <div className={cn('flex justify-center', className)}>
            <Button size={'sm'} className="w-full" isLoading={isLoading}>
              
                Google
            </Button>
        </div>
     );
}
 
export default UserAuthForm;