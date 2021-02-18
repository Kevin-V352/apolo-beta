/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import {
  CardInfo,
  CardTitle,
  CardImage,
  CardSubtitle,
  LinkContainer,
  CardContainer
} from "./result-letter-elements";

/* <---Interfaces---> */
import { Song } from "../../shared/interfaces/global-interfaces";

/* <---Props interface---> */
interface RLProps {
  song: Song;
}

const ResultLetter: FC<RLProps> = ({ song }: RLProps): JSX.Element => {
  return (
    <LinkContainer to={`/track/${song.id}`}>
      <CardContainer>
        <CardImage src={song.album.images[1].url} />
        <CardInfo>
          <CardTitle>{song.name}</CardTitle>
          <CardSubtitle>{song.artists[0].name}</CardSubtitle>
        </CardInfo>
      </CardContainer>
    </LinkContainer>
  );
};

export default ResultLetter;
