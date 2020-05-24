/** Flat node with expandable and level information */
export interface MenuFlatNode {
    expandable: boolean;
    name: string;
    icon: string;
    route: string;
    level: number;
}