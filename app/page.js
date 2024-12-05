import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import productDemo from "@/public/productDemo.jpeg";

export default function Home() {
  const isLoggedIn = true;
  const name = "Ben";

  const pricingFeaturesList = [
    "Collect Customer Feedback",
    "Unlimited Boards",
    "Admin Dashboard",
    "24/7 Support",
  ];

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 mx-auto max-w-5xl  ">
          <div className="font-bold">CodeFast SAAS</div>
          <div className="space-x-4  max-md:hidden">
            <a className="link" href="#pricing">
              Pricing
            </a>
            <a className="link" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col items-center  lg:flex-row gap-14 lg:items-start">
        <Image
          className="w-96 rounded-xl "
          src={productDemo}
          alt="product demo"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 ">
            Collect customer feedback to build better products
          </h1>
          <p className="opacity-90 mb-10">
            Create a feedback board in minuites, build products that your
            customers will love!
          </p>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>
      {/*  PRICING*/}
      <section id="pricing" className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A Price that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline justify-center">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase font-md opacity-69 text-sm">/month</div>
            </div>{" "}
            <ul className="space-y-2">
              {pricingFeaturesList.map((item) => {
                return (
                  <li className="flex gap-2 items-center" key={item}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="text-green-400 size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "What Do I Get?",
                answer: "Lorem Epsum e peoiLorem Epsum e peoi",
              },
              {
                question: "I have another Question?",
                answer: "Lorem Epsum e peoiLorem Epsum e peoi",
              },
              {
                question: "How Much Is It?",
                answer: "Lorem Epsum e peoiLorem Epsum e peoi",
              },
              {
                question: "How Do I Get It?",
                answer: "Lorem Epsum e peoiLorem Epsum e peoi",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
