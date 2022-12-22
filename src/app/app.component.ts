import { asNativeElements, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'calculator';

  clearScreen(){
    (document.getElementById("result") as HTMLInputElement).value = "";

}

display(value:string){

  (document.getElementById("result") as HTMLInputElement).value += value;
}



keypress(e:any):void{
  console.log(typeof e)
  console.log(e)
  if(e.keyCode >= 97 && e.keyCode <= 122){
    e.preventDefault();
 
  }
  else if(e.keyCode >= 65 && e.keypress <= 96){
 e.preventDefault();
    
  }else{
  (document.getElementById("result") as HTMLInputElement).value = e.target.value;
  
}
}


 calculate = () => {
  let a = (document.getElementById("result") as HTMLInputElement).value 
  let b = eval(a).toFixed(2);
  let c = Math.abs((eval(a)));

  let afterval = b.substring(b.indexOf('.') + 1);
  if(afterval == 0o0){
   (document.getElementById("result") as HTMLInputElement as any).value  = c
  }else{
    (document.getElementById("result") as HTMLInputElement as any).value = b
  }
   console.log(b)

}

 
backspace(result:string){
    let ac:string = (document.getElementById("result") as HTMLInputElement).value;
    let b = ac.substring((ac.length -1),0);
    (document.getElementById("result") as HTMLInputElement).value = b
 }
}



