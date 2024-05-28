import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto, UpdateBookDto } from './books.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Book[]> {
    return await this.prisma.book.findMany();
  }

  async create(bookDto: CreateBookDto): Promise<Book> {
    return await this.prisma.book.create({ data: bookDto });
  }

  async getOne(id: string): Promise<Book> {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async update(id: string, bookDto: UpdateBookDto): Promise<Book> {
    const book = await this.getOne(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return await this.prisma.book.update({
      where: { id },
      data: bookDto,
    });
  }

  async delete(id: string): Promise<Book> {
    const book = await this.getOne(id);

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return await this.prisma.book.delete({ where: { id } });
  }
}
