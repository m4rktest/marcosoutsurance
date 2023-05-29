import { Injectable } from "@angular/core";
import { Root } from "../model/topic";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  
  static readonly API_ENDPOINT = "https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=votes&site=stackoverflow"; // URL to web api

  constructor(private http: HttpClient) { }
  //----------------------------------------------------------------
  public getQuestions() {
    return this.http.get<Root>(ApiService.API_ENDPOINT);
  }
}
