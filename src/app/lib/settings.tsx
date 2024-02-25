export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    adrress: Address;
    phone: string;
    website: string;
    company: Company;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    rua: string;
}

export const getAppSettings = (): Promise<{
    theme: string; language: string
    }> => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                language: 'en',
            });
        }, 5000);
    });
}

export const getUserInfo = (): Promise<{
    name: string;
    email: string;
    age: number;
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'John',
                email: 'john@gmail.com',
                age: 2
            });
        }, 1000);
    });
};

export async function getUserByIdAsync(id: string): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json();
    return user
}

export const getUserById = (id: string): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
            {
                id: 1236,
                name: 'Martins',
                username: "Martins john",
                email: "martins@gmail.com",
                phone: "123-456-444",
                website: "rael.info",
                company: {
                    name: "mrt",
                    rua: "79",
                },
                adrress: {
                    street: "R79",
                    suite: "Suite",
                    city: "Paragominas",
                    zipcode: "75903-700",
                    geo: {
                        lat: "15252",
                        lng: "4544"
                    }
                }

            }
            );
        }, 5000);
    })
}