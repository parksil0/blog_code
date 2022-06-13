import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select/";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const IntegratingUILibrary = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Integrating with UI libraries</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1. 일반 html 태그 사용 시 */}
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        {/* 2. UI 라이브러리 사용 시 */}
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default IntegratingUILibrary;
