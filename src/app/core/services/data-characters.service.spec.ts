import { TestBed } from "@angular/core/testing";

import { DataCharactersService } from "./data-characters.service";

describe("DataCharactersService", () => {
  let service: DataCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCharactersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
