import { Header, Carousel, About } from "components";

export default function Home() {
  return (
    <div className="bg-[#fffafa]">
      <Header />
      <Carousel />
      <About />
     	<div className="h-96 border-t flex justify-center items-center text-2xl">
     		Home page
     	</div>
    </div>
  );
}
