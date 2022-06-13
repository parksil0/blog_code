import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Start = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <h1>Examples</h1>
      {/* 1. handleSubmit은 onSubmit을 호출하기 전에 입력값을 검증한다. */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 2. register 함수가 호출됨에 의해 훅에 입력 값을 등록한다 */}
        <input defaultValue="test" {...register("example")} />
        {/* 3. 필수 또는 기타 표준 html 검증 규칙들을 유효성 검사에 포함한다 */}
        <input {...register("exampleRequired", { required: true })} />
        {/* 4. 필드의 유효성 검사가 실패할 때 에러를 리턴할 것이다. */}
        {errors.exampleRequired && <span>이 필드는 필수입니다.</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default Start;
