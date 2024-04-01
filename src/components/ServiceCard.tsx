import Image from "next/image";

type ServiceCardProps = {
  serviceInfo: {
    image: string;
    name: string;
    price: number;
    description: string;
    level: string;
  };
};

const ServiceCard = ({ serviceInfo }: ServiceCardProps) => {
  const { image, name, price, description, level } = serviceInfo;
  return (
    <div className="flex flex-col items-center w-56">
      <Image className="m-4" src={image} alt="service" width={60} height={60} />
      <p className="font-semibold">{name}</p>
      <p className="font-semibold mb-12">
        {(price as number).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        })}
        /1hr
      </p>
      <p className="m-2">Level {level}</p>
      <p className="text-center mb-12">{description}</p>
    </div>
  );
};

export default ServiceCard;
