import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home" description="Welcome to the home page" />

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
