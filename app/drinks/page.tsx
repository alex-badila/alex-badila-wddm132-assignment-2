import Card from "../card";
import Header from "../header";
import Footer from "../footer";

const Drinks = (props: any) => {

  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Cocktails</h2>
          <div className="cardContainer">
              <Card menuItem="Wizard's Explosion" description="Rum, orange juice and a secret ingredient to add that extra kick!" price="20 gold pieces"/>
              <Card menuItem="Witch's Delight" description="Tequila, cranberry juice, and lemon." price="15 gold pieces"/>
              <Card menuItem="Glorious Snakebrew" description="Snake venom whisky mixed with grape juice. A great drink for the risk-taking adventurer!" price="30 gold pieces"/>
              <Card menuItem="Dragon's Breath" description="Vodka and mango juice. Served with a flame on top." price="20 gold pieces"/>
          </div>
        </section>
        <section>
          <h2>Beer</h2>
          <div className="cardContainer">
              <Card menuItem="Butterbeer" description="Made with butter from the Arkhazi mountains." price="20 gold pieces"/>
              <Card menuItem="Viking Ale" description="Frosty mug of ale from the North for those fearless fighters among us!" price="30 gold pieces"/>
              <Card menuItem="Gerrer Horn Ale" description="Refreshing dark ale served in a horn of the gerrer beast." price="35 gold pieces"/>
          </div>
        </section>
        <section>
          <h2>Wine</h2>
          <div className="cardContainer">
              <Card menuItem="Dragon's Blood" description="A bitter red wine with an extra kick." price="30 gold pieces"/>
              <Card menuItem="Snow White" description="A chilled white wine with a perfumed aftertaste." price="25 gold pieces"/>
              <Card menuItem="Rakmari Rose" description="A sweet rose from the Arabic Rakmari region." price="25 gold pieces"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Drinks;