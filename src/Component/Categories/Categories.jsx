import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getShoes } from "../../Services/database";
import { appwriteService } from "../../Services/database";
import { useLocation } from "react-router-dom";

const Shoecategory = ({}) => {
  const { category, subcategory, subsubcategory } = useParams();
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShoes(category, subcategory, subsubcategory);
        setShoes(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [category, subcategory, subsubcategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{subcategory.replace(/-/g, " ")}</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {shoes.map((shoe) => (
              <div key={shoe.$id} className="lg:w-1/4 z-0 md:w-1/2 p-4 w-full">
                <Link to={`${location.pathname}/${shoe.$id}`}>
                <Link to={`${location.pathname}/${shoe.$id}`} className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={shoe.name}
                    className="object-cover object-center w-full h-full block"
                    src={shoe.featuredImage ? appwriteService.getFilePreview(shoe.featuredImage) : 'fallback-image-url'}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {shoe.Variety}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {shoe.name}
                  </h2>
                  {shoe.discountPercent > 0 ? (
                    <>
                      <span className="flex">
                        <strike>
                          <p className="mt-1 font-bold">${shoe.price}</p>
                        </strike>
                        <span>
                          &nbsp;{shoe.discountPercent}% <span>Off</span>
                        </span>
                      </span>
                      <p className="mt-1 font-bold underline">
                        ${shoe.discountedPrice}
                      </p>
                    </>
                  ) : (
                    <p className="mt-1 font-bold">${shoe.price}</p>
                  )}
                </div>
                </Link>
              </div>
            )
            )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shoecategory;
