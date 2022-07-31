import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Service from "./pages/services/Service";
import Flight from "./pages/services/Flight";
import Bus from "./pages/services/Bus";
import Train from "./pages/services/Train";
import Movie from './pages/services/Movies'
import Contact from './pages/contact/Contact'

const CustomRoute=()=>{
  return (
    <>
      <Router>
      <Topbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/service" element={<Service/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/bus" element={<Bus/>} />
          <Route exact path="/train" element={<Train/>} />
          <Route exact path="/airoplane" element={<Flight/>} />
          <Route exact path="/movie" element={<Movie/>} />
        </Routes>
      </Router>
    </>
  )

}
export default CustomRoute;