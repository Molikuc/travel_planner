import { FC } from "react";
import Map from "./Map";
import Days from "./Days";

interface UserPlanProps {}

const UserPlan: FC<UserPlanProps> = ({}) => {
  return (
    <div className="grid gap-12">
      <Map />
      <Days />
    </div>
  );
};

export default UserPlan;
