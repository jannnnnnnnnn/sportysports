function CustomCard(props) {
  return (
    <div>
      <div>{props.name}</div>
      <img src={props.icon}/>
    </div>
  )
}

export default CustomCard;