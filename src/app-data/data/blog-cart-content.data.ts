
import { BlogCartContent } from '../model/blog-cart-content.model';
import * as BlogCartContentDatabase from '../../assets/data/blog-cart-content.en.json';

export const BLOG_CART_CONTENT_DATA:BlogCartContent[]  = (BlogCartContentDatabase as any).default
