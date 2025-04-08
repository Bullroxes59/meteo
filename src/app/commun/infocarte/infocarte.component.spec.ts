import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocarteComponent } from './infocarte.component';

describe('InfocarteComponent', () => {
  let component: InfocarteComponent;
  let fixture: ComponentFixture<InfocarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfocarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfocarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
