export interface ISERVICESMenu {
  id?: number;
  image: string | null | undefined;
  slug: string | null | undefined;
  headings:ILocalizer[] | undefined | null | [];
  subHeading:ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  viewMoreBtn:ILocalizer[] | undefined | null | [];
  AccordianHeading: ILocalizer[] | undefined | [];
  AccordianContents: ILocalizer[] | undefined | [];
  expended: boolean | null | undefined;
}

export interface ILocalizer {
  ln: string | 'en' | 'bn';
  content: string;
}

export class SERVICESMenu implements ISERVICESMenu {
  id?: number;
  image: string | null | undefined;
  slug: string | null | undefined;
  headings:ILocalizer[] | undefined | null | [];
  subHeading:ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  viewMoreBtn:ILocalizer[] | undefined | null | [];
  AccordianHeading: ILocalizer[] | undefined | [];
  AccordianContents: ILocalizer[] | undefined | [];
  expended: boolean | null | undefined;
}
