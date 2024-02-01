import { auth } from "@/lib/auth";
import { signOut } from "next-auth/react";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <button onClick={signOut}>logout</button>
    </div>
  );
}
