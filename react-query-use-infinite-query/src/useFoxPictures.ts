import { useInfiniteQuery, type UseInfiniteQueryResult } from "react-query";
import {
  getFoxPictures,
  type ErrorResponse,
  type GetFoxPicutreResponse,
} from "./api";

const useFoxPictures = (): UseInfiniteQueryResult<
  GetFoxPicutreResponse,
  ErrorResponse
> => {
  return useInfiniteQuery(
    "getFoxPictures",
    ({ pageParam = 1 }) => getFoxPictures({ page: pageParam }),
    {
      getNextPageParam: ({ isLast, nextPage }) =>
        isLast ? undefined : nextPage,
    }
  );
};

export default useFoxPictures;
