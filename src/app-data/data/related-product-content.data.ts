
import { RelatedProductContent } from '../model/related-product-content.model';
import * as RelatedProductContentDatabase from '../../assets/data/related-product-content.en.json';

export const RELATED_PRODUCT_CONTENT_DATA:RelatedProductContent[]  = (RelatedProductContentDatabase as any).default
