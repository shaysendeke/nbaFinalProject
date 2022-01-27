import { useState } from "react/cjs/react.development";
import Footer from "../components/footer";
export default function ContactUs() {
  const [firstName, setFirstName]=useState()
  const [lastName, setLastName]=useState()
  const [email, setEmail]=useState()
  const [message, setMessage]=useState()


  return( 
  <div>
      <h2> WE WOULD LIKE TO HEAR FROM YOU <br></br>
      PLEASE LEAVE YOUR MESSAGE HERE</h2>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, message);
        ;
      }}
      >
          <input placeholder="First Name"onChange={(e) => setFirstName(e.target.value)} ></input><br />
          <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input><br />
          <input placeholder="email"onChange={(e) => setEmail(e.target.value)}></input><br /><br />
          <textarea rows="25" cols="50" placeholder="message" onChange={(e) => setMessage(e.target.value)}/><br />
          <input type="submit"/>
<Footer/>
      </form>

  </div>)
}
