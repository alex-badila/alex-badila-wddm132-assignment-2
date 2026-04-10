function Card(props: any) {

  return (
    <article className="card">
      <h3>{props.menuItem}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </article>
  )
}

export default Card;