import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditItemHomePage } from './edit-item-home.page';

describe('EditItemHomePage', () => {
  let component: EditItemHomePage;
  let fixture: ComponentFixture<EditItemHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditItemHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
