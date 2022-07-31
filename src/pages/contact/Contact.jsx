import contact from './contact.css'
// import TwitterIcon from from "@material-ui/icons";
import { Twitter, Facebook, Telegram } from '@material-ui/icons'


const Contact = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="ms-5 mt-3">
                        <h1 className="text-center">Travelopedia</h1>
                        <h4><strong>Address:</strong></h4><p>Anand Vihar Colony Sector 10,Lucknow Uttar Pradesh</p>
                        <h4><strong>Email:</strong></h4><p>travelopedia@info.com</p>
                        <h4><strong>Phone:</strong></h4><p>+91-8804434231</p>
                    </div>





                </div>
                <div className="col-lg-6 col-sm-12">
                    <form className="loginBox ms-5 mt-3">
                        <input placeholder="Name"
                            type="text"
                            required
                            className="loginInput" />
                        <input
                            type="email"
                            required
                            placeholder="Email" className="loginInput" />
                        <input
                            type="number"
                            required
                            placeholder="Mobile Number" className="loginInput" />
                        <textarea
                            type="text"
                            required
                            placeholder="Message..." className="textarea" rows="4" cols="50" />
                        <button type="submit" className=" w-25 loginButton mb-2">Send Message</button>


                    </form>


                </div>
                <div className='text-center mt-5 '>

                   <Twitter   /> 
                    <Facebook />
                    <Telegram />
                    {/* <Google/> */}

                </div>
            </div>

        </>
    )
}
export default Contact;