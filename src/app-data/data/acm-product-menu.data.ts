import { ACMProductMenu } from "../model/acm-product-menu.model";
import * as ACMProductMenuDatabase from '../../assets/data/acm-product-menu.data.en.json';

export const ACM_PRODUCT_MENU_DATA:ACMProductMenu[]  = (ACMProductMenuDatabase as any).default
