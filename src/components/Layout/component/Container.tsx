import library from "../../../assets/library.jpg";
export const Container = () => {
  return (
    <>
      <div className="bg-[url('/home/nimasha/Project/library_management_system/src/assets/')]"></div>
      <>
        <div className="flex text-white justify-center"></div>
        <div>
          <img src={library} className="w-full h-full" />
        </div>
      </>
    </>
  );
};
