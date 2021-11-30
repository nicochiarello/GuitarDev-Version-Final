import { BookLoader } from "react-awesome-loaders";
export const Loader = () => {
  return (
    <>
    <div className="w-screen flex justify-center items-center mt-15">

        <BookLoader
            background={"linear-gradient(135deg, rgba(31, 41, 55), rgba(75, 85, 99))"}
            desktopSize={"100px"}
            mobileSize={"80px"}
            textColor={"rgba(75, 85, 99"}
            text={"Cargando"}
        />
    </div>
    </>
  );
};


