import React from "react";
import { Dimensions } from "react-native";
import { PostImage, PostInfo, PostView } from "./Post.style";

export const Post = ({ photo, company, name, body, title }) => {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <PostView>
      {deviceWidth < 745 ? "" : <PostImage source={{ uri: photo + ".png" }} />}
      <PostInfo>Autor: {name}</PostInfo>
      <PostInfo>Company: {company}</PostInfo>
      <PostInfo>Title: {title}</PostInfo>
      <PostInfo>{body}</PostInfo>
    </PostView>
  );
};
