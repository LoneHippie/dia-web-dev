import getContentfulData, { queries } from "@utils/api/contentfulQuery";
import { Post } from "@utils/api/types";
import { GetStaticProps } from "next";
import { HomeView } from "views";

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => <HomeView posts={posts} />;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: Post[] = await getContentfulData({
    query: queries.allPostsQuery()
  });

  return {
    props: {
      posts: allPosts
    }
  };
};

export default Home;
