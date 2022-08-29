import type { GetStaticProps } from 'next'
import Head from 'next/head'
import getContentfulData from '../api/contentfulQuery';
import { allPostsQuery } from '../api/contentQueries';
import { Post } from '../api/types';
import { Layout } from '../components';
import { HeroTitle } from '../components/Typography';
import { PostData } from '../types/blogTypes'

interface HomeProps {
  posts: Post[];
}

const Home = ({posts}: HomeProps) => {
  console.log({posts})
  return (
    <Layout 
      heroImage='https://images-cdn.brightedge.com/f00000000036389/videos.brightedge.com/Images/b2b-tech-search-insights.jpg'
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