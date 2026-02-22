import { type InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, id, ...props }, ref) => {
        const generatedId = useId();
        const inputId = id || `input-${generatedId}`;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-(--theme-text-primary) mb-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    id={inputId}
                    ref={ref}
                    className={cn(
                        "w-full outline rounded-lg bg-(--theme-surface-hover) border px-3 py-2 text-(--theme-text-primary) placeholder-(--theme-text-muted)",
                        "focus:outline-none focus:ring-2 focus:ring-(--theme-primary)/50",
                        error ?
                            "border-(--theme-danger) focus:ring-(--theme-danger)/50"
                        :   "border-(--theme-surface-border) hover:border-(--theme-text-muted)",
                        props.disabled && "opacity-60 cursor-not-allowed",
                        className,
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-xs text-(--theme-danger)">
                        {error}
                    </p>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";
