import { Post } from "@utils/api/types";
import { useMemo } from "react";

interface Props {
  posts: Post[];
}

const useHomeView = ({ posts }: Props) => {
  const hasFeaturedPost = useMemo(
    () => !!posts.find((post) => post.isFeatured),
    []
  );

  const featuredPost = useMemo(() => {
    if (hasFeaturedPost) {
      return posts.filter((post) => post.isFeatured)[0];
    } else {
      return posts[0];
    }
  }, [hasFeaturedPost]);

  const recentPosts = useMemo(() => {
    if (hasFeaturedPost) {
      return posts.filter((post) => !post.isFeatured);
    } else {
      return posts.slice(1);
    }
  }, [hasFeaturedPost]);

  return {
    featuredPost,
    recentPosts
  };
};

export default useHomeView;
