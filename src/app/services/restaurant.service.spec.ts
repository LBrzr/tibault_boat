import { RestaurantService } from "./restaurant.service";
import { TestBed } from "@angular/core/testing";

describe("AppareilsService", () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
