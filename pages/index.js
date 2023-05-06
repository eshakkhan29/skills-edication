import Banner from "../src/components/home/Banner";
import Header from "../src/components/home/Header";

export default function Home() {
  return (
    <div className="lg:w-[1320px] mx-auto">
      <Header />
      <Banner />
    </div>
  )
}
