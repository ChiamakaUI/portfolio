import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().required("Message is required"),
    
})
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});
const onSubmit = (data) => {
  console.log(data);
}
  return (
    <div className="w-[80%] max-w-screen-2xl mx-auto mt-10">
      <p className="dark:text-white text-3xl font-gabriela text-center font-semibold">
        Contact Me.
      </p>
      <p className="dark:text-white text-base font-gabriela text-center font-semibold my-3">
        Get in touch or send me an email directly on ezembachiamaka@gmail.com
      </p>
      <div className="lg:w-[60%] mx-auto w-full mb-20">
        <form  onSubmit={handleSubmit(onSubmit)} >
          <input
            type="text"
            className="w-full border my-2 p-2 rounded-md bg-white dark:bg-[#020A13] text-base font-gabriela dark:text-white"
            placeholder="Name"
            name="name"
          {...register("name")}
          />
           <p className="font-gabriela font-semibold text-xs text-red-500">
          {errors.name?.message}
        </p>
          <input
            type="email"
            className="w-full border my-2 p-2 rounded-md bg-white dark:bg-[#020A13] text-base font-gabriela dark:text-white"
            placeholder="Email"
            name="email"
          {...register("email")}
          />
           <p className="font-gabriela font-semibold text-xs text-red-500">
          {errors.email?.message}
        </p>
          <textarea
            placeholder="Your message"
            className="w-full border my-2 p-2 rounded-md bg-white dark:bg-[#020A13] text-base font-gabriela dark:text-white"
            rows="8"
            name="message"
          {...register("message")}
          ></textarea>
           <p className="font-gabriela font-semibold text-xs text-red-500">
          {errors.message?.message}
        </p>
          <button className="bg-[#000] text-white dark:bg-white dark:text-[#020A13] py-1.5 px-3 text-base font-gabriela rounded-md font-semibold mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
