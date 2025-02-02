
import { BlogContent } from '../model/blog-content.model';
import * as BlogContentDatabase from '../../assets/data/constant-content.en.json';

export const BLOG_CONTENT_DATA: BlogContent  = (BlogContentDatabase as any).default
