import { TBProductMenu } from "../model/tb-product-menu.model";
import * as TBProductMenuDatabase from '../../assets/data/tb-product-menu.data.en.json';

export const TB_PRODUCT_MENU_DATA:TBProductMenu[]  = (TBProductMenuDatabase as any).default
