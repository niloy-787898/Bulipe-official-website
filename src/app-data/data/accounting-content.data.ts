
import { AccountingContent } from '../model/accounting-content.model';
import * as AccountingDatabase from '../../assets/data/accounting-content.en.json';

export const ACCOUNTING_CONTENT_DATA:AccountingContent[]  = (AccountingDatabase as any).default
