import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatconfiramationComponent } from './matconfiramation.component';

describe('MatconfiramationComponent', () => {
  let component: MatconfiramationComponent;
  let fixture: ComponentFixture<MatconfiramationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatconfiramationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatconfiramationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
