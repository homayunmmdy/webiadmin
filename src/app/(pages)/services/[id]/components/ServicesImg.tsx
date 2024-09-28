"use client";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_IMG_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { usePathname } from "next/navigation";

const ServicesImg = () => {
  const pathname = usePathname();
  const id = pathname.slice(10);
  const { data: services, loading } = useFetch(
    SERVICES_IMG_KEY,
    SERVICES_API_URL
  );
  //@ts-ignore
  const filteredData = services?.filter((item) => item.secid == id);

  if(loading) {
    return <div className="hero min-h-screen skeleton mb-5 rounded-xl"></div>
  }
  return (
    <>
      {/* @ts-ignore */}
      {filteredData?.map((service) => (
        <div
          className="hero min-h-screen mb-5 rounded-xl"
          key={service._id}
          style={{
            backgroundImage: `url(${service.imgurl})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{service.name}</h1>
              <p className="mb-5">{service.description.slice(0, 90)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesImg;
