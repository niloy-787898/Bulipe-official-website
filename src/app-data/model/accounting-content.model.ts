export interface IAccountingContent {
  id?: string;
  ImageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}

export class AccountingContent implements IAccountingContent {
  id?: string;
  ImageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined | [];
}
