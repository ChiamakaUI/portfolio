const Home = () => {
  return (
    <div className="w-[80%] md:w-[85%] max-w-screen-2xl mt-10 md:mt-16 lg:mt-20 mx-auto relative lg:w-[88%] lg:flex lg:items-center lg:justify-between">
      <div className="w-full lg:w-[60%]">
        <h2 className="dark:text-white text-3xl md:text-5xl lg:text-6xl font-gabriela font-semibold">
          Hello, I'm Chiamaka Ezemba
        </h2>
        <p className="dark:text-white text-base md:text-lg lg:text-xl font-gabriela my-6">
          A frontend developer specializing in building exceptional user
          interfaces and digital experiences.
        </p>
      </div>
      <div className="w-full lg:w-[40%] rounded-full border-4 dark:border-white border-slate-600">
        <img
          src="Adaeze.jpg"
          alt="avatar"
          className="rounded-full h-[300px] md:h-[620px] lg:h-[500px] w-full"
        />
      </div>
    </div>
  );
};

export default Home;

//mt-36 md:flex md:items-center
