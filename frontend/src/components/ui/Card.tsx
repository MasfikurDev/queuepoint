import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "glass", children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "w-full max-w-md rounded-2xl p-8",
                    variant === "glass" && [
                        "bg-slate-900/70 backdrop-blur",
                        "border border-white/10",
                        "shadow-xl",
                    ],
                    variant === "default" &&
                        "bg-slate-900 border border-slate-800",
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
            "text-3xl font-semibold text-white tracking-tight",
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
        className={cn("mt-2 text-sm text-slate-400", className)}
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
        className={cn("mt-6 text-center text-xs text-slate-500", className)}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";
