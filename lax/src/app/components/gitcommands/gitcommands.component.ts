import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gitcommands',
  templateUrl: './gitcommands.component.html',
  styleUrls: ['./gitcommands.component.scss']
})
export class GitcommandsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  branchCommands: any;
  basicGit: any;
  gitLog: any;
  replaceGit: any;

  dashboardTitle = 'Home';

  ngOnInit() {
    this.getJsonFile();
  }

  getJsonFile(){
    var url = 'src/app/gitData.json'
    this.http.get(url).subscribe((res:any) =>{
      console.log(res);
      this.branchCommands = res.branching_commands;
      this.basicGit = res.git_commands;
      this.gitLog = res.log_commands;
      this.replaceGit = res.replace_commands;
    });
  }
}
