import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name}) => {
  if(isLoggedIn) {
    return <Link href="/dashboard">Welcome back {name} 
    
    {/* {children} */}
    </Link>;
  } else {
    return <button>Log In</button>
  }
};

export default ButtonLogin;
