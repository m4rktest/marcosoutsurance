import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ApiService } from './services/api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpCtrl: HttpTestingController;

  const Question_rsp = [
    {
      tags: ["PHYTON",".NET"],
      owner: "testuser2",
      is_answered: true,
      view_count: 35,
      protected_date: 10,
      accepted_answer_id: 2,
      answer_count: 23,
      score: 250,
      last_activity_date: 5,
      creation_date: Date.now(),
      last_edit_date: Date.now(),
      question_id: 23,
      content_license: "CC BY-SA 4.0",
      link: "https://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-processing-an-unsorted-array",
      title: "TOPIC2",
      community_owned_date: 23
    },
    {
      tags: ["Ruby","C++"],
      owner: "testuser",
      is_answered: true,
      view_count: 15,
      protected_date: 10,
      accepted_answer_id: 2,
      answer_count: 20,
      score: 2503,
      last_activity_date: 5,
      creation_date: Date.now(),
      last_edit_date: Date.now(),
      question_id: 23,
      content_license: "CC BY-SA 4.0",
      link: "https://stackoverflow.com/questions/292357/what-is-the-difference-between-git-pull-and-git-fetch",
      title: "TOPIC2",
      community_owned_date: 23
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return questions from Http Get call.', () => {
    service.getQuestions()
      .subscribe({
        next: (response) => {
          expect(response).toBeTruthy();
          
        }
      });

    const mockHttp = httpCtrl.expectOne(ApiService.API_ENDPOINT);
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual("GET");

    mockHttp.flush(Question_rsp);
  });

  it('Should return error message for stack API Http request.', () => {
    service.getQuestions()
    .subscribe({
        error: (error) => {
          expect(error).toBeTruthy();
          expect(error.status).withContext('status').toEqual(401);
        }
    });

    const mockHttp = httpCtrl.expectOne(ApiService.API_ENDPOINT);
    const httpRequest = mockHttp.request;

    mockHttp.flush("error request", { status: 401, statusText: 'Unathorized access' });
  });
});