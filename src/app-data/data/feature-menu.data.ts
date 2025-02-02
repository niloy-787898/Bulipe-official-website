import { FeatureMenu } from "../model/feature-menu.model";
import * as FeatureMenuDatabase from '../../assets/data/feature-menu.data.en.json';

export const FEATURE_MENU_DATA:FeatureMenu[]  = (FeatureMenuDatabase as any).default
