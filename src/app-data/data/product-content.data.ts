
import { ProductContent } from '../model/product-content.model';
import * as ProductContentDatabase from '../../assets/data/constant-content.en.json';

export const PRODUCT_CONTENT_DATA: ProductContent  = (ProductContentDatabase as any).default
