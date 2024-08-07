import WordRotate from "@/components/magicui/word-rotate";
import { appVar } from "@/constant/appConstant";

export default async function WordRotateEffect() {
  return (
    <WordRotate
      className={appVar.textStyle2}
      words={[
        appVar.phrase1,
        "Click to Navigate",
        appVar.phrase2,
        "Click to Navigate",
      ]}
    />
  );
}
