"use client";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Icons } from "./Icons";
import { FC, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/Toaster";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({className, ...props}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('')
  const { toast } = useToast();


  async function onSubmit(event: React.SyntheticEvent) {
    const expectedValue = 'name@example.com'

    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    userInput === expectedValue ? localStorage.setItem('isLogged', JSON.stringify(true)) : console.log('input incorrect')

  }

  const handleClick = () => {
    toast({
      title: "Authentification Not Working",
      description:
        "Authentification with Google / Github will be available later",
    });
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <Input
            id="email"
            placeholder="name@example.com"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
          />
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={handleClick}
          className="border-zinc-300"
          variant="outline"
          type="button"
        >
          <Icons.google className="mr-2 h-4 w-4" /> Google
        </Button>
        <Button
          onClick={handleClick}
          className="border-zinc-300"
          variant="outline"
          type="button"
        >
          <Icons.gitHub className="mr-2 h-4 w-4" /> Github
        </Button>
      </div>
      <Toaster />
    </div>
    // TODO
    //Make the authentification works with a fake email
  );
};

export default UserAuthForm;
