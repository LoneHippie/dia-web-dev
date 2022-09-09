import { ParsedUrlQuery } from "querystring";

export interface QueryString {
  query: string;
}

interface SinglePostQueryArgs {
  slug: any;
}

export type SinglePostQuery = ({
  slug
}: SinglePostQueryArgs) => string;

export interface Post {
  title: string;
  slug: string;
  postDate: string;
  postContent: string;
  coverImage: {
    url: string;
  };
  preview: string;
  isFeatured: boolean;
}

export interface ContentfulData {
  data: {
    postCollection: {
      posts: Post[];
    };
  };
}

export type GetContentfulData = ({
  query
}: QueryString) => Promise<Post[]>;

export interface StaticPostParams extends ParsedUrlQuery {
  slug: string;
}
