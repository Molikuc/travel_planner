import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

interface DaysProps {}

const Days: FC<DaysProps> = ({}) => {
  return (
    <div className="grid grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Day 1</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Museum</li>
            <li>Shopping Center</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Day 2</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Beach</li>
            <li>Restaurant</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Day 3</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Hiking</li>
            <li>Spa</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Days;
