import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="h-screen text-xl items-center justify-center flex flex-col">
      User Info Page
      <div className="gap-1 w-full my-3 items-center flex justify-center">
        <ul>
          <li>User: {session?.user?.name}</li>
          <li>Email: {session?.user?.email}</li>
          <li>Role:</li>
        </ul>
      </div>
    </div>
  );
}
