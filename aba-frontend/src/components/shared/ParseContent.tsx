"use client";
import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import Image from "next/image";

export const ParseContent = ({
  text,
  mainTitleClassName,
  secondaryTitleClassName,
}: {
  text: string;
  mainTitleClassName?: string;
  secondaryTitleClassName?: string;
}) => {
  if (!text) return null;

  const options: HTMLReactParserOptions = {
    replace: (domNode: any) => {
      if (domNode.type === "tag") {
        const Tag = domNode.name as keyof JSX.IntrinsicElements;

        // Handle specific tags
        switch (Tag) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return (
              <Tag className={mainTitleClassName}>
                {domToReact(domNode.children)}
              </Tag>
            );

          case "ul":
            return (
              <ul className="list-disc pl-5 my-4">
                {domToReact(domNode.children, options)}
              </ul>
            );

          case "ol":
            return (
              <ol className="list-decimal pl-5 my-4">
                {domToReact(domNode.children, options)}
              </ol>
            );

          case "li":
            return (
              <li className="mb-2">{domToReact(domNode.children, options)}</li>
            );

          case "p":
            return (
              <p className="my-4">{domToReact(domNode.children, options)}</p>
            );

          case "a":
            return (
              <a
                href={domNode.attribs.href}
                className="text-blue-500 underline hover:text-blue-700"
                target={domNode.attribs.target || "_blank"}
                rel="noopener noreferrer"
              >
                {domToReact(domNode.children, options)}
              </a>
            );

          case "br":
            return <br />;

          case "img":
            // Correctly handle <img> as a self-closing tag with attributes
            return (
              <Image
                width={720}
                height={600}
                src={domNode.attribs.src}
                alt={domNode.attribs.alt || ""}
                className={domNode.attribs.class || ""}
                style={
                  domNode.attribs.style
                    ? domNode.attribs.style
                        .split(";")
                        .reduce((styles: any, rule: string) => {
                          const [key, value] = rule
                            .split(":")
                            .map((str) => str.trim());
                          if (key && value) {
                            styles[
                              key.replace(/-./g, (char) =>
                                char[1].toUpperCase()
                              )
                            ] = value;
                          }
                          return styles;
                        }, {})
                    : undefined
                }
              />
            );
          case "meta":
            return null;
          default:
            return (
              <Tag className={secondaryTitleClassName}>
                {domToReact(domNode.children, options)}
              </Tag>
            );
        }
      }
    },
  };

  return <div>{parse(text, options)}</div>;
};
