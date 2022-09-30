import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Api } from "../../api/getInfo";
import { Loader } from "../../components/loader/Loader";
import { Post } from "../../components/post/Post";
import { LoaderView, PostsView } from "./Posts.style";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Api.getPosts().then((response) => {
      setPosts(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderView>
          <Loader />
        </LoaderView>
      ) : (
        <ScrollView>
          <PostsView>
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </PostsView>
        </ScrollView>
      )}
    </>
  );
};
