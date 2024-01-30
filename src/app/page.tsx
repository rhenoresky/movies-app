import { auth } from "@/lib/auth";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return <h1>Hello</h1>;
}
