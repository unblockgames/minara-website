import Image from "next/image";

const Tactic = ({ tactic, idx }) => {
  const { image, title, descriptionHtml } = tactic;
  return (
    <div
      className={`flex flex-col items-center  gap-12 w-full h-full ${
        idx === 0 && "border-t border-black"
      } px-28 py-20`}
    >
      <Image src={image} alt="" width={100} height={100} />
      <p className="text-center font-semibold text-2xl">{title}</p>
      <p
        className="flex flex-col w-full gap-4"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      ></p>
      <style jsx>{`
        p {
        }
      `}</style>
    </div>
  );
};

export default Tactic;
