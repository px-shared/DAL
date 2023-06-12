import { EntitySchema } from 'typeorm';
import Short from './Short';
import Organisation from './Organisation';

export default interface Session {
  id: number;

  sc_status: string;
  cs_method: string;
  cs_protocol: string;
  cs_host: string;
  cs_uri_stem: string;
  cs_bytes: string;
  x_edge_location: string;
  x_host_header: string;
  cs_protocol_version: string;
  c_ip_version: string;
  cs_user_agent: string;
  cs_referer: string;
  cs_cookie: string;
  cs_uri_query: string;
  x_edge_response_result_type: string;
  c_country: string;
  c_region: string;
  c_city: string;
  deviceType: string;
  OSName: string;
  OSVersion: string;
  browserName: string;
  browserVersion: string;
  performedAt: Date;
  cfid: string;
  uid: string;
  medium: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  source: string;
  gdpr_consent_status: string;
  gdpr_consent_date: Date;

  short: Short;
  events: Event[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Session {}

export const SessionSchema = new EntitySchema<Session>({
  name: 'Session',
  target: Session,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    sc_status: {
      type: 'varchar',
      nullable: true
    },
    cs_method: {
      type: 'varchar',
      nullable: true
    },
    cs_protocol: {
      type: 'varchar',
      nullable: true
    },
    cs_host: {
      type: 'varchar',
      nullable: true
    },
    cs_uri_stem: {
      type: 'varchar',
      nullable: true
    },
    // cs_bytes: {
    //   type: 'varchar',
    //   nullable: true
    // },
    // x_edge_location: {
    //   type: 'varchar',
    //   nullable: true
    // },
    // x_host_header: {
    //   type: 'varchar',
    //   nullable: true
    // },
    // cs_protocol_version: {
    //   type: 'varchar',
    //   nullable: true
    // },
    // c_ip_version: {
    //   type: 'varchar',
    //   nullable: true
    // },
    // cs_user_agent: {
    //   type: 'varchar',
    //   nullable: true
    // },
    // cs_uri_query: {
    //   type: 'varchar',
    //   nullable: true
    // },
    cs_referer: {
      type: 'varchar',
      nullable: true
    },
    cs_cookie: {
      type: 'varchar',
      nullable: true
    },
    x_edge_response_result_type: {
      type: 'varchar',
      nullable: true
    },
    c_country: {
      type: 'varchar',
      nullable: true
    },
    c_region: {
      type: 'varchar',
      nullable: true
    },
    c_city: {
      type: 'varchar',
      nullable: true
    },
    deviceType: {
      type: 'varchar',
      nullable: true
    },
    OSName: {
      type: 'varchar',
      nullable: true
    },
    OSVersion: {
      type: 'varchar',
      nullable: true
    },
    browserName: {
      type: 'varchar',
      nullable: true
    },
    browserVersion: {
      type: 'varchar',
      nullable: true
    },
    performedAt: {
      type: 'timestamp',
      nullable: true
    },
    cfid: {
      type: 'varchar',
      nullable: true
    },
    uid: {
      type: 'varchar',
      nullable: true,
      length: 32
    },
    medium: {
      type: 'varchar',
      nullable: true
    },
    referrer: {
      type: 'varchar',
      nullable: true
    },
    utm_source: {
      type: 'varchar',
      nullable: true
    },
    utm_medium: {
      type: 'varchar',
      nullable: true
    },
    utm_content: {
      type: 'varchar',
      nullable: true
    },
    utm_campaign: {
      type: 'varchar',
      nullable: true
    },
    utm_term: {
      type: 'varchar',
      nullable: true
    },
    source: {
      type: 'varchar',
      nullable: true
    },
    gdpr_consent_status: {
      type: 'varchar',
      nullable: true
    },
    gdpr_consent_date: {
      type: 'timestamp',
      nullable: true
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
      select: false
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
      select: false
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
      select: false
    }
  },
  indices: [
    {
      name: 'IDX_performedAt',
      columns: ['performedAt']
    },
    {
      name: 'IDX_cfid',
      columns: ['cfid']
    },
    {
      name: 'IDX_uid',
      columns: ['uid']
    },
    {
      name: 'IDX_short',
      columns: ['short']
    },
    {
      name: 'IDX_deviceType',
      columns: ['deviceType']
    },
    {
      name: 'IDX_browserName',
      columns: ['browserName']
    },
    {
      name: 'IDX_OSName',
      columns: ['OSName']
    },
    {
      name: 'IDX_cs_host',
      columns: ['cs_host']
    },
    {
      name: 'IDX_c_country',
      columns: ['c_country']
    },
    {
      name: 'IDX_source',
      columns: ['source']
    },
    {
      name: 'IDX_utm_source',
      columns: ['utm_source']
    },
    {
      name: 'IDX_utm_medium',
      columns: ['utm_medium']
    },
    {
      name: 'IDX_utm_campaign',
      columns: ['utm_campaign']
    }
  ],
  relations: {
    short: {
      type: 'many-to-one',
      target: 'Short',
      inverseSide: 'sessions',
      onDelete: 'CASCADE'
    },
    events: {
      type: 'one-to-many',
      target: 'Event',
      inverseSide: 'session',
      cascade: true
    }
  }
});
