import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsInt()
  year: number;

  @IsString()
  genre: string;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  author: string;

  @IsOptional()
  @IsInt()
  year: number;

  @IsOptional()
  @IsString()
  genre: string;
}
