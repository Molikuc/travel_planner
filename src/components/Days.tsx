"use client";

import { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import Activities from "./Activities";

interface DaysProps {}

const Days: FC<DaysProps> = ({}) => {
  const [showDiv, setShowDiv] = useState(false);
  const [activityName, setActivityName] = useState("");

  const handleClick = (event: any) => {
    const text = event?.target.textContent;
    setShowDiv(true);
    setActivityName(text);
  };

  return (
    <>
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Day 1</CardTitle>
          </CardHeader>
          <CardContent>
            <div onClick={handleClick} className="item cursor-pointer">
              Museum
            </div>
            <div onClick={handleClick} className="item cursor-pointer">
              Shopping Center
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Day 2</CardTitle>
          </CardHeader>
          <CardContent>
            <div onClick={handleClick} className="cursor-pointer">
              Beach
            </div>
            <div onClick={handleClick} className="cursor-pointer">
              Restaurant
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Day 3</CardTitle>
          </CardHeader>
          <CardContent>
            <div onClick={handleClick} className="cursor-pointer">
              Hiking
            </div>
            <div onClick={handleClick} className="cursor-pointer">
              Spa
            </div>
          </CardContent>
        </Card>
      </div>
      <div>{showDiv ? <Activities name={activityName} /> : null}</div>
    </>
  );
};

export default Days;
