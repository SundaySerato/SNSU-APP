import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilestonePage } from './milestone.page';

describe('MilestonePage', () => {
  let component: MilestonePage;
  let fixture: ComponentFixture<MilestonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
