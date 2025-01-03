"use client";

import MenuItem from "@/components/header/MenuItem";
import { getImageUrl } from "@/lib/utils/imageHelpers";
import { HeaderData } from "@/models/layout/header";
import { Plus } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileNav = ({ data }: { data?: HeaderData }) => {
  const [open, setOpen] = useState(false);
  const p = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [p]);

  return (
    <>
      <div
        className={
          "h-full px-2 items-center bg-secondary relative flex lg:hidden"
        }
        onClick={() => setOpen((prev) => !prev)}
      >
        <Plus
          className={`text-white w-8 h-8 ${
            open ? "rotate-45" : "rotate-0"
          } transition-all duration-200`}
        />
      </div>
      <div
        className={`flex flex-col justify-between bg-white z-10 border-t-secondary overflow-hidden absolute left-0 right-0 top-[60px] lg:hidden ${
          open ? "h-header-screen border-t-4" : "h-0 border-t-0"
        } transition-all duration-150`}
      >
        <div className={"flex flex-col p-3"}>
          {data?.primaryLinks.map((link, i, arr) => (
            <MenuItem link={link} key={link.id} last={i === arr.length - 1} />
          ))}
        </div>
        <div
          className={"flex gap-3 items-center justify-between bg-secondary p-4"}
        >
          <div className={"flex gap-3 items-center"}>
            {data?.socialMedias.map((link) => (
              <a href={link.link} target={"_blank"} key={link.id}>
                <Image
                  src={getImageUrl(link.icon.url)}
                  alt={link.name}
                  height={30}
                  width={30}
                  className={"text-white"}
                />
              </a>
            ))}
          </div>
          {/*<LanguagePicker variant={'light'}/>*/}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
