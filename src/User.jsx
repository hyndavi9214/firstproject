import { useState } from "react";  //bu suing this we can create state variable

function User(Props)
{
    // let name="hyndu";  //this is internal data it is directly created by inside the component
    // function changeName()
    // {
    //     name="suri";
    // }                                                          //this are we can call it as normal variable
    // return(
    //     <div className="user">
    //         <h1>{name}</h1>
    //         <button onClick={changeName}>Click</button>
    //     </div>
    // )

    console.log(Props)
    let [name,betName]=useState("amma")   //setName is use to change the name the name of a variable bescause rreact doesnot understand wwhen we use name
    let [age,setAge]=useState("32")
    function changeName()
    {
        betName(Props.name)
    }

    function changeAge()
    {
        setAge(Props.age)
    }
    function doSomething(planets)
    {
        console.log("hello "+planets)
    }
    return(
        <div className="user">
            <h1>{name}</h1>
            <h2>{age}</h2>
            <button onClick={changeName}>click</button>
            <button onClick={changeAge}>click</button>
             {/* <button onClick={doSomething.blind(this,"solar")}>doSomething</button>
             {/* <button onClick={doSomething.blind(this,"solar")}>doSomething</button>     both dosomething buttons arre same we can call the variables in two ways 
            <button onClick={()=>{doSomething("stars")}}>doSomething</button>  */}
            <button onClick={function(){doSomething("mass")}}>doSomething</button>                    
        </div>
    )
}
export default User;