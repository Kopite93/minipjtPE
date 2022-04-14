import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import { useNavigate } from "react-router";

const MainPost = (props) => {
  const navigate = useNavigate();

  const {
    title,
    content,
    like,
    userinfo,
    createdAt,
    modifeidAt,
    url,
    boardId,
    userId,
  } = props;

  return (
    <div
      onClick={() => {
        navigate(`/detail/${boardId}/${userId}`);
      }}
    >
      <Grid
        bor_radius
        shadow
        border={"1px solid slateblue"}
        margin={"30px 10px"}
        height={"630px"}
        width={"365px"}
      >
        <Grid width={"80%"} margin={"10px auto"}>
          {title}
        </Grid>

        <Image
          width={"360px"}
          height={"360px"}
          margin={"0px auto"}
          src={url}
        ></Image>

        <Grid width={"80%"} margin={"10px auto 0 auto"}>
          {userinfo?.nickname}
        </Grid>
        <Grid width={"80%"} margin={"0px auto"} color={"gray"}>
          {createdAt}
        </Grid>
        <Grid
          width={"100%"}
          height={"18%"}
          margin={"20px auto"}
          padding={"20px 0 0 35px"}
          // border={"1px solid black"}
          bg={"#E8F5FF"}
        >
          {content}
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPost;
