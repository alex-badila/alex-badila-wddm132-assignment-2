import Link from "next/link"
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to The Leaky Goat!</h1>
        <p>We're a tavern with a long and storied history. We've been around since the first Dragonborn Emperor! Yes, we are 150 years old! We serve a variety of people, a lot of them being weary travellers looking for a drink and a good meal. We do have our regulars, though, and we're very grateful for them. We serve a wide selection of food and drinks, from all over the known world! Every dish has its story, so feel free to ask! You'll be surprised what you find out!</p>
        <p>Check out our menus here:</p>
        <div className="linkContainer">
          <a href="/lunch">Lunch</a>
          <a href="/dinner">Dinner</a>
          <a href="/drinks">Drinks</a>
        </div>
        <p>Book a reservation today!</p>
        <button><a href="/reservation">Book Reservation</a></button>
      </main>
      <Footer />
    </>
  );
}

export default Home;