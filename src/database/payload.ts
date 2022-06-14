import { Id, ClubSet } from './models';

export interface PayloadAdminAppointCeo {
  conferenceId: Id;
}

export interface PayloadCeoAppointDirector {
  clubId?: Id;
}

export interface PayloadDirectorCreateClub {
  clubName: string;
}

export interface PayloadDirectorDeleteMember {
  memberId: Id;
}

export type PayloadDirectorCreateSet = Partial<ClubSet>;
