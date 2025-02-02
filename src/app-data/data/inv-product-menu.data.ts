import { INVProductMenu } from "../model/inv-product-menu.model";
import * as INVProductMenuDatabase from '../../assets/data/inv-product-menu.data.en.json';

export const INV_PRODUCT_MENU_DATA:INVProductMenu[]  = (INVProductMenuDatabase as any).default
