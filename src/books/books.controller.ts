import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';
import { CreateBookDto, UpdateBookDto } from './books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Post()
  create(@Body() bookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(bookDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() bookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.booksService.update(id, bookDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Book> {
    return this.booksService.delete(id);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.getOne(id);
  }
}
