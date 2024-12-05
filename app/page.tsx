import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export default function Hoem() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-green-400", poppins.className)}>🔐 Auth</h1>

        <p>Simple authentication</p>

        <div>
          <LoginButton>
            <Button>Sign In</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
