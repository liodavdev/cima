import { useEffect, useState } from "react";
import Heading from "../atoms/Heading";

function Listing() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch("/listing.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          if (a.categoria === "venta" && b.categoria === "renta") return -1;
          if (a.categoria === "renta" && b.categoria === "venta") return 1;
          return 0;
        });

        setListing(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching listing:", error);
      });
  }, []);

  return (
    <article className="grid grid-cols-1 grid-rows-[120px_570px_120px] gap-4 p-4">
      <Heading principal="DISPONIBLES" secondary="PROPIEDADES" />
      {listing[0] && (
        <section className="w-full h-full grid grid-cols-2 grid-rows-3 gap-4">
          <div className="bg-gradient-to-r from-transparent via-dark to-red-wine p-[2px]">
            <div className="w-full h-full p-1 bg-light">
              <img
                src={listing[0]?.images[0]}
                alt="house-img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="">
            <img
              src={listing[1]?.images[0]}
              alt="house-img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={listing[2]?.images[0]}
              alt="house-img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-red-wine via-dark to-transparent p-[2px]">
            <div className="w-full h-full p-1 bg-light">
              <img
                src={listing[3]?.images[0]}
                alt="house-img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-transparent via-dark to-red-wine p-[2px]">
            <div className="w-full h-full p-1 bg-light">
              <img
                src={listing[4]?.images[0]}
                alt="house-img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="">
            <img
              src={listing[5]?.images[0]}
              alt="house-img"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}
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
