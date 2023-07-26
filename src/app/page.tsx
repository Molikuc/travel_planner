import Activities from "@/components/Activities";
import Days from "@/components/Days";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div className="grid gap-12">
      <Map />
      <Days />

      <Activities />
    </div>
  );
}
