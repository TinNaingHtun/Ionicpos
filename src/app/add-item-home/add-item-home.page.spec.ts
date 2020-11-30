import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddItemHomePage } from './add-item-home.page';

describe('AddItemHomePage', () => {
  let component: AddItemHomePage;
  let fixture: ComponentFixture<AddItemHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddItemHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
