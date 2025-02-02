export interface ICoreServiceContent {
  id: number;
  url: string | null | undefined;
  headingsRight: ILocalizer[] | undefined | [];
  headingsleft: ILocalizer[] | undefined | [];
  headingsSubRight: ILocalizer[] | undefined | [];
  headingsSubLeft: ILocalizer[] | undefined | [];
  contentsRight: ILocalizer[] | undefined | [];
  contentsLeft: ILocalizer[] | undefined | [];
}

export interface ILocalizer {
  ln: string | 'en' | 'bn' |'ar';
  content: string;
}

export class CoreServiceContent implements ICoreServiceContent {
  id: number;
  url: string | null | undefined;
  headingsRight: ILocalizer[] | undefined | [];
  headingsSubRight: ILocalizer[] | undefined | [];
  headingsleft: ILocalizer[] | undefined | [];
  headingsSubLeft: ILocalizer[] | undefined | [];
  contentsRight: ILocalizer[] | undefined | [];
  contentsLeft: ILocalizer[] | undefined | [];
  active: boolean;
}
