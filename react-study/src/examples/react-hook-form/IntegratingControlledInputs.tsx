import { Checkbox } from "@material-ui/core";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  TextField: string;
  MyCheckbox: boolean;
}

const IntegratingControlledInputs = () => {
  const { control, handleSubmit } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* 
        react-hook-form으로 등록이 되지않은 컴포넌트들과 native html input태그를 감쌀 수 있다.
        그러나, 내부에서 관리가 되는 컴포넌트들은 감싸는 데에 어려움이 있다. 예를들어, React-Select, AntD, MaterialUI같은 UI 라이브러리들이다.
        그래서 간단히 처리할 수 있도록 Controller라는 래퍼(Wrapper) 컴포넌트를 제공한다.
        Controller는 사용자가 자유롭게 등록(register)할 수 있게 함과 동시에 간소화된 프로세스를 제공한다.
      */}
      <h1>Integrating Controlled Inputs</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="MyCheckbox"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default IntegratingControlledInputs;
