import BuggyButton from "@/app/components/BuggyButton";
import { getUserById, getUserInfo } from "@/app/lib/settings";
import React from "react";

async function User() {
    // const { name, email, age } = await getUserInfo();
    const { 
        id, 
        name,
        username, 
        email,
        adrress,
        phone,
        company
        } = await getUserById('1');
    return (
        <div>
            <h1 className="text-2xl font-bold">USER Page</h1>

            <div className="
             border
             border-dashed
             border-red-500
             p-4">
                
                <p>Nane: {name}</p>
                <p>Email: {email}</p>
                {/* <p>Age: {age}</p> */}
                
            </div>
            <div className="
             border
             border-dashed
             border-red-500
             p-4">
                <p>id: {id}</p>
                <p>Nane: {name}</p>
                <p>UserName: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <div>
                    Company:
                    <div className="ml-8">
                        <p>Name: {company.name}</p>
                        <p>Rua: {company.rua}</p>
                    </div>
                </div>
                <ul>
                    <h5>Adress:</h5>
                    <div className="ml-8">
                        <li>Rua: {adrress.street} </li>
                        <li>City: {adrress.city} </li>
                        <li>Suite: {adrress.suite} </li>
                        <li>Cep: {adrress.zipcode} </li>
                        <li>Geo/latitude: {adrress.geo.lat} </li>
                        <li>Geo/longetude: {adrress.geo.lng} </li>
                    </div>
                </ul>
                
            </div>
            <div className="mt-4">
                <BuggyButton/>
            </div>
        </div>
    )
}

export default User;