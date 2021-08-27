import style from './Home.module.css'

import Sidebar from './sidebar/Sidebar'
import Gallery from './gallery/Gallery'

import { useState } from 'react';

function Home() {
  const [category, setCategory] = useState("ALL");


  return (<div className={style.home}>

    <Sidebar setCategory={setCategory}/>
  <Gallery category={category} setCategory={setCategory}/>

  </div>)
}

export default Home;
