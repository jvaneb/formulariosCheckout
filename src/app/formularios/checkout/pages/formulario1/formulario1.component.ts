import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component {

  constructor(){}

  ngOnInit() {

  }

  ponerEspacios(e: any) {   
    if (e.target.value == e.target.lastValue) return;
    var caretPosition = e.target.selectionStart;
    var sanitizedValue = e.target.value.replace(/[^0-9]/gi, '');
    var parts = [];
    
    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
    }
    
    for (var i = caretPosition - 1; i >= 0; i--) {
        var c = e.target.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 4);
    
    e.taret.value = e.target.lastValue = parts.join(' ');
    e.target.selectionStart = e.target.selectionEnd = caretPosition;
    
  }

  formatString(e: any) {
    let inputChar = String.fromCharCode(e.keyCode);
    let code = e.keyCode;
    let allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    e.target.value = e.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
    
  }

  soloNumeros(e: any) {
    
    // code is the decimal ASCII representation of the pressed key.
			let code = (e.which) ? e.which : e.keyCode;
			
			if(code==8) { // backspace.
			  return true;
			} 
      else if(code>=48 && code<=57) { // is a number.
			  return true;
			} 
      else{ // other keys.
			  return false;
			}
  }
}

