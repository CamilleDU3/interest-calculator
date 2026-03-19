import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva('', {
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
type ButtonStylesTypes = VariantProps<typeof buttonStyles>;
type ButtonVariant = ButtonStylesTypes['variant'];

type ButtonProps = {
    variant?: ButtonVariant;
    href: string;
    children: React.ReactNode;
};
export default function Button({ variant, href, children }: ButtonProps) {
    const buttonClassName = buttonStyles({ variant });
    return (
        <Link className={buttonClassName} href={href}>
            {children}
        </Link>
    );
}
