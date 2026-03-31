import Link from "next/link"
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to our tavern!</h2>
      </main>
      <Footer />
    </>
  );
}

export default Home;