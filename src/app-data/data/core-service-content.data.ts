
import { CoreServiceContent } from '../model/core-service-content.model';
import * as CoreServiceDatabase from '../../assets/data/core-services-content.en.json';

export const CORE_SERVICES_CONTENT_DATA:CoreServiceContent[]  = (CoreServiceDatabase as any).default
