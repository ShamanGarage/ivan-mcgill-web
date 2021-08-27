import style from './Item.module.css'

function Item(props){

  function handleClick(){
    props.setCategory(props.category);
  }

  return(<div className={style.item} onClick={handleClick}>

      {props.children}
      </div>)
}

export default Item;
