
import { ErpContent } from '../model/erp-content.model';
import * as ErpDatabase from '../../assets/data/erp-content.en.json';

export const ERP_CONTENT_DATA:ErpContent[]  = (ErpDatabase as any).default
