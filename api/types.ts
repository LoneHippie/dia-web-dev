export interface QueryString {
    query: string;
}

interface SinglePostQueryArgs {
    slug: string;
}

export type SinglePostQuery = ({slug}: SinglePostQueryArgs) => string;

export interface Post {
    title: string;
    slug: string;
    postDate: string;
    postContent: string;
    coverImage: {
        url: string;
    }
}

export interface ContentfulData {
    data: {
        postCollection: {
            posts: Post[]
        }
    }
}

export type GetContentfulData = ({query}: QueryString) => Promise<Post[]>