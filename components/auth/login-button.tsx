"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    console.log("Login Button Clicked");
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return <span> ToDo:</span>;
  }
  return (
    <Button asChild={true} onClick={onClick}>
      {children}
    </Button>
  );
};
