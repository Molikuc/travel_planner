"use client";

import { FC, useEffect } from "react";
import Map from "./Map";
import Days from "./Days";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/Button";
import { Toaster } from "./ui/Toaster";

interface UserPlanProps {}

const UserPlan: FC<UserPlanProps> = ({}) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Pro Tips",
      description: "Click on the activities to get the infos",
    });
  }, []);

  return (
    <div className="grid gap-12">
      <Map />
      <Days />
      <Toaster />
    </div>
  );
};

export default UserPlan;
