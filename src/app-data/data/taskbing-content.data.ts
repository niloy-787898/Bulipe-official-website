
import { TaskbingContent } from '../model/taskbing-content.model';
import * as TaskbingDatabase from '../../assets/data/taskbing-content.en.json';

export const TASKBING_CONTENT_DATA:TaskbingContent[]  = (TaskbingDatabase as any).default
