<a className="account">Don't have account?<Link className="btn btn-success" to={'/register'}>New User</Link></a>
                    
                    



                    value={password} onChange={e => passwordchange(e.target.value)}


                    <a className="btn btn-danger">Back</a>




                    value={email} onChange={e => emailchange(e.target.value)}




/* Top Nav JSX REact.js 

                    import React,{useRef,useState} from 'react';
                    import {NavLink} from 'react-router-dom';
                    import './TopNav.css';
                    
                    export const TopNav = () => {
                      const navigation = [
                        {name:'Home',href:'/'},
                        {name:'Lessons',href:'/lessons'},
                        {name:'Live Lessons',href:'/liveLessons'},
                        {name:'Ingredients',href:'/ingredient'},
                      ]
                    
                      return (
                        <div className="">
                        <nav className="TopNav">
                            <img className="TopNav_logo" src={"images/shesha_logo.png"} alt=""/>
                            {navigation.map((item)=>(
                              <NavLink key={item.name} to={item.href} className={ ({isActive}) => {return `TopNav_a ${isActive? 'TopNav_a active': ''}`}}>{item.name}</NavLink>
                            ))}
                            <button className="search_icon" type="button"><img src={"images/search_icon.png"} className="logo" alt=""/></button>
                            <a className="">
                              <button  className="logIn" onClick={function(){const a = document.createElement("a");a.href = "";a.click();a.remove();}}>Log In</button>
                            </a>
                        </nav>
                        </div>
                      )
                    }
                    






/* css of TopNav 


@keyframes TopNav {
  from {
    transform: translateX(-200%);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1
  }
}



.TopNav_logo {
    height: 65px
  }
  
  .TopNav_a {
    height: 40px;
    cursor: pointer;
    position: relative;
    bottom: -20px;
    margin-left: 10%;
    font-size: 1.3rem;
    color: black;
    text-decoration: none;
  }
  
  .active {
    height: 40px;
    cursor: pointer;
    position: relative;
    bottom: -20px;
    margin-left: 10%;
    font-size: 1.3rem;
    color: black;
    border-bottom: 4px solid green;
  }
  
  .logIn {
    position: relative;
    bottom: -20px;
    left: -290%;
    background-color: white;
    border: solid black 1.5px;
    font-size: 1.09rem;
  }
  
  .logIn_a {
    width: fit-content;
    height: fit-content;
    background-color: white;
    margin-right: 2%;
  }
  
  /*end of all css for TopNav.js component*/
  
  
  
  
  @media screen and (max-width:412px) {
  
    /*begining of all css for TopNav.js component*/
    .TopNav {
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0px;
      z-index: 1;
      width: 100%;
      border-bottom: solid black 1px;
      background-color: white;
    }
  
    .TopNav_logo {
      height: 65px;
      width: 300px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
  
    .TopNav_a {
      position: relative;
      bottom: -20px;
      margin-left: 2%;
      font-size: 1.1rem;
    }
  
    .search_icon {
      position: relative;
      top: 30px;
      left: 0px;
      background-color: white;
      border: none;
      margin-left: 0px;
    }
  
    .logIn {
      position: relative;
      bottom: -20px;
      background-color: white;
      border: solid black 1.5px;
      font-size: 1.09rem;
    }
  
    .logIn_a {
      width: fit-content;
      height: fit-content;
      background-color: white;
      margin-right: 2%;
    }
  
    /*end of all css for TopNav.js component*/
  }








  {navigation.map((item)=>(
    <NavLink key={item.name} to={item.href} className={ ({isActive}) => {return `TopNav_a ${isActive? 'TopNav_a active': ''}`}}>{item.name}</NavLink>
  ))}






  <style>
            {`
                .liveLessons{
                    position:absolute; top:50%; left:50%;
                    transform:translate(-50%,-50%)
                }   
            `}
        </style>




.btn-group button {
  background-color: #04AA6D; 
  border: 1px solid green; 
  color: white; 
  padding: 10px 24px; 
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}











<button type="button" onClick={()=> navigate('/Login')}>Login</button>






<h1 style={{ position: "relative", translate: "50px 0px", marginTop: "100px", marginBottom: "100px" }}>Popular Recipes</h1>
        <section style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/taco.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/pancake.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/fishAndSalad.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/noodlesDish.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/krisztina-papp.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/soup.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/keesch.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>
          
          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/eggAndSteak.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/giantMuffin.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>
        </section>
      </section>