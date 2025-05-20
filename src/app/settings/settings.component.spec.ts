import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular/standalone';
import { SettingsComponent } from './settings.component';
import { IonicModule } from '@ionic/angular';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let navCtrl: NavController;

  beforeEach(async () => {
    const navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateRoot']);
    await TestBed.configureTestingModule({
      imports: [IonicModule],
      providers: [{ provide: NavController, useValue: navCtrlSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    fixture.detectChanges();
  });

  it('should navigate to auth on logout', () => {
    spyOn(localStorage, 'removeItem');
    component.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('authToken');
    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/auth');
  });
});