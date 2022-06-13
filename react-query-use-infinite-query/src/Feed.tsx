import { ChangeEvent, useState } from "react";
import { Icon } from "@iconify/react";
import { ButtonWrapper, IconWrapper, Input, Label, Wrapper } from "./styles";

interface Props {
  imageUrl: string;
  isChecked?: boolean;
}

const Feed = ({ imageUrl, isChecked }: Props) => {
  const [checked, setChecked] = useState(Boolean(isChecked));

  const handleChangeHeartIcon = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(Boolean(e.target.checked));
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <IconWrapper>
          <Label checked={checked}>
            <Input
              type="checkbox"
              checked={checked}
              onChange={handleChangeHeartIcon}
            />
            <Icon icon="ci:heart-fill" width={25} height={25} />
          </Label>
        </IconWrapper>
      </ButtonWrapper>
      <img src={imageUrl} width={460} height={460} alt="fox" />
    </Wrapper>
  );
};

export default Feed;
