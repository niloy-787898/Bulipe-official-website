export interface IProductContent {
  id?: string;
  heroHeadings: ILocalizer[] | undefined | [];
  heroSubHeadings: ILocalizer[] | undefined | [];
  heroDetailsBtn: ILocalizer[] | undefined | [];
  heroDemoBtn: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}

export class ProductContent implements IProductContent {
  id?: string;
  heroHeadings: ILocalizer[] | undefined | [];
  heroSubHeadings: ILocalizer[] | undefined | [];
  heroDetailsBtn: ILocalizer[] | undefined | [];
  heroDemoBtn: ILocalizer[] | undefined | [];
}
