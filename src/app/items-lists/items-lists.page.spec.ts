import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemsListsPage } from './items-lists.page';

describe('ItemsListsPage', () => {
  let component: ItemsListsPage;
  let fixture: ComponentFixture<ItemsListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
