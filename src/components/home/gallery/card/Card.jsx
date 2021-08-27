import style from './Card.module.css'
import Item from '../../sidebar/item/Item'
import {Link} from "react-router-dom";


function Card(props) {
  let items = []

  for (let category of props.categories) {
    items.push(<Item category={category} setCategory={props.setCategory} key={category}>{category}</Item>)
  }

  return (<div className={style.card}>
<Link to={props.title}>
  <div className={style.graphics}>

  </div>


    </Link>
    <div className={style.tags}>
      {items}
    </div>


  </div>);
}

export default Card;
