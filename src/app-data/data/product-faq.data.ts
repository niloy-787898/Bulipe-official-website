import { ProductFaq } from "../model/product-faq.model";
import * as ProductFaqDatabase from '../../assets/data/product-faq.data.en.json';

export const PRODUCT_FAQ_DATA:ProductFaq[]  = (ProductFaqDatabase as any).default
