import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative mx-6 md:mx-12 mt-8 mb-4">
      <div className="flex text-[1.4rem] whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            className="first:pl-2 last:pr-24 cursor-pointer duration-100 transform hover:scale-110 hover:text-green-500"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-8 w-1/12" />
    </nav>
  );
}

export default Nav;
