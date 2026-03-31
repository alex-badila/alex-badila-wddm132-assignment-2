import Image from "next/image";
import Lunch from "./lunch/page";
import Link from "next/link"

export default function Home() {
  return (
    <div className="buttonContainer">
      <Link href="/lunch"><button id="lunchButton">Lunch</button></Link>
      <Link href="/dinner"><button id="dinnerButton">Dinner</button></Link>
      <Link href="/drinks"><button id="drinksButton">Drinks</button></Link>
    </div>
  );
}
