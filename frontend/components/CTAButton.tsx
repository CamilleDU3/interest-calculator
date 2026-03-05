import Link from 'next/link';

//TODO: change all components syntax from commonjs to esmodule
//TODO: gather all buttons into a single component with variants (CTA, Secondary, Nav, etc.)
export default function CTAButton({
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
                bg-primary
                text-background
                rounded-lg
                px-4 py-4  
                hover:bg-foreground
                transition-colors duration-300
            "
        >
            {children}
        </Link>
    );
}
