export interface IFeedbackContent {
  id?: string;
  ImageUrl: string | null | undefined;
  comapnyName: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
  names: ILocalizer[] | undefined | [];
  roles: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' |'ar';
  content: string;
}

export class FeedbackContent implements IFeedbackContent {
  id?: string;
  ImageUrl: string | null | undefined;
  comapnyName: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
  names: ILocalizer[] | undefined | [];
  roles: ILocalizer[] | undefined | [];
}
