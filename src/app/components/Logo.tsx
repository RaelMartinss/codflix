import React from "react";
import Image from 'next/image';

export const Logo = () => (
    <Image src="/logowhite.png" alt="logo" width={90} height={90} className="cursor-pointer" />
);
