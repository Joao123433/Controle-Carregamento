import React from "react";
import Header from "../Header";

export function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="h-screen flex flex-col px-8">
      <Header />
      <main className="w-full">{ children }</main>
    </div>
  )
}