import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  console.log("ExtraStyle", extraStyle)
  if (isLoggedIn) {
    return (
      <Link
      // using conditional and ternary to make button look different based on props passed
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
        href="/dashboard"
      >
        Welcome Back {name}
        {/* {children} */}
      </Link>
    );
  } else {
    return <button className="btn0">Log In</button>;
  }
};

export default ButtonLogin;
