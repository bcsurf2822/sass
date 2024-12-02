import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "ben";
  return (
    <main className="">
      <h1>Collect customer feedback to build better products</h1>
      <p>
        Create a feedback board in minuites, build products that your customers
        will love!
      </p>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        {/* everthing in between the opening and closing tags is considered children */}
        {/* <div>This is children</div> */}
      {/* </ButtonLogin> */}
    </main>
  );
}
