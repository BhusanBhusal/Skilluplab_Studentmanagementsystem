"use client"

import { useEffect, useState } from "react";
import Link from 'next/link';
import { getUsers } from "./loader";

export default function ListUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const users = await getUsers();
            console.log({users});
            if(users && users.length) {
                setUsers(users);
            }
        };
        loadUsers();
    }, []);
    return (
        <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 mb-10 sm:text-5xl">Registered users</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                    <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{user.fullName}</p>
                            <p className="truncate text-sm text-gray-500">{user.email}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </main></div>
    )
}
