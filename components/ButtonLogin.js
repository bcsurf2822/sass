"use client";
import Link from "next/link";
// pulling from "next-auth" package to prevent API key from being exposed
import { signIn } from "next-auth/react";

const ButtonLogin = ({ session, extraStyle }) => {
  const dashURL = "/dashboard"

  if (session) {
    return (
      <Link
        // using conditional and ternary to make button look different based on props passed
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
        href={dashURL}
      >
        Welcome back {session.user.name || "user"}
        {/* {children} */}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        // callbackURL is the place that we will go back to after we are done
        signIn(undefined, { callbackUrl: 
         dashURL});
      }}
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
    >
      Get Started
    </button>
  );
};

export default ButtonLogin;
