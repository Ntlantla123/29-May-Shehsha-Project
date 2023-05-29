import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import  Login  from './components/Login';
import { Recipes } from './components/Recipes';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import { Lessons } from './components/Lessons';
import { LiveLessons} from './components/LiveLessons';
import { Pancake } from './components/Pancake';
import  {TopNav}  from './components/TopNav';
import { Landing } from './components/Landing';
import { Recomendations} from './components/Recomendations';
import { ViewIngredients } from './components/ViewIngredients';



function App() {
  const [messages, setMessages] = useState([])
  const [message,setMessage] = useState("");
  const [showNotification,setShowNotification] = useState(true);
  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [isDoneLoading,setIsDoneLoading] = useState("loading");
  const API_KEY = "0d226b2d19b6426dad13000aac1c2c16";
  

  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/recipes' element={<Recipes isDoneLoading={isDoneLoading} setIsDoneLoading={setIsDoneLoading} query={query} setQuery={setQuery} recipes={recipes} setRecipes={setRecipes}/>}></Route>
          <Route path='/Lessons' element={<Lessons />}></Route>      
          <Route path='/Pancake' element={<Pancake />}></Route>   
          <Route path='/TopNav' element={<TopNav />}></Route>
          <Route path='/recomendations' element={<Recomendations />}></Route>
          <Route path='/viewingredients' element={< ViewIngredients />}></Route>
         
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
