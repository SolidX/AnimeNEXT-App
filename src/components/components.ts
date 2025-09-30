import type { DateTime } from "luxon";
import type { ReactElement } from "react";
import type { To } from "react-router";

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

export const ExhibitorListTypes = {
    Artists: "artists",
    Dealers: "dealers"
} as const;

export type ExhibitorListType = typeof ExhibitorListTypes[keyof typeof ExhibitorListTypes];

//#region Component Props Types
export type AccordionProps = {
    accordionId: string,
    items: AccordionItemDetails[]
};

export type AccordionItemProps = {
    details: AccordionItemDetails
};

export type AlertProps = {
    type: AlertType,
    heading?: string,
    content?: string | ReactElement
};

export type AnchorButtonProps = {
    type: AnchorButtonType,
    url: string,
    text: string | ReactElement,
    target?: string
};

export type NavigationProps = {
    currentPage: string,
    navHandler: (p : string) => void
};

export type NavItemProps = {
    text: string,
    url: To,
    currentPage?: string,
    isDropdown: boolean,
    subItems?: {
        text: string;
        url: To
    }[],
    onNav?: (p : string) => void
};

export type NavLinkProps = {
    isCurrentPage: boolean,
    isDropdown: boolean,
    text: string;
    url: To,
    onNav?: (p : string) => void
};
//#endregion

//#region Page Props
export type ExhibitorListPageProps = {
    listType: ExhibitorListType,
    title: string,
};

export type HomePageProps = {
    title: string
};
//#endregion