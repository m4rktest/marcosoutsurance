import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TopicComponent } from './components/topics.component';
import { HttpClientModule } from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule,MatToolbarModule
      ],
      declarations: [
        AppComponent,
        TopicComponent,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'technical-outsurance'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('technical-outsurance app is running!');
  });

});
