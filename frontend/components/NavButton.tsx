import Link from 'next/link'
export default function NavButton({ children, href }: { children: string; href: string }) {
    return (
        <Link
            href={href}
            className="
                text-xl
                hover:text-secondary
                font-bold 
                text-primary
            "
        >
            {children}
        </Link>
    )

}