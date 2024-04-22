"use client";
import { Button } from "@/components/ui/button";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  const session = useSession();
  const router = useRouter();
  if (!session.data?.user) {
    router.push("/authenticate");
  }
  return (
    <SessionProvider>
      <div className="h-screen text-xl items-center justify-center flex flex-col">
        Profile Info Page
        <div className="gap-1 flex-col w-full my-3 items-center flex justify-center">
          <ul>
            <li>User: {session.data?.user?.name}</li>
            <li>Email: {session.data?.user?.email}</li>
            <li>Role:</li>
          </ul>
          <Button
            onClick={async () => {
              await signOut({ callbackUrl: "/" });
            }}
          >
            Sign out
          </Button>
        </div>
      </div>
    </SessionProvider>
  );
};

export default ProfilePage;
