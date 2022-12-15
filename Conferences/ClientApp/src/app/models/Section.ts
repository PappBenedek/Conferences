import { Conference } from '../models/Conference';
import { EventObject } from './Event';

export class Section {
  id: number | null = null
  name: string = ''
  startDate: Date  | null = null
  endDate: Date | null = null
  Conference: Conference | null = null
  ConferenceId: number | null = null
  Events: EventObject[] | null = null
}
