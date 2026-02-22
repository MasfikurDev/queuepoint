import { type ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "outline" | "ghost";
    colorScheme?: "primary" | "secondary" | "danger" | "success" | "warning";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    fullWidth?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    animated?: boolean;
    focusRing?: "none" | "subtle" | "ring" | "glow";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            children,
            variant = "solid",
            colorScheme = "primary",
            size = "md",
            rounded = "md",
            fullWidth = false,
            loading = false,
            disabled = false,
            leftIcon,
            rightIcon,
            animated = true,
            focusRing = "subtle", // Default to subtle
            ...props
        },
        ref,
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center font-medium transition-all";
        const animationStyles =
            animated ? "active:scale-[0.97] duration-150" : "";
        const disabledStyles =
            disabled || loading ?
                "opacity-50 pointer-events-none cursor-not-allowed"
            :   "";

        const sizes = {
            xs: "px-2 py-1 text-xs gap-1",
            sm: "px-3 py-1.5 text-sm gap-1.5",
            md: "px-4 py-2.5 text-sm gap-2",
            lg: "px-5 py-3 text-base gap-2",
            xl: "px-6 py-3.5 text-base gap-2.5",
        };

        const roundness = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-lg",
            lg: "rounded-xl",
            full: "rounded-full",
        };

        // Focus ring styles - less distracting options
        const focusStyles = {
            none: "focus:outline-none",
            subtle: "focus:outline-none focus:ring-1 focus:ring-[var(--theme-primary)]/30 focus:ring-offset-1 focus:ring-offset-[var(--theme-bg-start)]",
            ring: "focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]/50 focus:ring-offset-2 focus:ring-offset-[var(--theme-bg-start)]",
            glow: "focus:outline-none focus:shadow-[0_0_0_2px_var(--theme-bg-start),0_0_0_4px_var(--theme-primary)]",
        };

        // Using CSS variables for colors - these will change with theme
        const colorStyles = {
            primary: {
                solid: "bg-[var(--theme-primary)] text-white hover:bg-[var(--theme-primary-hover)]",
                outline: "border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10",
                ghost: "text-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10",
            },
            secondary: {
                solid: "bg-[var(--theme-secondary)] text-white hover:bg-[var(--theme-secondary-hover)]",
                outline: "border-2 border-[var(--theme-secondary)] text-[var(--theme-secondary)] hover:bg-[var(--theme-secondary)]/10",
                ghost: "text-[var(--theme-secondary)] hover:bg-[var(--theme-secondary)]/10",
            },
            danger: {
                solid: "bg-[var(--theme-danger)] text-white hover:bg-[var(--theme-danger)]/90",
                outline: "border-2 border-[var(--theme-danger)]/50 text-[var(--theme-danger)] hover:bg-[var(--theme-danger)]/30 focus:outline-none",
                ghost: "text-[var(--theme-danger)] hover:bg-[var(--theme-danger)]/10",
            },
            success: {
                solid: "bg-[var(--theme-success)] text-white hover:bg-[var(--theme-success)]/90",
                outline: "border-2 border-[var(--theme-success)]/50 text-[var(--theme-success)] hover:bg-[var(--theme-success)]/10",
                ghost: "text-[var(--theme-success)] hover:bg-[var(--theme-success)]/10",
            },
            warning: {
                solid: "bg-[var(--theme-warning)] text-white hover:bg-[var(--theme-warning)]/90",
                outline: "border-2 border-[var(--theme-warning)]/50 text-[var(--theme-warning)] hover:bg-[var(--theme-warning)]/10",
                ghost: "text-[var(--theme-warning)] hover:bg-[var(--theme-warning)]/10",
            },
        };

        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                className={`
                    ${baseStyles}
                    ${animationStyles}
                    ${disabledStyles}
                    ${focusStyles[focusRing]}
                    ${colorStyles[colorScheme][variant]}
                    ${sizes[size]}
                    ${roundness[rounded]}
                    ${fullWidth ? "w-full" : ""}
                    ${className}
                `}
                {...props}
            >
                {loading && (
                    <svg 
                        className="animate-spin h-4 w-4" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {!loading && leftIcon && <span className="inline-flex">{leftIcon}</span>}
                {children}
                {!loading && rightIcon && <span className="inline-flex">{rightIcon}</span>}
            </button>
        );
    },
);

Button.displayName = "Button";