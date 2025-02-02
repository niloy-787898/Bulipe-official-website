export interface ITeamsContent {
  id?: Number;
  ImageUrl: string | null | undefined;
  MemberName: ILocalizer[] | undefined | [];
  MemberRole: ILocalizer[] | undefined | [];
  MemberSocialLink: ISocialInfo[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' |'ar';
  content: string;
}
export interface ISocialInfo {
  iconType: string | null | undefined;
  link: string | null | undefined;
}

export class TeamsContent implements ITeamsContent {
  id?: Number;
  ImageUrl: string | null | undefined;
  MemberName: ILocalizer[] | undefined | [];
  MemberRole: ILocalizer[] | undefined | [];
  MemberSocialLink: ISocialInfo[] | undefined | [];
}
  
  
