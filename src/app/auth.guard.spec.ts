import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    router = TestBed.inject(Router);
  });

  it('should allow access if token exists', () => {
    spyOn(localStorage, 'getItem').and.returnValue('simulated-token');
    const result = authGuard({} as any, {} as any);
    expect(result).toBeTrue();
  });

  it('should redirect to auth if no token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const navigateSpy = spyOn(router, 'navigate');
    const result = authGuard({} as any, {} as any);
    expect(result).toBeFalse();
    expect(navigateSpy).toHaveBeenCalledWith(['/auth']);
  });
});