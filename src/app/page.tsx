import { HeaderGlobe } from "@/components/user/headerGlobe";
import WordRotateEffect from "@/components/user/WordRotateEffect";
import NormalCard from "@/components/user/normalCard";
import { MeteorEffectCard } from "@/components/user/meteorEffectCard.jsx";
import { ParticleCard } from "@/components/user/particleCard";
export default function Home() {
  return (
    <div>
      <HeaderGlobe />
      <WordRotateEffect />
      <NormalCard />
      <ParticleCard />
      <MeteorEffectCard />
    </div>
  );
}
