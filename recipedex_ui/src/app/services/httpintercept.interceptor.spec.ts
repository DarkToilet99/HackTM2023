import { TestBed } from '@angular/core/testing';

import { HttpinterceptInterceptor } from './httpintercept.interceptor';

describe('HttpinterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpinterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpinterceptInterceptor = TestBed.inject(HttpinterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
