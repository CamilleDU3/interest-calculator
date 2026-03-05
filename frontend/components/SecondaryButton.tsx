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
                bg-background
                text-foreground 
                border 
                border-gray-300
                rounded-lg 
                mx-4
                px-6 py-3 
            "
        >
            {children}
        </Link>
    );
}
