import { ABOUTMenu } from "../model/about-menu.model";
import * as ABOUTMenuDatabase from '../../assets/data/about-menu.data.en.json';

export const ABOUT_MENU_DATA:ABOUTMenu[]  = (ABOUTMenuDatabase as any).default
