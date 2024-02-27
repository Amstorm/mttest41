import { Showcase } from "../../components/Showcase2";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">List Of All Titles</h1>
      <Showcase />
    </main>
  );
}