export interface IRelatedProductContent {
  id?: Number;
  slug:string | null | undefined;
  ImageUrl: string | null | undefined;
  RelatedProductName: ILocalizer[] | undefined | [];
  RelatedProductHeadings: ILocalizer[] | undefined | [];
  RelatedProductContents: ILocalizer[] | undefined | [];
  RelatedProductBtn: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' |'ar';
  content: string;
}

export class RelatedProductContent implements IRelatedProductContent {
  id?: Number;
  slug:string | null | undefined;
  ImageUrl: string | null | undefined;
  RelatedProductName: ILocalizer[] | undefined | [];
  RelatedProductHeadings: ILocalizer[] | undefined | [];
  RelatedProductContents: ILocalizer[] | undefined | [];
  RelatedProductBtn: ILocalizer[] | undefined | [];
}
  
  
