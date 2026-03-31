function Card(props: any) {

  return (
    <div className="card">
      <h2>{props.menuItem}</h2>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Card;