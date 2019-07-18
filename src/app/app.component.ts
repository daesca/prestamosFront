import {  HttpClient  } from '@angular/common/http'; 
import {  Component,    } from '@angular/core';
import {  NgForm      } from '@angular/forms';
import {  Router      } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){
    console.log(window.location.pathname);
    this.changeActives(window.location.pathname);
  }
  active1 : boolean = false;
  active2 : boolean = false;
  // errorText : string = "";
  // statusCall : boolean = false; 

  // public searchClient(f: NgForm){
    
  //   if(this.validateFormatField(f.value)){
  //     let url = "http://localhost:8080/client/store";
  //     if(this.postDataApi(url, f.value)){
  //       this.router.navigate(['loan']);
  //     }
  //   }else{
  //     return false;
  //   }

  // }

  // private getDataApi(url){
  //   this.httpClient
  //   .get(url)
  //   .subscribe(function (apiData:any){
  //     console.log(apiData);
  //     if(apiData.code == 100){
  //       alert("Funciono");
  //     }
  //   })
  // }

  // private postDataApi(url, fields){
  //   this.httpClient
  //   .post(url, fields)
  //   .subscribe(function(response:any){
  //     if(response.code == 100){
  //       this.statusCall = true;
  //     }else{
  //       alert(response.message);
  //     }
      
  //   })

  //   return this.statusCall;
  // }

  // public validateFormatField(fields){
  //   for(let i in fields){
  //     console.log(fields[i]);
  //     if(fields[i] == ''){
  //       this.errorText = "Los campos no deben estar vacios";
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  public changeActives(element : string){
    this.active1 = false;
    this.active2 = false;
    if(element == '/register' || element == 'register'){
      this.active1 = true;
    }else if(element == '/loan' || element == 'loan'){
      this.active2 = true;
    }
  }
}
