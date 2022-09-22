import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FridgeService } from './fridge.service';


describe('FridgeService', () => {
  let service: FridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        FridgeService
      ]
    });
    service = TestBed.inject(FridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
