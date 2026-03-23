import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const flexVariants = cva("flex", {
    variants: {
        direction: {
            default: "flex-row",
            vertical: "flex-col"
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between"
        },
        items: {
            start: "items-start",
            center: "items-center",
            end: "items-end"
        },
        defaultVariants: {
            direction: "default",
            items: "start",
            justify: "start"
        }
    }
})

export const Flex = ({ className, direction, justify, items, children, ...props }: ComponentProps<"div"> & VariantProps<typeof flexVariants>) => {
    return <div data-slot="flex" className={cn(flexVariants({
        direction, justify, items
    }),
        className)} {...props}>
        {children}
    </div>
}