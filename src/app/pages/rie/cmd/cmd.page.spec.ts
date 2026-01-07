import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmdPage } from './cmd.page';

describe('CmdPage', () => {
  let component: CmdPage;
  let fixture: ComponentFixture<CmdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
