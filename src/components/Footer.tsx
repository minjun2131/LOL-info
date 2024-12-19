import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 p-4 mt-8 fixed bottom-0 w-full dark:bg-gray-100
    "
      style={{ boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="container mx-auto text-center text-white text-sm dark:text-black">
        lol-info is not endorsed by Riot Games and does not reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing Riot Games properties. Riot Games and all associated properties
        are trademarks or registered trademarks of Riot Games, Inc.
      </div>
    </footer>
  );
};

export default Footer;
