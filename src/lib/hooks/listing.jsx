import { useEffect, useState } from "react";

export const useListing = () => {
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

        setPages(Math.ceil(sortedData.length / 6));

        setListing(sortedData);

        setSlicedListing(sortedData.slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching listing:", error);
      });
  }, []);

  const [listing, setListing] = useState([]);

  const [slicedListing, setSlicedListing] = useState([]);

  const [pages, setPages] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  function prevPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  function nextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, pages));
  }

  useEffect(() => {
    const start = (currentPage - 1) * 6;
    const end = start + 6;
    setSlicedListing(listing.slice(start, end));
  }, [currentPage, listing]);

  return { listing, slicedListing, currentPage, pages, prevPage, nextPage };
};
