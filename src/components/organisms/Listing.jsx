import { useState } from "react";
import { useListing } from "../../lib/hooks/listing";
import Heading from "../atoms/Heading";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import cima_logo from "/src/assets/cima_light_bg.png";

function ImageItem({ src }) {
  const [loaded, setLoaded] = useState(false);

  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && !error && (
        <div
          className="absolute inset-0 animate-pulse blur-sm"
          style={{
            backgroundImage: `url("${cima_logo}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      )}
      <img
        loading="lazy"
        src={error || !src ? cima_logo : src}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        alt="house-image"
      />
    </div>
  );
}

function Listing() {
  const { slicedListing, pages, currentPage, prevPage, nextPage } =
    useListing();

  return (
    <article className="grid grid-cols-1 grid-rows-[120px_500px_20px_80px] gap-8 p-4">
      <Heading principal="DISPONIBLES" secondary="PROPIEDADES" />
      <>
        <section className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="bg-gradient-to-r from-transparent via-dark to-red-wine p-[2px]">
            <div className=" w-full h-full p-1 bg-light">
              <ImageItem src={slicedListing[0]?.images[0]} />
            </div>
          </div>
          <div className="">
            <ImageItem src={slicedListing[1]?.images[0]} />
          </div>
          <div className="">
            <ImageItem src={slicedListing[2]?.images[0]} />
          </div>
          <div className="bg-gradient-to-r from-red-wine via-dark to-transparent p-[2px]">
            <div className=" w-full h-full p-1 bg-light">
              <ImageItem src={slicedListing[3]?.images[0]} />
            </div>
          </div>
          <div className="bg-gradient-to-r from-transparent via-dark to-red-wine p-[2px]">
            <div className=" w-full h-full p-1 bg-light">
              <ImageItem src={slicedListing[4]?.images[0]} />
            </div>
          </div>
          <div className="">
            <ImageItem src={slicedListing[5]?.images[0]} />
          </div>
        </section>
        <div className="flex justify-center items-center gap-10 text-red-wine">
          <button disabled={currentPage === 1} onClick={prevPage}>
            <SkipPreviousIcon fontSize="medium" />
          </button>
          <p>
            {currentPage} / {pages}
          </p>
          <button disabled={currentPage === pages} onClick={nextPage}>
            <SkipNextIcon fontSize="medium" />
          </button>
        </div>
      </>
      <footer className="flex items-center">
        <p className="text-[10px]">
          Esta información es proporcionada por el propietario de este sitio
          web. La exactitud de esta información se considera confiable pero no
          esta garantizada y debe verificarse de forma independiente mediante
          inspección personal y/o con los profecionales adecuuados
        </p>
      </footer>
    </article>
  );
}

export default Listing;
