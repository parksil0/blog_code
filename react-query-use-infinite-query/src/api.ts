const CONSTANT = {
  PAGE_SIZE: 10,
  FOX_PICTURE_MAX_NUMBER: 123,
  FOX_URL: "https://randomfox.ca/images",
};

export type Feeds = {
  id: number;
  imageUrl: string;
};

export interface GetFoxPicturesRequese {
  page: number;
  size?: number;
}

export interface GetFoxPicutreResponse {
  feeds: Feeds[];
  isLast: boolean;
  nextPage: number;
}

export interface ErrorResponse {
  message: string;
  status: boolean;
  code: number;
}

export const getFoxPictures = ({
  page,
  size = CONSTANT.PAGE_SIZE,
}: GetFoxPicturesRequese) => {
  return new Promise<GetFoxPicutreResponse>((resolve, reject) => {
    if (page < 0 || size < 0)
      reject({
        message: "올바르지 않은 요청입니다.",
        status: false,
        code: 400,
      });

    const result: Feeds[] = [];

    for (let i = 1; i <= size; i += 1) {
      const index = (page - 1) * size + i;

      if (index > CONSTANT.FOX_PICTURE_MAX_NUMBER) break;
      result.push({
        id: index,
        imageUrl: `${CONSTANT.FOX_URL}/${index}.jpg`,
      });
    }

    setTimeout(() => {
      resolve({
        feeds: result,
        isLast: result.length < size,
        nextPage: page + 1,
      });
    }, 500);
  });
};
