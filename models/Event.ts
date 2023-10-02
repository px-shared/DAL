export default interface Event {
  id: number;

  action: string;
  source: string;
  referrer: string;
  properties: any;
  meta: any;
  organisation: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Event {}
