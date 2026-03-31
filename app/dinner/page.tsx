import Card from "../card";
import Header from "../header";
import Footer from "../footer";

function Dinner(props: any) {

  return (
    <>
      <Header />
      <div className="cardContainer">
          <Card menuItem="Dinner menu item 1" description="Dinner description 1" price="Dinner price 1"/>
          <Card menuItem="Dinner menu item 2" description="Dinner description 2" price="Dinner price 2"/>
          <Card menuItem="Dinner menu item 3" description="Dinner description 3" price="Dinner price 3"/>
          <Card menuItem="Dinner menu item 4" description="Dinner description 4" price="Dinner price 4"/>
      </div>
      <Footer />
    </>
  )
}

export default Dinner;