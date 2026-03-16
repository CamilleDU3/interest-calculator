import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const linkButtonStyles = cva('', {
    variants: {
        variant: {
            cta: 'bg-primary text-background rounded-lg px-4 py-4 hover:bg-foreground transition-colors duration-300',
            nav: 'text-xl hover:text-secondary font-bold text-primary',
            secondary:
                'bg-background text-foreground border border-gray-300 rounded-lg mx-4 px-6 py-3 ',
        },
    },
    defaultVariants: {
        variant: 'secondary',
    },
});
type LinkButtonStylesTypes = VariantProps<typeof linkButtonStyles>;
type LinkButtonVariant = LinkButtonStylesTypes['variant'];

type LinkButtonProps = {
    variant?: LinkButtonVariant;
    href: string;
    children: React.ReactNode;
};
export default function LinkButton({
    variant,
    href,
    children,
}: LinkButtonProps) {
    const linkButtonClassName = linkButtonStyles({ variant });
    return (
        <Link className={linkButtonClassName} href={href}>
            {children}
        </Link>
    );
}
