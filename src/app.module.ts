import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MovieModule } from './movie/movie.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [MovieModule, RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
