import { auth } from "@/auth";
import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import { connectMongo } from "@/libs/mongoose";
import User from "@/Models/User";

async function getUser() {
  const session = await auth();
  await connectMongo();

  return await User.findById(session.user.id).populate("boards");
}

export default async function Dashboard() {
  

  const user = await getUser()

  console.log("User", user)
  return (
    <main className="bg-base-200 min-h-screen">
      {/* HEADER */}
      <section className="bg-base-100 ">
        <div className="px-5 py-12 max-w-5xl flex mx-auto">
          <ButtonLogout />
        </div>
      </section>

      <section className="px-5 py-12 max-w-5xl mx-auto">
        {" "}
        <FormNewBoard />
        <div>
          <h1 className="font-extrabold text-xl mb-4">{user.boards.length} Boards</h1>
          <ul className="space-y-4">
            {user.boards.map((board) => {
              return (
                <div key={board._id} className="bg-base-100 p-6 rounded-3xl">
                  {board.name}
                </div>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
