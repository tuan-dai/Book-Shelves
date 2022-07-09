import './App.css';
import "../node_modules//slick-carousel/slick/slick.css";
import "../node_modules//slick-carousel/slick/slick-theme.css";

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/HomeTemplates/Home/Home';
import BookDetail from './pages/HomeTemplates/BookDetail/BookDetail';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/listBook/book/:id' exact Component={BookDetail} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
