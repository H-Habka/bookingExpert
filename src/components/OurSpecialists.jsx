import SpecialistItem from "./SpecialistItem";
const count = 10;

const OurSpecialists = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-[400px] p-4 justify-center ">
      {Array(count)
        .fill()
        .map(() => (
          <SpecialistItem />
        ))}
    </div>
  );
};

export default OurSpecialists;
