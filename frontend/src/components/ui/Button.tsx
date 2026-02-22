import { type ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Appearance
    variant?: "solid" | "outline" | "ghost";
    colorScheme?: "primary" | "secondary" | "danger" | "success" | "warning";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    fullWidth?: boolean;

    // States
    loading?: boolean;

    // Icons
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;

    // Animation
    animated?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            children,

            // Appearance
            variant = "solid",
            colorScheme = "primary", // Default is primary
            size = "md",
            rounded = "md",
            fullWidth = false,

            // States
            loading = false,
            disabled = false,

            // Icons
            leftIcon,
            rightIcon,

            // Animation
            animated = true,

            ...props
        },
        ref,
    ) => {
        // Base styles
        const baseStyles =
            "inline-flex items-center justify-center font-medium transition-all";

        // Animation styles
        const animationStyles =
            animated ? "active:scale-[0.97] duration-150" : "";

        // Disabled styles
        const disabledStyles =
            disabled || loading ?
                "opacity-50 pointer-events-none cursor-not-allowed"
            :   "";

        // Size styles
        const sizes = {
            xs: "px-2 py-1 text-xs gap-1",
            sm: "px-3 py-1.5 text-sm gap-1.5",
            md: "px-4 py-2.5 text-sm gap-2",
            lg: "px-5 py-3 text-base gap-2",
            xl: "px-6 py-3.5 text-base gap-2.5",
        };

        // Roundness styles
        const roundness = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-lg",
            lg: "rounded-xl",
            full: "rounded-full",
        };

        // Color schemes (primary is first)
        const colorStyles = {
            primary: {
                solid: "bg-primary text-white hover:bg-primary-hover focus:ring-2 focus:ring-primary/50",
                outline:
                    "border-2 border-primary text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary/50",
                ghost: "text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary/50",
            },
            secondary: {
                solid: "bg-slate-700 text-white hover:bg-slate-600 focus:ring-2 focus:ring-slate-500/50",
                outline:
                    "border-2 border-slate-600 text-slate-300 hover:bg-slate-800 focus:ring-2 focus:ring-slate-500/50",
                ghost: "text-slate-300 hover:bg-slate-800 focus:ring-2 focus:ring-slate-500/50",
            },
            danger: {
                solid: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500/50",
                outline:
                    "border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 focus:ring-2 focus:ring-red-500/50",
                ghost: "text-red-400 hover:bg-red-500/10 focus:ring-2 focus:ring-red-500/50",
            },
            success: {
                solid: "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500/50",
                outline:
                    "border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 focus:ring-2 focus:ring-green-500/50",
                ghost: "text-green-400 hover:bg-green-500/10 focus:ring-2 focus:ring-green-500/50",
            },
            warning: {
                solid: "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500/50",
                outline:
                    "border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500/50",
                ghost: "text-yellow-400 hover:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500/50",
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
          ${colorStyles[colorScheme][variant]}
          ${sizes[size]}
          ${roundness[rounded]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
                {...props}
            >
                {/* Loading Spinner */}
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

                {/* Left Icon */}
                {!loading && leftIcon && (
                    <span className="inline-flex">{leftIcon}</span>
                )}

                {/* Children */}
                {children}

                {/* Right Icon */}
                {!loading && rightIcon && (
                    <span className="inline-flex">{rightIcon}</span>
                )}
            </button>
        );
    },
);

Button.displayName = "Button";
