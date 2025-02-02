
import { FeedbackContent } from '../model/feedback-content.model';
import * as FeedbackContentDatabase from '../../assets/data/feedback-content.en.json';

export const FEEDBACK_CONTENT_DATA:FeedbackContent[]  = (FeedbackContentDatabase as any).default
