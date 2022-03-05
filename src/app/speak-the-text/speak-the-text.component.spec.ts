import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakTheTextComponent } from './speak-the-text.component';

describe('SpeakTheTextComponent', () => {
  let component: SpeakTheTextComponent;
  let fixture: ComponentFixture<SpeakTheTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakTheTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakTheTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
