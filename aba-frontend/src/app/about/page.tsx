"use client";

import { getAboutPage } from "@/api/aboutApi";
import Contact from "@/components/about/Contact";
import History from "@/components/about/History";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Section from "@/components/layout/Section";
import DynamicContent from "@/components/news/DynamicContent";
import ContentSection from "@/components/shared/ContentSection";
import DocumentView from "@/components/shared/DocumentView";
import Hero from "@/components/shared/Hero";
import Structure from "@/components/shared/Structure";
import { getImageUrl } from "@/lib/utils/imageHelpers";
import { Person } from "@/models/shared/person";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AboutPage = () => {
  const { data } = useQuery({
    queryKey: ["about"],
    queryFn: getAboutPage,
  });

  const [activePerson, setActivePerson] = useState<Person | undefined>(
    data?.structure.people[0] || undefined
  );

  if (!data) return null;

  return (
    <div className={"w-full"}>
      <Hero content={data.hero} />
      <Mission content={data.missions} />
      <Values content={data.values} />
      <div className={"px-5 max-w-7xl mx-auto relative"}>
        <ContentSection content={{ title: "" }}>
          {data.about.map((c) => (
            <DynamicContent item={c} key={c.id} />
          ))}
        </ContentSection>
      </div>
      <div
        id={"how-we-are-different"}
        className={"px-5 max-w-7xl mx-auto relative py-20"}
      >
        <ContentSection content={data.differences} />
      </div>
      <History content={data.history} />
      <Section id={"structure"}>
        <Structure
          content={{
            title: data.structure.title,
            items: data.structure.people.map((p) => ({
              id: p.id,
              title: p.role,
            })),
          }}
          onChange={(p) =>
            setActivePerson(
              data?.structure.people.find((person) => person.id === p.id)
            )
          }
        >
          {activePerson && (
            <div
              className={
                "relative h-[500px] w-auto rounded-2xl overflow-hidden"
              }
            >
              <Image
                src={getImageUrl(activePerson.image.url)}
                alt={activePerson.image.name}
                height={500}
                width={350}
                className={"w-auto h-full object-cover"}
              />
              <div
                className={
                  "absolute bottom-0 left-0 w-full flex sm:flex-col gap-3 justify-between items-center md:items-start backdrop-blur-lg p-3 text-white font-bold"
                }
              >
                <div>
                  <h4 className={"text-base md:text-lg"}>
                    {activePerson.role}
                  </h4>
                  <h3 className={"text-lg md:text-xl"}>
                    {activePerson.fullName}
                  </h3>
                </div>
                <div className={"flex gap-3 items-center"}>
                  {activePerson.links.map((l) => (
                    <div key={l.id}>
                      {l.icon && (
                        <Link href={l.link} target={"_blank"}>
                          <Image
                            src={getImageUrl(l.icon.url)}
                            alt={l.icon.name}
                            width={40}
                            height={40}
                          />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Structure>
      </Section>
      <div id={"documentation"} className={"mb-[120px] mx-auto max-w-7xl px-5"}>
        <ContentSection content={data.legal}>
          <div className={"my-5"}>
            {data.legal.documents.map((d) => (
              <DocumentView doc={d} key={d.id} />
            ))}
          </div>
        </ContentSection>
      </div>
      <Contact content={data.contact} />
    </div>
  );
};

export default AboutPage;
