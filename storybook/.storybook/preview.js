// 전역으로 매개변수를 export하면 모든 스토리에 설정할 수 있다.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // backgrounds: {
  //   values: [
  //     { name: "red", value: "#f00" },
  //     { name: "green", value: "#0f0" },
  //   ],
  // },
};
