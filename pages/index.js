import HeaderView from "@/domains/header/header.view";

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex flex-col justify-start items-center bg-red-500">
        <section className="w-full">
            <HeaderView />
        </section>
    </main>
  );
}
