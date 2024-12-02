import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "ben";
  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 mx-auto max-w-3xl  ">
          <div className="font-bold">CodeFast SAAS</div>
          <div className="space-x-4  max-md:hidden">
            <a className="link">Pricing</a>
            <a className="link">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <p className="opacity-90 mb-10">
          Create a feedback board in minuites, build products that your
          customers will love!
        </p>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        {/* everthing in between the opening and closing tags is considered children */}
        {/* <div>This is children</div> */}
        {/* </ButtonLogin> */}
      </section>
    </main>
  );
}
