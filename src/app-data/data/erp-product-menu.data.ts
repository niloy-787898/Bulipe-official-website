import { ERPProductMenu } from "../model/erp-product-menu.model";
import * as ERPProductMenuDatabase from '../../assets/data/erp-product-menu.data.en.json';

export const ERP_PRODUCT_MENU_DATA:ERPProductMenu[]  = (ERPProductMenuDatabase as any).default
