import { GetContentfulData } from "./types";
import * as queries from "./contentQueries";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const getContentfulData: GetContentfulData = async ({
  query
}) => {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ query })
      }
    );

    const { data } = await res.json();

    return data.postCollection.posts;
  } catch (e) {
    console.error(`Error retreiving contentful query: ${query}`);
  }
};

export default getContentfulData;

export { queries };
