import { TestBed } from '@angular/core/testing';

import { ArticuloserService } from './articuloser.service';

describe('ArticuloserService', () => {
  let service: ArticuloserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuloserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
