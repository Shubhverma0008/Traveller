import login from './login.css'
import Topbar from '../../components/topbar/Topbar';
const Login=()=>{

    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Travelopedia</h3>
              <span className="loginDesc">
                Enjoy the beauty of world.
              </span>
            </div>
            <div className="loginRight" >
              <form className="loginBox">
                <input placeholder="Email" type="email" className="loginInput"  required />
                <input placeholder="Password"  type="password" className="loginInput" required/>
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot Password?</span>
                <a  className="loginRegisterButton"  style={{textDecoration:"none",textAlign:"center",paddingTop:"5px"}} href="/register">
                 Create an account
                </a>
              </form>
            </div>
          </div>
        </div>
      );
}
export default Login;