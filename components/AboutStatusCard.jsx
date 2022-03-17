import Image from "next/image";
import { useState,  useEffect } from "react";

export default function AboutStatusCard({ count: number, name, image }) {
	const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const duration = 2;

    const end = parseInt(number.substring(0,3))

    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 10;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);
  }, [number]);

	return (
		<div className="rounded-full hover:scale-105 hover:shadow-xl transition duration-500 w-36 h-36 border border-green-500 border-4 flex justify-center items-center flex-col">
			<b className="text-2xl mb-[8px]">{count}</b>
			<Image src={image.url} alt={image.alt} width={30} height={30} />
			<p className="text-xl -mt-[4px] font-semibold">{name}</p>
		</div>
	);
}

