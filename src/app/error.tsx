"use client";

import Image from "next/image";
import { useEffect } from "react";
import beeSadImage from "./assets/bee_sad.png";
import { FaSync } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed flex inset-0 items-center justify-center z-50">
      <div className="flex items-center space-x-4 dark:bg-gray-100 p-6 rounded-lg shadow-lg">
        <Image
          src={beeSadImage}
          alt="Sad Bee"
          width={48} 
          height={48} 
          className="object-contain"
        />

        <div className="flex items-center">
          <span className="text-xl text-gray-100 dark:text-gray-700">|</span>
        </div>
        <div className="text-center text-xl text-gray-100 dark:text-gray-700">
          소환사님 현재 정보를 가져올 수 없습니다.
        </div>
        <button
          onClick={() => reset()}
          className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <FaSync size={20} />
        </button>
      </div>
    </div>
  );
}
