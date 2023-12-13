import { useEffect, useState } from "react";
import ServiceCard from "./service-card";

const Services = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window && window !== undefined) {
      if (window.innerWidth > 1024) {
        setVisible(0);
      }
    }
  }, [setVisible]);

  const arr = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 services">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="font-grand-wilson-sans text-3xl sm:text-5xl text-center">
            our services
          </div>
        </div>
        <p className="font-[Arial] text-lg leading-5 text-center">
          <strong>InSculp 3D</strong> stands at the intersection of art and
          technology. With over <strong>20 years of industry expertise</strong>,
          we have transformed the realm of production into a canvas of creative
          possibilities. Our journey is marked by an intricate blend of
          traditional craftsmanship and advanced manufacturing techniques,
          ranging from handcrafting and precision wire cutting to CNC milling,
          robotic arm sculpting, and pioneering 3D printing technologies. At our
          core, we are a team of skilled artisans and technicians, committed to
          turning your visions into tangible masterpieces.
        </p>
      </div>
      <div className="w-full lg:h-[70vh] flex flex-col lg:flex-row overflow-hidden py-4">
        {arr.map((item, index) => (
          <ServiceCard
            key={index}
            hidden={visible === index ? false : true}
            activeCard={() =>
              setVisible((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
