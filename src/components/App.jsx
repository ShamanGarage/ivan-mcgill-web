import style from './App.module.css';
import {Switch, Route} from "react-router-dom";

import Header from './header/Header';
import Home from './home/Home'

function App() {
  return (< div className = {
    style.app
  } > <Header/>

  <div className={style.content}>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        about
      </Route>
    </Switch>

  </div> < /div>
  );
}

export default App;
