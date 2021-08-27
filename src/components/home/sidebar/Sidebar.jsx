import style from './Sidebar.module.css'
import Item from './item/Item'
import CATEGORIES from './categories.js'

function Sidebar(props){
  let categories = CATEGORIES;
  let items = []

  for (let category of categories){
    items.push(<Item category={category} setCategory={props.setCategory} key={category}>{category}</Item>)
  }
  return(<div className={style.sidebar}>
    {items}
  </div>)
}

export default Sidebar;
