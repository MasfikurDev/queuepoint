import { type InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, id, ...props }, ref) => {
        const generatedId = useId();
        const inputId = id || generatedId;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-slate-300 mb-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    id={inputId}
                    ref={ref}
                    className={cn(
                        "w-full rounded-lg bg-slate-800 border px-3 py-2 text-slate-300 placeholder-slate-500",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                        error ?
                            "border-red-500 focus:ring-red-500/50"
                        :   "border-slate-700",
                        props.disabled && "opacity-60 cursor-not-allowed",
                        className,
                    )}
                    {...props}
                />
                {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
            </div>
        );
    },
);

Input.displayName = "Input";
