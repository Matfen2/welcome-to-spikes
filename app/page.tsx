import Header from "./components/Header";
import People from "./components/People";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden flex flex-col bg-[#0c0c1c]">
      <Header />
      <div className="flex-grow">
        <People />
      </div>
      <Footer />
    </main>
  );
}
