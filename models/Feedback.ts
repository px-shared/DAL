import { EntitySchema } from 'typeorm';
import User from './User';

export default interface Feedback {
  id: number;

  message: string;
  route: string;
  sentiment: string;
  category: string;

  user: User;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Feedback {
  // @ts-ignore
  public static name = 'Feedback';
  constructor(message: string, user: User) {
    this.message = message;
    this.user = user;
  }
}

export const FeedbackSchema = new EntitySchema<Feedback>({
  name: 'Feedback',
  target: Feedback,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    message: {
      type: 'varchar',
      nullable: false
    },
    route: {
      type: 'varchar',
      nullable: true
    },
    sentiment: {
      type: 'varchar',
      nullable: true
    },
    category: {
      type: 'varchar',
      nullable: true
    },
    createdAt: {
      type: 'timestamp',
      createDate: true
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true
    }
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'feedback',
      onDelete: 'SET NULL'
    }
  },
  indices: [
    {
      name: 'route-idx',
      columns: ['route']
    }
  ]
});
