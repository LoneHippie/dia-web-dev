import type { GetStaticProps } from 'next'
import Head from 'next/head'
import getContentfulData from '../api/contentfulQuery';
import { allPostsQuery } from '../api/contentQueries';
import { Post } from '../api/types';
import { Layout } from '../components';
import { HeroTitle } from '../components/Typography';

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
      <p>asdjkhask djaskd jahskdjhaskdj ahskdjaksdjhaskd jaskdj askdjhas kjd asd</p>
      <p>asdjkhask djaskd jahskdjhaskdj ahskdjaksdjhaskd jaskdj askdjhas kjd asd</p>
      <p>asdjkhask djaskd jahskdjhaskdj ahskdjaksdjhaskd jaskdj askdjhas kjd asd</p>
      <p>asdjkhask djaskd jahskdjhaskdj ahskdjaksdjhaskd jaskdj askdjhas kjd asd</p>
      <p>asdjkhask djaskd jahskdjhaskdj ahskdjaksdjhaskd jaskdj askdjhas kjd asd</p>
      <p>asdjkhask djaskd jahskdjhaskdj ahskdjaksdjhaskd jaskdj askdjhas kjd asd</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const allPosts: Post[] = await getContentfulData({ query: allPostsQuery() })

  return {
    props: {
      posts: allPosts
    }
  }
}

export default Home;