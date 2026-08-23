import { prisma } from "@repo/db";

export default async function Home() {
  const users = await prisma.user.findFirst();

  return (
    <div className="text-black">
      <h1>Book my show</h1>
      <div>{users?.username}</div>
      <div>{users?.password}</div>
    </div>
  );
}
