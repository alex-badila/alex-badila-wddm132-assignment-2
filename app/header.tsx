import Link from "next/link"

const Header = () => {
  return (
    <div className="navContainer">
      <div className="navLeft">
        <Link href="/">Home</Link>
      </div>
      <div className="navCenter">
        <Link href="/lunch">Lunch</Link>
        <Link href="/dinner">Dinner</Link>
        <Link href="/drinks">Drinks</Link>
      </div>
      <div className="navRight">
        <Link href="/reservation">Reservation</Link>
      </div> 
    </div>
  );
}

export default Header;