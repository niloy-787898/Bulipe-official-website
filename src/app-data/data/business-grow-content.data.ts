import { BusinessGrowContent } from '../model/business-grow-content.model';
import * as BusinessGrowContentDatabase from '../../assets/data/business-grow-content.en.json';

export const BUSINESS_GROW_CONTENT_DATA: BusinessGrowContent[] = (
  BusinessGrowContentDatabase as any
).default;
