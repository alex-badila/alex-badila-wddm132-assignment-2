import Link from "next/link"
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to The Leaky Goat!</h2>
        <p>We're a tavern with a long and storied history. We've been around since the first Dragonborn Emperor! Yes, we are 150 years old! We serve a variety of people, a lot of them being weary travellers looking for a drink and a good meal. We do have our regulars, though, and we're very grateful for them. We serve a wide selection of food and drinks, from all over the known world! Every dish has its story, so feel free to ask! You'll be surprised what you find out!</p>
      </main>
      <Footer />
    </>
  );
}

export default Home;