import Image from "next/image";

const TeacherCard = ({ teacher }) => {
  const { name, title, phone, country, city, email, languages, image } =
    teacher;
  return (
    <div className="flex flex-col w-80">
      <Image
        className="h-[400px] object-cover"
        width={500}
        height={500}
        src={image}
        alt="teacher"
      />
      <div className="w-full bg-[#C9D6B5] p-10 h-52 text-sm font-bold">
        <p>
          {name}-{languages}
        </p>
        <p>{title}</p>
        <p>Phone: {phone}</p>
        <p>
          {country} - {city}
        </p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
