export const getAllPosts = (Posts, users, posts, photos) => {
  const allPosts = [];

  for (let i = 0; i < users.data.length; i++) {
    for (let j = 0; j < posts.data.length; j++) {
      if (posts.data[i].userId === users.data[j].id) {
        Posts.push({
          id: users.data[i].id,
          company: users.data[i].company.name,
          name: users.data[i].name,
          title: posts.data[j].title,
          body: posts.data[j].body,
        });
        break;
      }
    }
  }
  for (let i = 0; i < Posts.length; i++) {
    for (let j = 0; j < photos.data.length; j++) {
      if (Posts[i].id === photos.data[j].albumId) {
        allPosts.push({ photo: photos.data[j].thumbnailUrl, ...Posts[i] });
        break;
      }
    }
  }

  return allPosts;
};
