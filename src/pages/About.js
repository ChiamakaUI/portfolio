
const About = () => {
  return (
    <div className="w-[80%] max-w-screen-2xl mx-auto my-10">
      <p className="dark:text-white text-3xl font-gabriela text-center font-semibold">
        About Me.
      </p>
      <p className="dark:text-white text-lg font-gabriela text-left mt-3">
        Avid Frontend Developer with a knack for converting prototypes and
        mockups into responsive interfaces that enable users to perform goals on
        digital platforms.
      </p>
      <p className="dark:text-white text-lg font-gabriela text-left my-3">
        I am excited about opportunities where I can use my knowledge of
        multiple stacks to bridge the gap between design and the end-users.
      </p>
      <a
        href="https://drive.google.com/file/d/1oFtrpXzfOt-clzdfCK2sij2b31Nq8Cyx/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="border px-4 py-2 text-base font-gabriela dark:text-white rounded-md"
      >
        View Resume
      </a>
    </div>
  );
};

export default About;
