export interface IHighlightAreaContent {
  id?: string;
  percent: ILocalizer[] | undefined | [];
  title: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}

export class HighlightAreaContent implements IHighlightAreaContent {
  id?: string;
  percent: ILocalizer[] | undefined | [];
  title: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
}
