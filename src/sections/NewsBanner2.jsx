import Button from "../components/Button";

const NewsBanner2 = () => {
  return (
    <div className="flex-col flex w-full relative max-sm:hidden">
      <div className="flex items-center justify-between">
        <div className=" flex  flex-col w-full h-[50vh] bg-sm-b2 bg-cover bg-center mx-3 justify-center px-7 max-sm:h-[40vh]
         max-sm:leading-none">
          <h4 className="font-palanquin text-xl font-semibold text-white-smoke max-sm:text-sm">
            Crazy deals
          </h4>
          <h2 className="font-palanquin text-3xl font-bold text-cyan-100 max-sm:text-2xl">
            BUY THREE GET ONE FREE
          </h2>
          <span className="text-white-smoke">
            The best classic dress is on sale at Uneviva
          </span>
          <Button label="Learn More" bgcolor white />
        </div>

        <div className=" flex  flex-col w-full h-[50vh] bg-sm-b1 bg-cover bg-center mx-3 justify-center px-7 max-sm:h-[40vh]
         max-sm:leading-none">
          
          <h2 className="font-palanquin text-3xl font-bold text-bittersweet max-sm:text-2xl">
            Get Quality Products
          </h2>
          <span className="text-gray-800">
            The best classic dress is on sale at Uneviva
          </span>
          <Button label="Learn More" bgcolor />
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-col w-full bg-sm-b4 bg-cover bg-center mx-3 border border-white-smoke justify-center px-7 h-[40vh]">
          <h2 className="font-palanquin text-3xl font-bold text-mint-400">
            SEASONAL SALES
          </h2>
          <span className="text-red-500 font-bold">
            Get 70% Off from the seasonal sale
          </span>
        </div>
        <div className="flex flex-col w-full bg-sm-b3 bg-cover bg-center mx-3 border border-white-smoke justify-center px-7 h-[40vh]">
          <h2 className="font-palanquin text-2xl font-bold text-raisin_black-600">
            NEW SUMMER COLLECTION
          </h2>
          <span className="font-bold text-rose-700">
            Spring/Summer 2024
          </span>
        </div>
        <div className="flex flex-col w-full bg-sm-b5 bg-cover bg-center mx-3 border border-white-smoke justify-center px-7 h-[40vh]">
          <h2 className="font-palanquin text-3xl font-bold text-teal-600">
            TRENDY TEES
          </h2>
          <span className="text-rose-700 font-bold">
            New Trendy Prints
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner2;
