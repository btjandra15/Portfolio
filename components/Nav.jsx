"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Resume",
            path: "/resume",
        },
        {
            name: "Work",
            path: "/work",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ]

    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link 
                    href={link.path} 
                    key={index} 
                    className={`${link.path === pathName && "text-accent border-b02 border-acent"} 
                    captailize font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            )
        })}
        </nav>
    )
}

export default Nav
