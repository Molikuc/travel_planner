import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

interface ActivitiesProps {
  name: string;
}

const Activities: FC<ActivitiesProps> = ({ name }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-center">
            Boom maroon bounty draft ho yardarm walk the plank poop deck black
            jack bilge rat. Hempen halter red ensign sloop bucko interloper
            strike colors log rigging draught crack Jennys tea cup. Mizzen
            driver landlubber or just lubber loaded to the gunwalls doubloon
            sheet flogging blow the man down cog Sea Legs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activities;
