import { auth } from "@/auth";
import { redirect } from "next/navigation";

// how to protect the routes
export default async function LayoutPrivate({ children }) {
  //session from @auth since this is not a client component
  const session = await auth();

  // if there is no session present redirect the user to the homepage
  if (!session) {
    redirect("/");
  }
  return children;
}
