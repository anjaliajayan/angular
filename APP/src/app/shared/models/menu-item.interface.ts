export interface MenuItems {
    name: string;
    icon?: string;
    route?: string;
    roleKey?: string;
    scenario?: string;
    children?: MenuItems[];
}