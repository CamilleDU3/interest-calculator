'use client';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva('', {
    variants: {
        variant: {
            secondary:
                'bg-background text-foreground border border-gray-300 rounded-lg mx-4 px-6 py-2 hover:bg-hover transition-colors duration-300 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] active:bg-gray-100',
        },
        state: {
            default: 'shadow-md',
            active: 'shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]',
        },
    },
    defaultVariants: {
        variant: 'secondary',
        state: 'default',
    },
});
type ButtonStylesTypes = VariantProps<typeof buttonStyles>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonStylesTypes;

export default function Button({
    variant,
    className,
    state = 'default',
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${buttonStyles({ variant, state })} ${className != undefined ? className : ''}`}
            {...props}
        >
            {children}
        </button>
    );
}
