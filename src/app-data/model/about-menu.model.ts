export interface IABOUTMenu {
  id?: number;
  image: string | null | undefined;
  headings:ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn';
  content: string;
}

export class ABOUTMenu implements IABOUTMenu {
  id?: number;
  image: string | null | undefined;
  headings:ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
}
