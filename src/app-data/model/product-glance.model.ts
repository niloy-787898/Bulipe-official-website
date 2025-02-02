export interface IProductGlance {
  id?: number;
  imageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined;
  headings: ILocalizer[] | undefined;
  subHeadings: ILocalizer[] | undefined;
  contents: ILocalizer[] | undefined;
  options:[] | undefined;
  case1: ILocalizer[] | undefined;
  case2: ILocalizer[] | undefined;
  case3: ILocalizer[] | undefined;
  case4: ILocalizer[] | undefined;
}

export interface ILocalizer {
  ln: 'en' | 'bn' | 'ar';
  content: string;
}

export class ProductGlance implements IProductGlance {
  id?: number;
  imageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined | [];
  headings: ILocalizer[] | undefined | [];
  subHeadings: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
  options:[] | undefined;
  case1: ILocalizer[] | undefined;
  case2: ILocalizer[] | undefined;
  case3: ILocalizer[] | undefined;
  case4: ILocalizer[] | undefined;
}
