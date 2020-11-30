import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateItemsPage } from './update-items.page';

describe('UpdateItemsPage', () => {
  let component: UpdateItemsPage;
  let fixture: ComponentFixture<UpdateItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
