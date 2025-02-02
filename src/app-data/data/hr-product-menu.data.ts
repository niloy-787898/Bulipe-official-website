import { HRProductMenu } from "../model/hr-product-menu.model";
import * as HRProductMenuDatabase from '../../assets/data/hr-product-menu.data.en.json';

export const HR_PRODUCT_MENU_DATA:HRProductMenu[]  = (HRProductMenuDatabase as any).default
