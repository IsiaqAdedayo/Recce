import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Reece</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-16 bg-blue-50">
        <Sidebar />

        <div className="py-5 pr-2 lg:pr-4 xl:py-5 xl:px-14 w-full h-full col-span-15">
          <div className="h-full w-full">
            <Header />

            <Profile />

            <Footer />
            
          </div>
        </div>
      </div>
    </div>
  );
}
