import React from "react"; // We don't need useContext here
import Table from "@/app/components/table";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Table />
    </main>
  );
}
