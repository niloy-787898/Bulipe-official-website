export interface IWhyBestContent {
  id?: string;
  url: string | null | undefined;
  headings: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' |'ar';
  content: string;
}

export class WhyBestContent implements IWhyBestContent {
  id?: string;
  url: string | null | undefined;
  headings: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
}
