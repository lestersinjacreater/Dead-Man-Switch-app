"use client";

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {signOut} from "firebase/auth";
import {auth} from "@/lib/firebase";
import {useEffect} from "react";

export default function Dashboard() {
  const router = useRouter();

  // useEffect to redirect if not authenticated
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/sign-in");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/sign-in"); // Redirect to sign-in page after sign out
    } catch (error: any) {
      console.error("Sign out failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-8">Welcome to your Guardian Angel dashboard.</p>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}

