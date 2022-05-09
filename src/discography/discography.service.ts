import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '../logger/logger.service';
import { Firestore } from '@google-cloud/firestore';

@Injectable()
export class DiscographyService {
  private firestore: Firestore;

  constructor(
    private readonly configService: ConfigService,
    private readonly loggerService: LoggerService,
  ) {
    const buffer: Buffer = Buffer.from(
      this.configService.get<string>('pubsub.subscriberB64'),
      'base64',
    );

    const credentialDecoded: string = buffer ? buffer.toString() : null;
    const credentialJson: any = JSON.parse(credentialDecoded);

    this.firestore = new Firestore({
      projectId: configService.get<string>('pubsub.projectId'),
      credentials: credentialJson,
    });
  }

  getAllDiscography = async () => {
    const discographyRef = this.firestore.collection('alonso-entrenamiento');
    const allDiscography = await discographyRef.get();
    const discographyArray: any[] = [];

    allDiscography.forEach((doc) => {
      discographyArray.push(doc.data());
    });

    return discographyArray;
  };

  getDiscographyById = async (id) => {
    const discographyRef = this.firestore.collection('alonso-entrenamiento');
    const allDiscography = await discographyRef.get();
    const album: any[] = [];
    allDiscography.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      if (doc.id === id) {
        album.push(doc.data());
      }
    });

    return album;
  };
}
