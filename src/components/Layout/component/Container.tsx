import library from "../../../assets/library.jpg";
export const Container = () => {
  return (
    // <div className="flex bg-neutral-600 text-white h-80 justify-center"></div>
    <div>
      <img src={library} className="w-full h-full" />
    </div>
  );
};
