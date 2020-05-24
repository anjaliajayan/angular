import { TestBed } from '@angular/core/testing';

import { ExportReportService } from './export-report.service';

describe('ExportReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportReportService = TestBed.get(ExportReportService);
    expect(service).toBeTruthy();
  });
});
