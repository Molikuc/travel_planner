import { FC } from "react";

interface MapProps {}

const Map: FC<MapProps> = ({}) => {
  return (
    <div className="min-h-[500px] bg-zinc-100 text-center flex justify-center items-center border-2 rounded">
      <div>Map</div>
    </div>
  );
};

export default Map;
