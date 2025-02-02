export interface IHrmSectionContent {
  id?: string;
  imageUrl: string | null | undefined;
  title: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}

export class HrmSectionContent implements IHrmSectionContent {
  id?: string;
  imageUrl: string | null | undefined;
  title: ILocalizer[] | undefined | [];
  contents: ILocalizer[] | undefined | [];
}
