export interface IErpContent {
  id?: string;
  ImageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}
export class ErpContent implements IErpContent {
  id?: string;
  ImageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined | [];
}
