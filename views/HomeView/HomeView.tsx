import type { Post } from '@utils/api/types';
import { Layout } from '@components/utils';
import { HeroTitle } from '@components/typography';
import PostCardFeatured from '@components/cards/PostCardFeatured';

interface Props {
  posts: Post[];
}

const HomeView = ({ posts }: Props) => {
  return (
    <Layout
      HeroTextComponent={() => (
        <HeroTitle 
          h1={"DIA Web Dev"}
          h2={"Web dev, tech & more"}
        />
      )}
    >
     <PostCardFeatured 
      post={posts[0]}
     />
     <p style={{fontSize: "48px"}}>as dasjd askjd asdkj alskdjl aksdlaksjd laksdjl askdj laksdj laskdjalsk djalskd jaslkdj aslkdj aslk djalskdj aslkdj alskdj alsk djalskd jaslkdjaslkd jaslkdj aslkdj aslkdj aslkdh aslkd jaslkdj aslkdj</p>
    </Layout>
  )
}

export default HomeView;