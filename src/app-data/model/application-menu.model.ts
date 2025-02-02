export interface IApplicationMainMenu {
  id?: string;
  slug: string | null | undefined;
  key: string | undefined;
  order: null | number | undefined;
  icon: string | null | undefined;
  label: ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  submenu: IApplicationMainMenu[] | ILocalizer[] | undefined | [];
}
export interface ILocalizer {
  ln: string | 'en' | 'bn';
  content: string;
}
export class ApplicationMainMenu implements IApplicationMainMenu {
  id?: string;
  slug: string | null | undefined;
  key: string | undefined;
  order: null | number | undefined;
  icon: string | null | undefined;
  label: ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  submenu: IApplicationMainMenu[] | ILocalizer[] | undefined | [];
}
