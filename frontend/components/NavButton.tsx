import Link from 'next/link'
export default function NavButton({ children, href }: { children: string; href: string }) {
    return (
        <Link
            href={href}
            className="
                underline 
                [text-underline-offset:4px] 
                shadow-lg 
                hover:shadow 
                font-bold 
                text-blue"
        >
            {children}
        </Link>
    )

}