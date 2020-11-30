import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalPricePage } from './total-price.page';

describe('TotalPricePage', () => {
  let component: TotalPricePage;
  let fixture: ComponentFixture<TotalPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
