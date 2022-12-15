import { Section } from "./Section"

export class Conference {
  id: number | null = null
  name: string = ''
  startTime: Date = new Date(Date.now())
  endTime: Date = new Date(Date.now())
  location: string = ''
  theme: string = ''
  maxNumberOfPeople: number = 0
  language: string = ''
  sections: Section[] | null = null
}
