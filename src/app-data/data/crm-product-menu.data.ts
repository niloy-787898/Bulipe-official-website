import { CRMProductMenu } from "../model/crm-product-menu.model";
import * as CRMProductMenuDatabase from '../../assets/data/crm-product-menu.data.en.json';

export const CRM_PRODUCT_MENU_DATA:CRMProductMenu[]  = (CRMProductMenuDatabase as any).default
