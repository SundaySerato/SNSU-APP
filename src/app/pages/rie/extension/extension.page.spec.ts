import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtensionPage } from './extension.page';

describe('ExtensionPage', () => {
  let component: ExtensionPage;
  let fixture: ComponentFixture<ExtensionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
