import { auth } from "@/lib/auth";
import { signOut } from "next-auth/react";
import StoreComponent from "@/components/storeComponent/StoreComponent";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <StoreComponent />
      <button className="mt-10 py-3 px-4 bg-green-400 text-white" onClick={signOut}>
        logout
      </button>
    </>
  );
}
