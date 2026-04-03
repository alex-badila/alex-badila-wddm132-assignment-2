import Card from "../card";
import Header from "../header";
import Footer from "../footer";

const Lunch = (props: any) => {

  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Lunch</h2>
          <h3>Appetizers</h3>
          <div className="cardContainer">
              <Card menuItem="Grubs Platter" description="Delicious Arkhani insect grubs, served in a leaf with peanut sauce." price="20 gold pieces"/>
              <Card menuItem="Wildebeest Sliders" description="3 sliders made from the finest cut of Zherkani wildebeest." price="30 gold pieces"/>
              <Card menuItem="Arkhani Salad" description="Kale, onions, tomatoes, rindernuts, derobeast cheese, and cucumbers." price="25 gold pieces"/>
              <Card menuItem="Derobeast Avocado Toast" description="Derobeast cheese, avocado, and snargle shoots, served on toasted bread." price="30 gold pieces"/>
          </div>
        </section>
        <section>
          <h3>Mains</h3>
          <div className="cardContainer">
              <Card menuItem="Roasted Glarn Tentacle" description="Served with gravy, mashed potatoes, and assorted vegetables." price="50 gold pieces"/>
              <Card menuItem="Derobeast Burger" description="Prime cut derobeast meat served with fries and gravy." price="40 gold pieces"/>
              <Card menuItem="Wildebeest Steak" description="Prime cut 10 oz wildebeest steak served with mashed potatoes and assorted vegetables." price="50 gold pieces"/>
              <Card menuItem="Snargleplum Zen Bowl" description="Kale, snargleplum nuts, and rice." price="35 gold pieces"/>
          </div>
        </section>
        <section>
          <h3>Dessert</h3>
          <div className="cardContainer">
              <Card menuItem="Derobeast Chocolate Mousse Cake" description="Delicious chocolate mousse cake made from derobeast milk, served with sergoberries." price="20 gold pieces"/>
              <Card menuItem="Wildebeest Cheese Cake" description="Cheese cake made from wildebeest milk. Comes in vanilla, chocolate, and strawberry." price="20 gold pieces"/>
              <Card menuItem="Arkhani Sundae" description="Ice cream sundae made with vanilla ice cream, chocolate sauce, and rindernuts." price="20 gold pieces"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Lunch;