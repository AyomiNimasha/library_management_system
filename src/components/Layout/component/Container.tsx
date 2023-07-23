import library from "../../../assets/library.jpg";
export const Container = () => {
  return (
    <>
      <div></div>
      <>
        <div className="flex text-white justify-center"></div>
        <div>
          <img
            src={library}
            className="bg-cover bg-center md:h-screen w-full -mt-5"
          />
        </div>
      </>
    </>
  );
};
