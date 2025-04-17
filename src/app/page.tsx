"use client";

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Guardian Angel</h1>
      <p className="text-lg mb-8">Your personal dead man's switch.</p>
      <div className="flex space-x-4">
        <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
        <Button variant="secondary" onClick={() => router.push("/sign-up")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
