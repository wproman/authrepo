import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BackButton } from "./backButton";
import { Header } from "./header";

interface CardWrapperProps {
  children: React.ReactNode;
  isSocial?: boolean;
  backButtonLabel: string;
  backButtonHref: string;
  headerLabel: string;
}
export const CardWrapper = ({
  children,
  isSocial,
  backButtonHref,
  backButtonLabel,
  headerLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {isSocial && <CardFooter>{/* <Social /> */}</CardFooter>}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
