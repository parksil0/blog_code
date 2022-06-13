import useFoxPictures from "./useFoxPictures";
import Feed from "./Feed";
import { CustomInfiniteScroll } from "./styles";

const App = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useFoxPictures();

  if (isLoading) return <p key="loading1">Loading...</p>;

  if (isError) return <p>오류가 발생했습니다.</p>;

  return (
    <CustomInfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<p key="loading2">Loading...</p>}
      element="section"
    >
      {data?.pages.map(({ feeds }) =>
        feeds.map(({ id, imageUrl }) => <Feed key={id} imageUrl={imageUrl} />)
      )}
    </CustomInfiniteScroll>
  );
};

export default App;
