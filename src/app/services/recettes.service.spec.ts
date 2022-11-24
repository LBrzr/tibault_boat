import { RecettesService } from './recettes.service';
import { TestBed } from '@angular/core/testing';

describe('AppareilsService', () => {
  let service: RecettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
