export interface IBlogCartContent {
  id?: Number;
  key: string | 'recent' | 'popular';
  blogCartTopImage: string | null | undefined;
  blogCartHeadings: ILocalizer[] | undefined | [];
  blogCartSubHeadings: ILocalizer[] | undefined | [];
  blogCartImage: string | null | undefined;
  blogCartName: ILocalizer[] | undefined | [];
  blogCartTime: ILocalizer[] | undefined | [];
  blogCartTimeIcon: string | null | undefined;
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' |'ar';
  content: string;
}
export interface ISocialInfo {
  iconType: string | null | undefined;
  link: string | null | undefined;
}

export class BlogCartContent implements IBlogCartContent {
  id?: Number;
  key: string | 'recent' | 'popular';
  blogCartTopImage: string | null | undefined;
  blogCartHeadings: ILocalizer[] | undefined | [];
  blogCartSubHeadings: ILocalizer[] | undefined | [];
  blogCartImage: string | null | undefined;
  blogCartName: ILocalizer[] | undefined | [];
  blogCartTime: ILocalizer[] | undefined | [];
  blogCartTimeIcon: string | null | undefined;
}
  
  
