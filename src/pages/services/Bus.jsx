const Bus=()=>{
    return (
        <>
        <div className="login">
            <div className="loginWrapper">
      <div className="loginLeft">
      
      </div>
      <div className="loginRight" >
        <form className="loginBox">
        <h1 className="text-center">Find Bus</h1>
          <input placeholder="Enter From..." type="text" className="loginInput"  required />
          <input placeholder="Enter To..." type="text" className="loginInput"  required />
          <button className="loginButton">Search</button>
         
        </form>
      </div>
    </div>
    </div>
        </>
    )
}
export default Bus;