export interface IBlogContent {
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

export class BlogContent implements IBlogContent {
  id?: string;
  heroHeadings: ILocalizer[] | undefined | [];
  heroSubHeadings: ILocalizer[] | undefined | [];
  heroDetailsBtn: ILocalizer[] | undefined | [];
  heroDemoBtn: ILocalizer[] | undefined | [];
}
