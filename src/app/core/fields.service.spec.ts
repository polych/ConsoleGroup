import { TestBed } from '@angular/core/testing';

import { FieldsService } from '../main-ui/fields.service';

describe('FieldsService', () => {
  let service: FieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
