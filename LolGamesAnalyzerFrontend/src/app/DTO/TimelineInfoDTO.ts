
import { ParticipantTimelineDTO } from './ParticipantTimelineDTO';
import { FramesTimelineDTO } from './FramesTimelineDTO';

export interface TimelineInfoDTO {
  endOfGameResult?: string;
  frameInterval?: number;
  gameId?: number;
  participants?: ParticipantTimelineDTO[];
  frames?: FramesTimelineDTO[];
}