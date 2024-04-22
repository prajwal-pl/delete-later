import { Dashboard } from "@/components/ui/dashboard";
import React from "react";

type Props = {};

const AuthenticatePage = (props: Props) => {
  return (
    <div className="flex w-full items-center h-screen mx-auto justify-center">
      <Dashboard />
    </div>
  );
};

export default AuthenticatePage;
