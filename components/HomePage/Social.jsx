import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const Social = ({containerStyles, iconStyles}) => {
    const socials = [
        {
            icon: <FaGithub/>,
            path: "https://github.com/btjandra15"
        },
        {
            icon: <FaLinkedinIn/>,
            path: "https://www.linkedin.com/in/btjandra/"
        },
    ]

    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social;
