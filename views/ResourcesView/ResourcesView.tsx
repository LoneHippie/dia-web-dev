import { HeroTitle } from "@components/typography";
import { Layout } from "@components/utils";
import React from "react";

const ResourcesView = () => {
  return (
    <Layout
      HeroTextComponent={() => (
        <HeroTitle h1={"Dev Resources"} h2={"DIA Web Dev"} />
      )}
    >
      <p>RESOURCES</p>
    </Layout>
  );
};

export default ResourcesView;
