export interface IFeatureMenu {
  id?: number;
  contentImage: string | null | undefined;
  tabIcon: string | null | undefined;
  tabHeadings:ILocalizer[] | undefined | null | [];
  contentHeading:ILocalizer[] | undefined | null | [];
  contentSubHeading: ILocalizer[] | undefined | null | [];
  contentDescription: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn';
  content: string;
}

export class FeatureMenu implements IFeatureMenu {
  id?: number;
  contentImage: string | null | undefined;
  tabIcon: string | null | undefined;
  tabHeadings:ILocalizer[] | undefined | null | [];
  contentHeading:ILocalizer[] | undefined | null | [];
  contentSubHeading: ILocalizer[] | undefined | null | [];
  contentDescription: ILocalizer[] | undefined | [];
}
