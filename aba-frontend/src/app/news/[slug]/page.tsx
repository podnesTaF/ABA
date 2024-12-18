"use client";

import { getArticle } from "@/api/newsApi";
import DynamicContent from "@/components/news/DynamicContent";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { getImageUrl } from "@/lib/utils/imageHelpers";
import { cutString } from "@/lib/utils/strHelpers";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const ArticlePage = ({ params: { slug } }: { params: { slug: string } }) => {
  const { data } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
    retryDelay: 10000,
  });

  return (
    <div className={"py-6 lg:py-12 max-w-[1440px] mx-auto px-4"}>
      <div className={"flex flex-col gap-12 lg:flex-row"}>
        {data ? (
          <div className={"h-fit lg:sticky lg:top-20"}>
            <Breadcrumb className={"mb-6 lg:mb-8"}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/news">News</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{cutString(data.title, 40)}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className={"text-2xl xl:text-4xl font-bold my-2 lg:my-4"}>
              {data.title}
            </h1>
            <div className="flex gap-4">
              {data.newsCategories.map((c) => (
                <Badge className={"rounded-full"} key={c.id}>
                  {c.name}
                </Badge>
              ))}
            </div>
          </div>
        ) : (
          <Skeleton className={"flex-1 h-12"} />
        )}
        <div className={"w-full max-w-3xl flex flex-col gap-12"}>
          {data ? (
            <>
              <Image
                src={getImageUrl(data.previewImage.url)}
                alt={data.previewImage.name}
                width={780}
                height={500}
                className={"w-full h-auto object-contain"}
              />
              {data.content.map((c) => (
                <DynamicContent item={c} key={c.id} />
              ))}
            </>
          ) : (
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className={"w-full h-96"} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
