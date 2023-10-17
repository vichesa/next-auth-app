"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 flex flex-col gap-2 my-6">
        <h1 className="text-6xl mb-2">
          {" "}
          Welcome
          <span className="text-yellow-500"> {session?.user?.name}!</span>
        </h1>
        <div className="font-bold text-center">{session?.user?.email}</div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold cursor-pointer w-40 mx-auto px-6 py-2 mt-16 rounded-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
