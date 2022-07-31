import { NavLink } from "react-router-dom";
import './services.css'
// const PF=process.env.REACT_APP_PUBLIC_FOLDER;
const Card=({img,name,desc})=>{
    return (
        <div className="card align-items-center" style={{width: "18rem",height:"18rem"}}>
        <img className="card-img-top image" src={`${img}.png`} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{`${name} Booking`}</h5>
          <p className="card-text">{desc}</p>
          
        <NavLink to={`/${img}`}>  <a href="#" className="btn btn-primary">Book</a></NavLink>
        </div>
      </div>
    )

}


const Service=()=>{

    return (
        <>
        <div className="row mt-2">
        <div className="col-lg-6 cardContainer">
       
        <Card
        img="/assets/person/train"
        name='Train'
        desc="Here you can Book tickets,check live location of train and PNR status of ticket"

        />
        

        </div>
        <div className="col-lg-6 cardContainer">
        {/* <NavLink to='/bus'>Bus</NavLink> */}
        <Card
        img="/assets/person/airoplane"
        name='Airoplane'
        desc="Here you can Book flight ticket and search flights "

        />
               
        </div>
        <div className="col-lg-6 cardContainer">
        {/* <NavLink to='/flight'>Flight</NavLink> */}
        <Card
        img="/assets/person/bus"
        desc="Here you can book bus and search for a bus"
        name="Bus"

        />
             
        </div>
        <div className="col-lg-6 cardContainer">
        {/* <NavLink to='/hotel'>Hotel</NavLink> */}
        <Card
        img="/assets/person/movie"
        name="Movie"
        desc="Here you can book movie ticket and get some list of movie"

        />
          
        </div>
     

        </div>

        </>
    )
}
export default Service;