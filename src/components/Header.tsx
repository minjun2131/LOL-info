import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <nav className="text-white container mx-auto flex justify-around">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
      </nav>
    </header>
  );
};

export default Header;
