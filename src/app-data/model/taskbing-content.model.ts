export interface ITaskbingContent {
  id?: string;
  ImageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined | [];
}
export interface ILocalizer {
  ln: string | 'en' | 'bn' | 'ar';
  content: string;
}


export class TaskbingContent implements ITaskbingContent {
  id?: string;
  ImageUrl: string | null | undefined;
  titles: ILocalizer[] | undefined | [];
}
