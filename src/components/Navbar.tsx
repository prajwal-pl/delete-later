import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import { auth } from "@/auth";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await auth();
  return (
    <div className="p-3 flex border-b light:border-black dark:border-white items-center w-full">
      <Link href="/" className="text-2xl font-bold">
        Name
      </Link>
      <div className="flex text-md items-center justify-end w-full gap-2">
        <ModeToggle />
        {session?.user ? (
          <div className="flex flex-row items-center gap-2">
            {session?.user ? (
              <Link href="/profile">
                <Image
                  className="rounded-full"
                  src={session?.user.image!}
                  alt="profilepic"
                  height={32}
                  width={32}
                />
              </Link>
            ) : (
              <Link href="/profile">Profile</Link>
            )}

            <Link href="/admin">Admin</Link>
          </div>
        ) : null}

        {session?.user ? null : <Link href="/authenticate">Authenticate</Link>}
      </div>
    </div>
  );
};

export default Navbar;
