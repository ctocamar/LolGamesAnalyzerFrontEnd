import { TimelineInfoDTO } from './TimelineInfoDTO';
import { MetadataTimeLineDTO } from './MetadataTimeLineDTO';


export interface TimeLineDTO {
  metadata?: MetadataTimeLineDTO;
  info?: TimelineInfoDTO;
  gameId? : number;
}
