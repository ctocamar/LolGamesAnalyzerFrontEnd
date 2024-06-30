import { ParticipantFrameDTO } from './ParticipantFrameDTO'; // Importa el DTO ParticipantFrameDTO
import { EventsTimeLineDTO } from './EventsTimeLineDTO'; // Importa el DTO EventsTimeLineDTO

export interface FramesTimelineDTO {
  participantFrames: { [key: number]: ParticipantFrameDTO };
  timestamp: number;
  events: EventsTimeLineDTO[];
}