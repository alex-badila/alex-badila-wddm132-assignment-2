import Card from "../card";
import Header from "../header";
import Footer from "../footer";

function Drinks(props: any) {

  return (
    <>
      <Header />
      <div className="cardContainer">
          <Card menuItem="Drinks menu item 1" description="Drinks description 1" price="Drinks price 1"/>
          <Card menuItem="Drinks menu item 2" description="Drinks description 2" price="Drinks price 2"/>
          <Card menuItem="Drinks menu item 3" description="Drinks description 3" price="Drinks price 3"/>
          <Card menuItem="Drinks menu item 4" description="Drinks description 4" price="Drinks price 4"/>
      </div>
      <Footer />
    </>
  )
}

export default Drinks;