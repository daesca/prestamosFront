import { Component, OnInit } from '@angular/core';
import {  HttpClient  } from '@angular/common/http'; 
import {  NgForm      } from '@angular/forms';
import {  Router      } from '@angular/router'; 
import { ServiceSettings } from '../../../config/ServiceSettings';

@Component({
  selector: 'app-bank-loan',
  templateUrl: './bank-loan.component.html',
  styleUrls: ['./bank-loan.component.css']
})
export class BankLoanComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) {  
  }

  ngOnInit() {
  }
  errorText : string = "";
  showPreload : boolean = false;
  show : boolean= false;
  display : string = 'none';
  modalTextOptions : Object = {
    title: '',
    mainText: ''
  }

  public verifyLoan(f: NgForm){
    if(this.validateFormatField(f.value)){
      let url = ServiceSettings.ROOT_URL_SERVICE + "loan/verify";
      this.postDataApi(url, f.value)
    }
  }

  private postDataApi(url, fields){
    this.showPreload = true;
    this.httpClient
    .post(url, fields)
    .subscribe((response:any)=>{
      this.showPreload = false;
      if(response.code == 100){
        this.setModalTitleOptions('¡Felicidades!', response.message);
      }else{
        this.setModalTitleOptions('¡Algo ha fallado!', response.message);
      }
      this.openModal();
    })
  }

  public validateFormatField(fields){
    for(let i in fields){
      if(fields[i] == ''){
        this.errorText = "Los campos no deben estar vacios";
        return false;
      }
    }
    this.errorText ='';
    return true;
  }

  public openModal(){
    this.show = true;
    this.display = 'block'; 
  }
  public closeModal(){
    this.show = false;
    this.display = 'none';
  }

  public setModalTitleOptions(vl : string, txt : string){
    this.modalTextOptions['title']= vl;
    this.modalTextOptions['mainText']= txt;
  }


}
