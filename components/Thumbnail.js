import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className="p-4 group cursor-pointer duration-200 ease-in transform sm:hover:scale-105 lg:p-4 hover:z-50"
    >
      <Image
        alt="Image of movie poster"
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="line-clamp-2">{result.overview}</p>
        <h2 className="mt-2 text-white text-2xl duration-150 ease-in-out group-hover:font-bold">
          {result.title || result.original_title || result.name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {/* {result.media_type && `${result.media_type} •`}{" "} */}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
