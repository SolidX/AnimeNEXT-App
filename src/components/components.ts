import type { ReactElement } from "react";

export const AlertType = {
    Primary: "alert-primary",
    Secondary: "alert-secondary",
    Success: "alert-success",
    Danger: "alert-danger",
    Warning: "alert-warning",
    Info: "alert-info",
    Light: "alert-light",
    Dark: "alert-dark"
} as const;

export type AccordionItemDetails = {
    parentId: string,
    itemId: string,
    isCollapsed: boolean,
    header: string,
    content?: string | ReactElement
}