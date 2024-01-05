// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product';
import User from './User';
import Country from './Country';
import { useState } from 'react';

function App() 
{
  let [isLogin,setLogin]=useState(false)  //here true is a value


//   //how to use data to built components? or buliding of ui
   let [countries,setCountries]=useState(
     [
       {name:"India",capital:"newdelhi"},
       {name:"usa",capital:"Newyork"}
     ]
   )

   function loadnewcountries()
   {
     setCountries(
       [
        {name:"USA",capital:"Washington"},
         {name:"Srilanka",capital:"Colombo"}
       ]
     )
   }
 //countries it is an array of object eventhough it is a statevariable

  return (
    <div>
      <h1>Main component</h1>
      {
        isLogin==true? (<h1>Welcome user</h1>):(<h1>you are not logges in</h1>)  //it is a terinary operator by defalut it will the elements
      }




       <button onClick={loadnewcountries}>Load New Countries</button> 
      {/* <Product name="Iphone" price="123" spec={{suri:"hii"}} cater={["hyndu"]}/>
      <Product name="Laptop" price="908" spec={{suri:"hello"}} /> */}
      {/* <Product /> */}
      {/* <User name="suri" age="22"/>
      <User name="nan" age="24" /> */}
      {/* <Country name={countries[0].name} captial={countries[0].captial} /> */}
      {
        // countries.map((country)=>{
        //   return (
        //     <Country name={country.name} captial={country.capital}/>
        // )
        // })
        [
        <Country name={countries[0].name} capital={countries[0].capital} />,
        <Country name={countries[1].name} capital={countries[1].capital} />
        ]
        //we can pass the elements by array list above example
      }
    </div>
  
  )
}

export default App;
