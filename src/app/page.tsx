"use client";

import { InstallPrompt } from "@/components/install-prompt";
import { ResultsTable } from "@/components/results-table";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/providers/app-store-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const results = useAppStore((state) => state.results);
  const router = useRouter();

  return (
    <main className="h-dvh w-screen">
      <div
        className="w-full fixed top-0 left-0 border-b z-20 bg-background"
        style={{
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
        <div className="px-4 py-2">
          <h1 className="font-medium text-center">SepsisCheck</h1>
          <p className="text-sm text-muted-foreground text-center">v0.0.1</p>
        </div>
      </div>

      <div
        style={{
          paddingTop: "calc(env(safe-area-inset-top) + 60px)",
          paddingBottom: "calc(env(safe-area-inset-bottom) + 64px)",
        }}
      >
        <InstallPrompt />

        <div className="py-8">
          <ResultsTable />
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 w-full border-t z-20 bg-background"
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="px-4 py-2">
          <Button asChild>
            <Link href="/new" className="w-full h-12">
              New Check
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
