import { TestBed } from '@angular/core/testing';

import { TansferenciaService } from './tansferencia.service';

describe('TansfereciaService', () => {
  let service: TansferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TansferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
