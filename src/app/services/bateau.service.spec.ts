import { BateauService } from "./bateau.service";
import { TestBed } from "@angular/core/testing";

describe("AppareilsService", () => {
  let service: BateauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BateauService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
