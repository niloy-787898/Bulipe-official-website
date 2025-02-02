export interface IHeroSectionContent {
  id?: string;
  slug: string | null | undefined;
  key: string | undefined;
  order: null | number | undefined;
  icon: string | null | undefined;
  label: ILocalizer[] | undefined | null | [];
  subheadings:ILocalizer[] | undefined | null | [];
}
export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}
export class HeroSectionContent implements IHeroSectionContent {
  id?: string;
  slug: string | null | undefined;
  key: string | undefined;
  order: null | number | undefined;
  icon: string | null | undefined;
  label: ILocalizer[] | undefined | null | [];
  subheadings:ILocalizer[] | undefined | null | [];
}
