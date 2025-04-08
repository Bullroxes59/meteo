import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfometeoComponent } from './infometeo.component';

describe('InfometeoComponent', () => {
  let component: InfometeoComponent;
  let fixture: ComponentFixture<InfometeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfometeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfometeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
