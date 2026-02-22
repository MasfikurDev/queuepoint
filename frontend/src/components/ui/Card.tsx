import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants = {
            default:
                "bg-[var(--theme-surface-hover)] border border-[var(--theme-surface-border)] p-6 shadow-md",
            glass: "backdrop-blur border border-[var(--theme-surface-border)] p-6 shadow-xl bg-[var(--theme-surface-hover)/80]",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "w-full max-w-md rounded-2xl",
                    variants[variant],
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Card.displayName = "Card";

export const CardHeader = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-8 text-center", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<
    HTMLHeadingElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn(
            "text-3xl font-semibold tracking-tight text-(--theme-text-primary)",
            className,
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("mt-2 text-sm text-(--theme-text-secondary)", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

export const CardFooter = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "mt-6 text-center text-xs text-(--theme-text-muted)",
            className,
        )}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";
