import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

  constructor( private http:HttpClient) { }

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

  onClickHome(){
    this.dashboardTitle = 'Home';
  }
  onClickAbout(){
    this.dashboardTitle = 'About';
  }
  onClickContact(){
    this.dashboardTitle = 'Contact';
  }
  onClickGit(){
    this.dashboardTitle = 'GIT';
  }
  onClickNPM(){
    this.dashboardTitle = 'NPM';
  }

}
