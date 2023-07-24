import {
  Follow,
  Hero,
  ImpactOfGood,
  LatestProjects,
  LikeToMake,
  WorkWith,
} from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <LikeToMake />
      <Follow />
      <LatestProjects />
      <WorkWith />
      <ImpactOfGood />
    </div>
  );
}
