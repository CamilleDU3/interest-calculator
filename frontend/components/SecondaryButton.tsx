import Link from 'next/link';

export default function SecondaryButton({
    children,
    href,
}: {
    children: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="
                bg-white 
                border 
                border-gray-300
                rounded-lg 
                mx-4
                px-6 py-3 
                hover:bg-gray-100 
                transition-colors duration-300
            "
        >
            {children}
        </Link>
    );
}
