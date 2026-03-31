import Card from "../card";
import Header from "../header";
import Footer from "../footer";

function Lunch(props: any) {

  return (
    <>
      <Header />
      <div className="cardContainer">
          <Card menuItem="Lunch menu item 1" description="Lunch description 1" price="Lunch price 1"/>
          <Card menuItem="Lunch menu item 2" description="Lunch description 2" price="Lunch price 2"/>
          <Card menuItem="Lunch menu item 3" description="Lunch description 3" price="Lunch price 3"/>
          <Card menuItem="Lunch menu item 4" description="Lunch description 4" price="Lunch price 4"/>
      </div>
      <Footer />
    </>
  )
}

export default Lunch;