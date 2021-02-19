/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnswerService } from './answer.service';

describe('Service: Answer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerService]
    });
  });

  it('should ...', inject([AnswerService], (service: AnswerService) => {
    expect(service).toBeTruthy();
  }));
});
