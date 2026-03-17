'use client';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva('', {
    variants: {
        variant: {
            secondary:
                'bg-background text-foreground border border-gray-300 rounded-lg mx-4 px-6 py-3 hover:bg-hover transition-colors duration-300',
        },
    },
    defaultVariants: {
        variant: 'secondary',
    },
});
type ButtonStylesTypes = VariantProps<typeof buttonStyles>;
type ButtonVariant = ButtonStylesTypes['variant'];

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

export default function Button({
    variant,
    className,
    children,
    ...props
}: ButtonProps) {
    const buttonClassName = buttonStyles({ variant });
    return (
        <button className={`${buttonClassName} ${className}`} {...props}>
            {children}
        </button>
    );
}
