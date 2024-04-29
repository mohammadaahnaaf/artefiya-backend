
import { Module } from '@nestjs/common';
import { UserModule, AuthModule } from '@artefiya/modules';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
