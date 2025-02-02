export interface IProductFaq {
  id?: number;
  imageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined;
  headings: ILocalizer[] | undefined;
  subHeadings: ILocalizer[] | undefined;
  accordian:IAccordian[] | [] | undefined;
}
export interface ILocalizer {
  ln: 'en' | 'bn' | 'ar';
  content: string;
}
export interface IAccordian {
  accordianHeading:ILocalizer[] | undefined;
  accordianContent:ILocalizer[] | undefined;
}
export class ProductFaq implements IProductFaq {
  id?: number;
  imageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined;
  headings: ILocalizer[] | undefined;
  subHeadings: ILocalizer[] | undefined;
  accordian:IAccordian[] | [] | undefined;
}
