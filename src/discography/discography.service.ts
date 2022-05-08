import { Injectable, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Firestore } from '@google-cloud/firestore';

@Injectable()
export class DiscographyService {

    this.firestore = Firestore
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

    this.client = new PubSub({
      projectId: configService.get<string>('pubsub.projectId'),
      credentials: credentialJson,
    });

    this.subscription = configService.get<string>('pubsub.subscriptionName');
    this.timeout = parseInt(configService.get<string>('timeout'));

    this.firestore = new Firestore({
      projectId: configService.get<string>('pubsub.projectId'),
      credentials: credentialJson,
    });
  }

  getDiscographyById = () => {};
}
