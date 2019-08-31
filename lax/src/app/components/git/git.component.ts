import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

  constructor( private http:HttpClient) { }


  ngOnInit() {
    this.getJsonFile();
  }

  getJsonFile(){
    var url = 'src/app/gitData.json'
    this.http.get(url).subscribe((res:any) =>{
      console.log(res);
    });
  }
}
