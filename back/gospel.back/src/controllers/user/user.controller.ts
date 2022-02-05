import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserBusiness } from 'src/business/user/user.bl';
import { Users } from 'src/schemas/user/user.schema';
import { UserDTO } from 'src/schemas/user/user.DTO';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userBl: UserBusiness) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getAllUsers(): Promise<Users[]> {
    return await this.userBl.getAllUsers();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getUserById(@Param('id') id: string): Promise<Users> {
    return await this.userBl.getUserById(id);
  }

  @Post()
  async newUser(@Body() user: UserDTO): Promise<Users> {
    return await this.userBl.newUser(user);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Param('id') id: string,
    @Body() user: UserDTO,
  ): Promise<UserDTO> {
    return await this.userBl.updateUser(id, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.userBl.deleteUser(id);
  }
}
