import Card from "../card";
import Header from "../header";
import Footer from "../footer";

const Dinner = (props: any) => {

  return (
    <>
      <Header />
      <main>
        <h1 className="center">Dinner</h1>
        <section>
          <h2>Appetizers</h2>
          <div className="cardContainer">
              <Card menuItem="Grubs Platter" description="Delicious Arkhani insect grubs, served in a leaf with peanut sauce." price="20 gold pieces"/>
              <Card menuItem="Wildebeest Sliders" description="3 sliders made from the finest cut of Zherkani wildebeest." price="30 gold pieces"/>
              <Card menuItem="Shining Butterfly Soup" description="Soup made from the mystical shining butterly. It glows!" price="25 gold pieces"/>
              <Card menuItem="Glarn Tentacle Soup" description="Soup of the tentacles of the famous glarn beast. Contains potatoes and sour cream." price="30 gold pieces"/>
          </div>
        </section>
        <section>
          <h2>Mains</h2>
          <div className="cardContainer">
              <Card menuItem="Roasted Glarn Tentacle" description="Served with gravy, mashed potatoes, and assorted vegetables." price="50 gold pieces"/>
              <Card menuItem="Franglesangle Nachos" description="Served with famous franglesangle sauce that is to die for!" price="35 gold pieces"/>
              <Card menuItem="Wildebeest Steak" description="Prime cut 10 oz wildebeest steak served with mashed potatoes and assorted vegetables." price="50 gold pieces"/>
              <Card menuItem="Magical Lightbug Pasta" description="Magical lightbug served with iteratto pasta. You can still see it shine even after death!" price="40 gold pieces"/>
          </div>
        </section>
        <section>
          <h2>Dessert</h2>
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

export default Dinner;