import React from "react";
import Image from 'next/image';

export const UserProfile = () => (
    <div className="flex items-center space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <Image src="/perfil.png" alt="profile" width={30} height={30} className="cursor-pointer rounded" />
    </div>
);
