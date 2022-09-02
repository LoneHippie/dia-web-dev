import type { GetStaticProps } from 'next'
import getContentfulData, { queries } from '@utils/api/contentfulQuery';
import type { Post } from '@utils/api/types';
import { Layout } from '@components/utils';
import { HeroTitle } from '@components/typography';
import PostCardFeatured from '@components/cards/PostCardFeatured';

interface HomeProps {
  posts: Post[];
}

const Home = ({posts}: HomeProps) => {
  return (
    <Layout
      HeroTextComponent={() => (
        <HeroTitle 
          h1={"DIA Web Dev"}
          h2={"Web dev, tech & more"}
        />
      )}
    >
     {/* <PostCardFeatured 
      post={posts[0]}
     /> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const allPosts: Post[] = await getContentfulData({ query: queries.allPostsQuery() })

  return {
    props: {
      posts: allPosts
    }
  }
}

export default Home;