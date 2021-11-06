import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.private, BoardStatus.public];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value))
      throw new BadRequestException(`${value} isn't in the status options`);
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
