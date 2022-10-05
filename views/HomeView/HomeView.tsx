import type { Post } from "@utils/api/types";
import { Layout } from "@components/utils";
import { HeroTitle } from "@components/typography";
import PostCardFeatured from "@components/cards/PostCardFeatured";
import PostCard from "@components/cards/PostCard";

import classes from "./HomeView.module.scss";
import useHomeView from "./useHomeView";
import { useWindowDimensions } from "@utils/hooks";

interface Props {
  posts: Post[];
}

const HomeView = ({ posts }: Props) => {
  const { featuredPost, recentPosts } = useHomeView({ posts });
  const { screenSize } = useWindowDimensions();

  return (
    <Layout
      HeroTextComponent={() => (
        <HeroTitle
          h1={"DIA Web Dev"}
          h2={"Web dev, tech & more"}
        />
      )}
    >
      <section className={classes.postContent}>
        <section className={classes.postContent__featured}>
          <PostCardFeatured post={featuredPost} />
        </section>
        <section className={classes.postContent__posts}>
          {recentPosts.map((post, index) => (
            <PostCard post={post} key={`post-card-${index}`} />
          ))}
        </section>
      </section>

      <section className={classes.aboutSection}>
        <h4 className={classes.aboutSection__title}>
          Do It All, Do It Yourself
        </h4>

        <div className={classes.aboutSection__logoText}>
          <img src={"/static/logo.svg"} />
          <p className={classes.aboutSection__bodyText}>
            This is some random filler text about waht it means
            to be an independant web developer and how I want to
            give everyone the tools they need to succeed in
            learning how to be a self taught dev as well as
            business advice career advice advice advice etc. This
            is going to be a fun fun project hurray!
          </p>
        </div>

        <p className={classes.aboutSection__bodyText}>
          This is some random filler text about waht it means to
          be an independant web developer and how I want to give
          everyone the tools they need to succeed in learning how
          to be a self taught dev as well as business advice
          career advice advice advice etc. This is going to be a
          fun fun project hurray!
        </p>
      </section>
    </Layout>
  );
};

export default HomeView;
