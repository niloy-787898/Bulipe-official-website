import { SMEProductMenu } from "../model/sme-product-menu.model";
import * as SMEProductMenuDatabase from '../../assets/data/sme-product-menu.data.en.json';

export const SME_PRODUCT_MENU_DATA:SMEProductMenu[]  = (SMEProductMenuDatabase as any).default
