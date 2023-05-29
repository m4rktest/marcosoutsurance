import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../app/services/api.service";
import { Root } from "../../app/model/topic";
import { Observable } from "rxjs";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.css"],
})
export class TopicComponent implements OnInit {
  
  dataList!: any[];
  panelOpenState = false;
  constructor(private apiservice: ApiService) {
   
  }

  ngOnInit() {
    
    this.apiservice.getQuestions().subscribe(res => {
        
        console.log(res['items']);

        this.dataList=res.items;
    
    });
   
    
  }
}

