import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyLibAComponent } from './my-lib-a.component';

describe('MyLibAComponent', () => {
  let component: MyLibAComponent;
  let fixture: ComponentFixture<MyLibAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyLibAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
