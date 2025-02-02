export interface IServicesContent {
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

export class ServicesContent implements IServicesContent {
  id?: string;
  heroHeadings: ILocalizer[] | undefined | [];
  heroSubHeadings: ILocalizer[] | undefined | [];
  heroDetailsBtn: ILocalizer[] | undefined | [];
  heroDemoBtn: ILocalizer[] | undefined | [];
}
