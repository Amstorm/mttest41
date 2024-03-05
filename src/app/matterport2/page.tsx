import { Showcase } from "../../components/Showcase";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">Showcase</h1>
      <Showcase />
    </main>
  );
}


