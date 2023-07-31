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
  const { toast } = useToast();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
