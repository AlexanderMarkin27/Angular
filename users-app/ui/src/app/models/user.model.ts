export interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  profession: string,
  qualities: string[],
  completedMeetings: number,
  rate: number,
}