import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfovilleComponent } from './infoville.component';

describe('InfovilleComponent', () => {
  let component: InfovilleComponent;
  let fixture: ComponentFixture<InfovilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfovilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfovilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
