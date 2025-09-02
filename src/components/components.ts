import type { DateTime } from "luxon";
import type { ReactElement } from "react";

export const AlertTypes = {
    Primary: "alert-primary",
    Secondary: "alert-secondary",
    Success: "alert-success",
    Danger: "alert-danger",
    Warning: "alert-warning",
    Info: "alert-info",
    Light: "alert-light",
    Dark: "alert-dark"
} as const;

export type AlertType = typeof AlertTypes[keyof typeof AlertTypes];

export type AccordionItemDetails = {
    parentId: string,
    itemId: string,
    isCollapsed: boolean,
    header: string,
    content?: string | ReactElement
};

export type ExhibitorDetails = {
    Booth: number,
    Name: string
};

export const AnchorButtonTypes = {
    Primary: "btn-primary",
    Secondary: "btn-secondary",
    Success: "btn-success",
    Danger: "btn-danger",
    Warning: "btn-warning",
    Info: "btn-info",
    Light: "btn-light",
    Dark: "btn-dark",
    Link: "btn-link"
} as const;

export type AnchorButtonType = typeof AnchorButtonTypes[keyof typeof AnchorButtonTypes];

export type AnchorButtonProps = {
    type: AnchorButtonType,
    url: string,
    text: string | ReactElement,
    target?: string
}

export const BadgeTypes = {
    Primary: "text-bg-primary",
    Secondary: "text-bg-secondary",
    Success: "text-bg-success",
    Danger: "text-bg-danger",
    Warning: "text-bg-warning",
    Info: "text-bg-info",
    Light: "text-bg-light",
    Dark: "text-bg-dark",
    Link: "text-bg-link"
} as const;

export type BadgeType = typeof BadgeTypes[keyof typeof BadgeTypes];

export type RawScheduleEvent = {
    Start: string,
    End: string,
    Location: string,
    Type: string,
    Name: string,
    Description: string
};

export type RawSchedule = {
    updatedAt: number,
    events: RawScheduleEvent[]
};

export type ScheduleEvent = {
    Start: DateTime,
    End: DateTime,
    Location: string,
    Type?: string,
    Name: string,
    Description: string
};