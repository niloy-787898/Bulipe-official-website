import { SERVICESMenu } from "../model/service-menu.model";
import * as SERVICESMenuDatabase from '../../assets/data/services-menu.data.en.json';

export const SERVICE_MENU_DATA:SERVICESMenu[]  = (SERVICESMenuDatabase as any).default
