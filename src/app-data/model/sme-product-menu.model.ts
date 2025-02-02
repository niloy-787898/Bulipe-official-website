export interface ISMEProductMenu {
  id?: number;
  image: string | null | undefined;
  headings:ILocalizer[] | undefined | null | [];
  subHeading:ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  AccordianHeading: ILocalizer[] | undefined | [];
  AccordianContents: ILocalizer[] | undefined | [];
  expended: boolean | null | undefined;
}

export interface ILocalizer {
  ln: string | 'en' | 'bn';
  content: string;
}

export class SMEProductMenu implements ISMEProductMenu {
  id?: number;
  image: string | null | undefined;
  headings:ILocalizer[] | undefined | null | [];
  subHeading:ILocalizer[] | undefined | null | [];
  description: ILocalizer[] | undefined | null | [];
  AccordianHeading: ILocalizer[] | undefined | [];
  AccordianContents: ILocalizer[] | undefined | [];
  expended: boolean | null | undefined;
}
