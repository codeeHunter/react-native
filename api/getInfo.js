import axios from "axios";
import { getAllPosts } from "../utils/getPosts";

export class Api {
  static async getPosts() {
    try {
      const users = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => response);

      const posts = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response);

      const photos = await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response);

      const Posts = [];

      const data = getAllPosts(Posts, users, posts, photos);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
