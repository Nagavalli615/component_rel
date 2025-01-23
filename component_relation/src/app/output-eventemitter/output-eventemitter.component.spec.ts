import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEventemitterComponent } from './output-eventemitter.component';

describe('OutputEventemitterComponent', () => {
  let component: OutputEventemitterComponent;
  let fixture: ComponentFixture<OutputEventemitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputEventemitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEventemitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
