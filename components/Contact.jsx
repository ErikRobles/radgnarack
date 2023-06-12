import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (values) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      console.log(response);
      if (response.status === 200) {
        console.log("Success");
        reset();
        // add success toast message
        toast.success("Message sent successfully");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-[1240px] m-auto p-4 min-h-[70vh]">
      <h1 className="text-2xl font-bold text-center p-4">Contact</h1>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="max-w-[600px] m-auto"
      >
        <input
          {...register("name", {
            required: { value: true, message: "You must enter your name." },
          })}
          className="border shadow-lg p-3 w-full"
          type="text"
          placeholder="Name"
        />
        <span className="text-red-500 font-bold">
          <ErrorMessage errors={errors} name="name" />
        </span>
        <input
          {...register("email", {
            required: { value: true, message: "You must enter your email." },
            maxLength: { value: 120, message: "Please enter a valid email" },
          })}
          className="border shadow-lg p-3 w-full mt-6"
          type="email"
          placeholder="Email"
        />
        <span className="text-red-500 font-bold">
          <ErrorMessage errors={errors} name="email" />
        </span>
        <input
          {...register("subject", { required: false })}
          className="border shadow-lg p-3 w-full mt-6"
          type="text"
          placeholder="Subject"
        />
        <input
          {...register("phone", {
            required: { value: false },
            maxLength: {
              value: 20,
              message: "Please enter a valid phone number.",
            },
          })}
          className="border shadow-lg p-3 w-full mt-6"
          type="text"
          placeholder="Phone (optional)"
        />
        <span className="text-red-500 font-bold">
          <ErrorMessage errors={errors} name="phone" />
        </span>
        <textarea
          {...register("message", {
            required: { value: true, message: "You must enter a message." },
            maxLength: {
              value: 1000,
              message: "Please enter a message less than 1000 characters.",
            },
          })}
          cols="30"
          rows="10"
          className="border shadow-lg p-3 w-full mt-6"
          placeholder="Message"
        />
        <span className="text-red-500 font-bold">
          <ErrorMessage errors={errors} name="message" />
        </span>
        <button className="rounded-md shadow-lg p-3 w-full bg-[#Ffc000] hover:bg-[#8d6a02] hover:text-white uppercase mt-9 mb-12">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
