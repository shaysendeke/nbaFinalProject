import Footer from "../components/footer";
export default function ContactUs() {
  return( 
  <div>
      <h2> WE WOULD LIKE TO HEAR FROM YOU <br></br>
      PLEASE LEAVE YOUR MESSAGE HERE</h2>
      <form>
          <input placeholder="first Name"></input><br />
          <input placeholder="last Name"></input><br />
          <input placeholder="email"></input><br />
          <textarea rows="25" cols="50" placeholder="message"/>  <br />
          <input type="submit" />
<Footer/>
      </form>

  </div>)
}
