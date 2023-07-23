import { Follow, Hero, LatestProjects, LikeToMake } from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <LikeToMake />
      <Follow />
      <LatestProjects />
    </div>
  );
}
