
import { TeamsContent } from '../model/teams-content.model';
import * as TeamsContentDatabase from '../../assets/data/teams-content.en.json';

export const TEAMS_CONTENT_DATA:TeamsContent[]  = (TeamsContentDatabase as any).default
