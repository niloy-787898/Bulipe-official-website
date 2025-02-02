export interface IBusinessGrowContent {
  id?: string;
  contents: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' |'ar';
  content: string;
}

export class BusinessGrowContent implements IBusinessGrowContent {
  id?: string;
  contents: ILocalizer[] | undefined | [];
}
