import { Injectable } from '@nestjs/common';
import { Collection, Db } from 'mongodb';
import { InjectDb } from 'nest-mongodb';

@Injectable()
export class DasRealtorService {
  private readonly collection: Collection;

  constructor(@InjectDb() private readonly db: Db) {
    this.collection = this.db.collection('realtor');
  }

  appInfo() {
    return { name: 'abc' };

  }
}
