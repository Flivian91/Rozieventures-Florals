import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={"/logo.svg"}
        width={50}
        height={50}
        alt=" Rozieventures Florals modern Logo"
      />
      <span className="text-xl font-semibold hidden sm:inline-block">
        Rozieventures Florals
      </span>
    </Link>
  );
}

export default Logo;
