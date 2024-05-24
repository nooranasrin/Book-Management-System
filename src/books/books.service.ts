import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  create(bookDto: {
    title: string;
    author: string;
    year: number;
    genre: string;
  }): Promise<Book> {
    return this.prisma.book.create({ data: bookDto });
  }

  update(
    id: string,
    bookDto: {
      title?: string;
      author?: string;
      year?: number;
      genre?: string;
    },
  ): Promise<Book> {
    return this.prisma.book.update({ where: { id }, data: bookDto });
  }

  getOne(id: string): Promise<Book> {
    return this.prisma.book.findFirst({ where: { id } });
  }
  delete(id: string): Promise<Book> {
    return this.prisma.book.delete({ where: { id } });
  }
}
