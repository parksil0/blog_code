import React from "react";
import { Path, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";

interface IFormValues {
  "First Name": string;
  Age: number;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// register를 컴포넌트의 ref에 적용시킨 예제
// React.forwardRef를 사용하여 ref를 전달할 수 있다.
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <div>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
));

const Integrating = () => {
  const { handleSubmit, register } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <h1>Integrating an existing form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        <Select label="Age" {...register("Age")} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Integrating;
