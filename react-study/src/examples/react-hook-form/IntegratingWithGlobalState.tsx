// import React from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

// const IntegratingWithGlobalState = (props) => {
//   const { register, handlerSubmit, setValue } = useForm();

//   // submit data into redux store
//   const onSubmit = (data) => props.updateAction(data);

//   return (
//     // react-hook-form은 리덕스와 같은 상태 관리 라이브러리를 사용하여 store에 저장을 요구하진 없지만 쉽게 통합이 가능하다.
//     <form onSubmit={handlerSubmit(onSubmit)}>
//       <input {...register("firstName")} defaultValue={props.firstName} />
//       <input {...register("lastName")} defaultValue={props.lastName} />
//       <input type="submit" />
//     </form>
//   );
// };

// connect(
//   ({ firstName, lastName }) => ({ firstName, lastName }),
//   updateAction
// )(MyForm);

// export default IntegratingWithGlobalState;

import React from "react";

const IntegratingWithGlobalState = () => {
  return <div></div>;
};

export default IntegratingWithGlobalState;
