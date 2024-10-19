const BenefitsCard = ({ imgURL, label }) => {
    return (
      <div className="flex flex-col w-[190px] text-center shadow-lg px-[25px] py-[15px] h-[200px] border border-celadon-700 max-container">
        <div className="flex justify-center items-center">
          <img src={imgURL} alt={label} width={130} height={100} className="mb-[10px]"/>
        </div>
        <h3 className="inline-block px-3 py-3 rounded-lg text-dark_moss_green-400 bg-rose-100 font-montserrat font-semibold">
          {label}
        </h3>
      </div>
    );
  };
  
  export default BenefitsCard;
  