import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
}

const HandleErrors = () => {
  const {
    register,
    formState: { errors }, // 1.
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <>
      {/*  
        react-hook-form은 form태그에서의 에러를 errors객체를 통해 제공한다.
        errors의 유형은 유효성 검사 제약을 받으면 리턴된다.
      */}
      <h1>Handle errors</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} />
        {/* 2. */}
        {errors.firstName && "First name is required"}
        <input {...register("lastName", { required: true })} />
        {/* 3. */}
        {errors.lastName && "Last name is required"}
        <input type="submit" />
      </form>
    </>
  );
};

export default HandleErrors;
