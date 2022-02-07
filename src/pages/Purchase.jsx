import {React, useState} from "react";
import * as NBAIcons from "react-nba-logos";
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const MySwal = withReactContent(Swal)




export default function Purchase({ selectedGame, price }) {
    const [firstName, setFirstName]=useState()
    const [lastName, setLastName]=useState()
    const [email, setEmail]=useState()
    const [disabled, setDisabled] = useState(true)

    const obj ={
        email: email,
        fisrtName: firstName,
        lastName :lastName,
        price: price
      }
    function isDisabled(){
        if(email > 0 && 
        firstName > 0 
        && lastName > 0)
        {setDisabled(!disabled)}
    }
  
  return (
    <div>
        Please Fill Your Details To Complete Your Purchase
      <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log( obj);
                alert("Thank You For your Purchase")
                            }}
        
      >
        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input><br />
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input><br />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input><br />
        <h6>Price Is {price}$</h6>
        <input disabled={!email || !firstName || !lastName}  type="submit"/>

      </form>
    </div>
  );
}
