import * as React from "react";
import { data } from "./data";
import Card from "../../components/Card";


const Values: React.FC = () => {
  return (
    <section
      id="services"
      className="max-w-default mx-auto w-full px-6 py-20 md:w-4/5 md:px-0"
    >
      <h1 className="mb-8 text-xl font-bold lg:text-2xl">Values</h1>

      <div className="flex flex-wrap justify-between">
        {data.map(({ icon, title }, key) => (
          <Card
            website=""
            variant="service"
            key={key}
            image={icon}
            title={title}
            bgIcon
          />
        ))}
      </div>
    </section>
  );
};

export default Values;
