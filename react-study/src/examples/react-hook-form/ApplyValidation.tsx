import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const ApplyValidation = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <h1>Apply validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 
        지원되는 유효성 검사 리스트
        required, max, max, minLength, maxLength, pattern, validate
      */}
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
      </form>
    </>
  );
};

export default ApplyValidation;
