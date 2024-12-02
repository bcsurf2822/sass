import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name}) => {
  if(isLoggedIn) {
    return <Link className="btn btn-primary" href="/dashboard">Welcome back {name} 
    
    {/* {children} */}
    </Link>;
  } else {
    return <button className="btn0">Log In</button>
  }
};

export default ButtonLogin;
