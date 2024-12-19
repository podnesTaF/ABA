import { getArticle } from "@/api/newsApi";
import { prefetchQueries } from "@/lib/utils/queryHelpers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

export async function generateMetadata({ params }) {
  const formattedTitle = params.slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedTitle} - Ace Battle Mile`,
    description: `Learn about ${formattedTitle} in the Ace Battle Association.`,
  };
}

const Layout = async ({
  params: { slug },
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) => {
  const qc = await prefetchQueries([
    { key: ["article", slug], fetchFn: () => getArticle(slug) },
  ]);
  return (
    <HydrationBoundary state={dehydrate(qc)}>{children}</HydrationBoundary>
  );
};

export default Layout;
