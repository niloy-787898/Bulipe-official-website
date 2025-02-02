export interface IFooterSectionContent{
    id?:string;
    slug:string | null | undefined;
    key:string | undefined;
    order:null | number | undefined;
    icon:string | null | undefined;
    label:ILocalizer[] | undefined | null | [];
    submenu:FooterSectionContent[] | undefined | []; 
}
export interface ILocalizer{
    ln:string | 'en' | 'bn';
    content:string
}
export class FooterSectionContent implements FooterSectionContent {
    id?:string;
    slug:string | null | undefined;
    key:string | undefined;
    order:null | number | undefined;
    icon:string | null | undefined;
    label:ILocalizer[] | undefined | null | [];
    submenu:FooterSectionContent[] | undefined | []; 
}
