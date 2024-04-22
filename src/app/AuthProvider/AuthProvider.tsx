import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
