import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-crud';
  description='hvdcahvcsdjhvcvd'

  onhide(){
    this.title=""
  }
  onsee(){
    this.title="something!"
  }
  Days:string='monday'
  person={"name":"rohane","gender":"m"}
  wish='good morning bey!'
}
