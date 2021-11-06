import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col items-center h-auto justify-between sm:flex-row my-6 mr-6">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="USER" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src="/images/hulu.png"
        alt="test"
        height={70}
        width={140}
      />
    </header>
  );
}

export default Header;
