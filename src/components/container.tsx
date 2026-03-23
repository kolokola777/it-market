import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const Container = ({ className, children, type, ...props }: ComponentProps<"div"> & { type: ContainerType }) => {
    return <div className={cn("mx-auto",
        // type === "left" ? "w-full overflow-x-hidden pl-container-left" : type === "right" ? "w-full overflow-x-hidden pr-container-left" : "w-container px-container"
        {
            "w-full overflow-x-hidden pl-container-left": type === "left",
            "w-full overflow-x-hidden pr-container-left": type === "right",
            "w-container px-container": type === "default"
        }
    )} {...props}>{children}</div>
}

type ContainerType = "left" | "right" | "default"