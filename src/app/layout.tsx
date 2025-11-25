import "@/app/globals.css";
import { AppStoreProvider } from "@/providers/app-store-provider";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "SepsisCheck",
  description: "Mobile paediatric sepsis diagnostics",
  appleWebApp: {
    capable: true,
    title: "SepsisCheck",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppStoreProvider>
          <main className="h-screen w-screen">{children}</main>
        </AppStoreProvider>
      </body>
    </html>
  );
}
