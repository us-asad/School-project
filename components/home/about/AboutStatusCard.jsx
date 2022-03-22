import Image from "next/image";

export default function AboutStatusCard({ count, name, image }) {
	return (
    <div className="flex justify-center">
  		<div className="rounded-full bg-white text-black hover:shadow-xl transition duration-500 w-36 h-36 border border-green-500 border-4 flex justify-center items-center flex-col">
  			<b className="text-2xl mb-[8px]">{count}</b>
  			<Image src={image.url} alt={image.alt} width={30} height={30} />
  			<p className="text-xl -mt-[4px] font-semibold">{name}</p>
  		</div>
    </div>
	);
}

