import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const releaseDate = new Date(result.release_date || result.first_air_date);
  const formattedReleaseDate = new Intl.DateTimeFormat("en-US").format(
    releaseDate
  );

  return (
    <div
      ref={ref}
      className="p-2  md:p-4 group cursor-pointer duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        alt="Image of movie poster"
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="mt-3 ml-1">
        <p className="line-clamp-2 text-sm">{result.overview}</p>
        <h2 className="mt-2 text-white text-[1.3em] duration-150 ease-in-out group-hover:font-medium">
          {result.title || result.original_title || result.name}
        </h2>
        <p className="flex items-center text-sm opacity-0 group-hover:opacity-100">
          {formattedReleaseDate}
          <ThumbUpIcon className="h-5 mx-2" />{" "}
          {`Audience Score: ${result.vote_average}/10`}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
