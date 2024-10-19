import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex max-container justify-between items-center max-lg:flex-col gap-10 bg-berkeley-Blue w-full px-[50px] py-[100px]"
      id="contact-us"
    >
      <div className="flex flex-col">
        <h3 className="font-palanquin text-2xl font-bold leading-normal lg:max-w-md text-white-smoke">
          Sign Up For <span className="text-coral-red">Updates </span> & Newsletter
        </h3>
        <p className="text-sm text-white-smoke">Get E-mail updates about our latest shop and special offers</p>
      </div>
      <div className="lg:backdrop:max-w-[40%] w-[650px] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
        <input
          type="text"
          id="email"
          placeholder="subscribe@nike.com"
          className="input bg-transparent"
        />

        <div className="flex max-sm:justify-end max-sm:w-full pb-2 mr-2">
          <Button label="Sign Up" rounded/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

