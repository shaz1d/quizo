import Navbar from "@/components/navbar";

export default async function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-xl"></main>
    </>
  );
}
