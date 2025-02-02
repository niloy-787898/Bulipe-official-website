import { ProductGlance } from "../model/product-glance.model";
import * as ProductGlanceDatabase from '../../assets/data/product-glane.data.en.json';

export const PRODUCT_GLANCE_DATA:ProductGlance[]  = (ProductGlanceDatabase as any).default
