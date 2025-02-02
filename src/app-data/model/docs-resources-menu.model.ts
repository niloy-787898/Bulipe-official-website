export interface IDocsResourcesMenu {
  id?: string;
  slug: string | null | undefined;
  key: string | undefined;
  order: null | number | undefined;
  icon: string | null | undefined;
  label: ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  submenu: IDocsResourcesMenu[] | ILocalizer[] | undefined | [];
}
export interface ILocalizer {
  ln: string | 'en' | 'bn';
  content: string;
}
export class DocsResourcesMenu implements IDocsResourcesMenu {
  id?: string;
  slug: string | null | undefined;
  key: string | undefined;
  order: null | number | undefined;
  icon: string | null | undefined;
  label: ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  submenu: IDocsResourcesMenu[] | ILocalizer[] | undefined | [];
}
