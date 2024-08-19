import React from "react";
import Header from "../Header";

export function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="h-screen flex flex-col px-8 justify-between device:px-3">
      <Header />
      <hr />
      <main className="w-full h-80 py-4 flex flex-col gap-7">{ children }</main>
      <footer className="h-12 text-white">
        <h1>Copyright 2024</h1>
      </footer>
    </div>
  )
}