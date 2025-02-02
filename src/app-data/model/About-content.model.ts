export interface IAboutContent {
  id?: string;
  icon: string | null | undefined;
  AboutHeadings: ILocalizer[] | undefined | [];
  AboutSubHeadings: ILocalizer[] | undefined | [];
  AboutDetailsBtn: ILocalizer[] | undefined | [];
  AboutDemoBtn: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}

export class AboutContent implements IAboutContent {
  id?: string;
  icon: string | null | undefined;
  AboutHeadings: ILocalizer[] | undefined | [];
  AboutSubHeadings: ILocalizer[] | undefined | [];
  AboutDetailsBtn: ILocalizer[] | undefined | [];
  AboutDemoBtn: ILocalizer[] | undefined | [];
}
