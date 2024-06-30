import { ChampionStatsDTO } from './ChampionStatsDTO'; // Importa el DTO ChampionStatsDTO
import { DamageStatsDTO } from './DamageStatsDTO'; // Importa el DTO DamageStatsDTO
import { PositionDTO } from './PositionDTO'; // Importa el DTO PositionDTO

export interface ParticipantFrameDTO {
  currentGold?: number;
  goldPerSecond?: number;
  jungleMinionsKilled?: number;
  level?: number;
  minionsKilled?: number;
  participantId?: number;
  timeEnemySpentControlled?: number;
  totalGold?: number;
  xp?: number;
  championStats?: ChampionStatsDTO;
  damageStats?: DamageStatsDTO;
  position?: PositionDTO;
}