import type { Post } from "@utils/api/types";
import { Layout } from "@components/utils";
import { HeroTitle } from "@components/typography";
import PostCardFeatured from "@components/cards/PostCardFeatured";
import PostCard from "@components/cards/PostCard";

import classes from "./HomeView.module.scss";
import useHomeView from "./useHomeView";
import { useWindowDimensions } from "@utils/hooks";
import { ScreenSize } from "@utils/hooks/useWindowDimensions";

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
            <PostCard
              isHeaderClashing={
                screenSize !== ScreenSize.mobile && index === 0
              }
              post={post}
              key={`post-card-${index}`}
            />
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
            Modern web development can be a tricky topic to
            approach. Where should you start? Which language
            should you learn first? Should you learn React? What
            IS React? Is it time to start learning a framework?
            What is a framework and why is that important? If
            you're new to web development &#8212; or still
            learning &#8212; you're probably familiar with these
            questions, and it's not mystery why: web development
            has never been as complex as it is today. On the
            upside, the amount of helpful resources has never
            been as great as it is now.
          </p>
        </div>

        <p className={classes.aboutSection__bodyText}>
          At DIA Web Dev the motto is "Do It All, Do It
          Yourself", and you should believe that wholeheartedly,
          because with the power of modern resources, hard work
          and dedication, anyone really can do it all. This
          site's aims to help anyone who's interested in web
          development &#8212; whether for a career or personal
          projects &#8212; along their personal journey to learn
          all about producing clean code, beautiful websites and
          complex applications.
        </p>
      </section>
    </Layout>
  );
};

export default HomeView;
