import style from './Gallery.module.css'
import Card from './card/Card'
import CARDS from './cards.js'

function Gallery(props) {

  let cards = CARDS;
  let items = []

  for (let card of cards) {
    if (props.category === "ALL" || card.tags.includes(props.category)) {
      items.push(<Card categories={card.tags} setCategory={props.setCategory} title={card.title} key={card.title}></Card>)
    }

  }
  return (<div className={style.gallery}>
    {items}
  </div>);
}

export default Gallery;
