import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    nameState =false;
    passwordState=false;
  constructor(private auth:AuthService,
    private router:Router) { }

  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    password: new FormControl('',[Validators.required,,Validators.minLength(4),Validators.maxLength(10)]),
  });
  get name() { return this.profileForm.get('name'); }
  get password() { return this.profileForm.get('password'); }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.profileForm.value);
    this.auth.login(this.profileForm.value).subscribe(data=>{
      
      if(data['completed']=== true){
        // go to todo
        this.router.navigateByUrl('/todo');
      }else if (data['err']==='name'){
         
        this.nameState = true;
      }else{
        this.passwordState= true;
      }
    })
  }

}
