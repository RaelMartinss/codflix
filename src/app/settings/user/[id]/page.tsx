import { getUserByIdAsync } from "@/app/lib/settings";
import React from "react";
import { notFound } from "next/navigation"

async function User({params}: {params: {id: string}}) {
    const {
        id,
        name,
        username,
        website
    } = await getUserByIdAsync(params.id);

    
    if (!name) {
        notFound();
    }
    
    return (
        <div>
            <h1 className="text-2xl font-bold">User {params.id}</h1>
            <div className="
             border
             border-dashed
             border-red-500
             p-4">
                <p>id: {id}</p>
                <p>Name: {name}</p>
                <p>UserName: {username}</p>
                <p>Website {website}</p>
            </div>
        </div>
    )
}

export default User;