"use client";
import ParallaxImage from "@/components/shared/ParralaxImage";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getImageUrl } from "@/lib/utils/imageHelpers";
import { Hero as HeroType } from "@/models/shared/hero";
import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  content,
  isLoading,
}: {
  content?: HeroType;
  isLoading?: boolean;
}) => {
  const withLinks = !!content?.links?.length;

  if (isLoading || !content) {
    return <HeroSkeleton />;
  }

  return (
    <div
      className={`w-full flex justify-start items-start h-[480px] pb-16 md:pb-24 relative`}
    >
      <ParallaxImage
        src={getImageUrl(content.backgroundImage.url)}
        alt={content.backgroundImage.name}
        width={1440}
        height={600}
        className={
          "w-full h-[120%] object-cover object-center absolute left-0 top-0"
        }
      />
      <div
        className={
          "max-w-full overflow-hidden w-full min-h-96 relative md:static mx-auto py-5 flex flex-col gap-3 md:gap-5 items-center z-[1]"
        }
      >
        <Image
          src={"/vectors/transparent-track.svg"}
          alt={"track"}
          width={1200}
          height={800}
          className={
            "object-contain object-bottom absolute -translate-y-1/2 top-0 max-w-none -z-[1]"
          }
        />
        {withLinks && (
          <Carousel
            opts={{
              align: "start",
              startIndex: 0,
            }}
            className="max-w-full"
          >
            <CarouselContent className={"gap-3 px-4"}>
              {content.links.map((l, index, arr) => (
                <CarouselItem
                  key={index}
                  className={`pl-0 basis-1/2 sm:basis-1/3 lg:basis-1/6 ${
                    !!arr.length ? `lg:basis-1/${arr.length}` : ""
                  }`}
                >
                  <div
                    key={l.id}
                    className={`px-3 py-1 lg:px-5 lg:py-3 rounded-full ${
                      index === 0 ? "secondary-gradient" : "bg-transparent"
                    } hover:opacity-90 w-max`}
                  >
                    <Link href={l.link || ""}>
                      <h4
                        className={`text-white text-sm lg:text-base font-semibold text-center w-max`}
                      >
                        {l.title}
                      </h4>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
        <ParseContent
          text={content.title}
          mainTitleClassName={
            "font-extrabold mt-12 text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 uppercase text-center"
          }
          secondaryTitleClassName={
            "border-b-2 border-b-secondary w-fit font-bold text-lg text-white lg:text-2xl capitalize"
          }
        />
        <Image
          src={"/logo/aba-white.svg"}
          alt={"track"}
          width={240}
          height={100}
          className={"w-32 md:w-48 lg:w-64 h-auto object-cover object-center"}
        />
      </div>
    </div>
  );
};

export const ParseContent = ({
  text,
  mainTitleClassName,
  secondaryTitleClassName,
}: {
  text: string;
  mainTitleClassName?: string;
  secondaryTitleClassName?: string;
}) => {
  if (!text) return "";
  const options: HTMLReactParserOptions = {
    replace: (domNode: any) => {
      if (domNode.type === "tag") {
        if (domNode.name.match(/^h[1-6]$/)) {
          const Tag = domNode.name as keyof JSX.IntrinsicElements;
          return (
            <Tag className={mainTitleClassName}>
              {domToReact(domNode.children)}
            </Tag>
          );
        }
        const Tag = domNode.name as keyof JSX.IntrinsicElements;
        return (
          <Tag className={secondaryTitleClassName}>
            {domToReact(domNode.children)}
          </Tag>
        );
      }
    },
  };

  return <div>{parse(text, options)}</div>;
};

export default Hero;
