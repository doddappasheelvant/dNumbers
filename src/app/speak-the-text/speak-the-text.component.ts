import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speak-the-text',
  templateUrl: './speak-the-text.component.html',
  styleUrls: ['./speak-the-text.component.css']
})
export class SpeakTheTextComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }
  public startNum:number;
  public endNum:number;
  public speed:number;
  public outputnum:number;
  public skip: number;
  public myTimerUpCounter;
  public txtInput;
  public voiceList;
  public items = [
    ['0', "Zero"], ['1', "one"], ['2', "Two"], ['3', "Three"], ['4', "Four"],
    ['5', "Five"], ['6', "Six"], ['7', "Seven"], ['8', "Eight"], ['9', "Nine"],

    ['10', "Ten"], ['20', "Twenty"], ['30', "Thirty"], ['40', "Fourty"], ['50', "Fifty"],
    ['60', "Sixty"], ['70', "Seventy"], ['80', "Eighty"], ['90', "Ninety"], ['100', "Hundered"],
    
    ['1000', "Thousand"], ['10000', "Ten Thousand"], ['100000', "Hundred Thousand"],
    ['1000000', "One Million"],  ['10000000', "Ten Million"], ['100000000', "Hundred Million"],
    ['1000000000', "Billion"], ['10000000000', "ten Billion"], ['100000000000', "Hundred Billion"],
    ['1000000000000', "Trillion"], 
    ['1000000000000000', "Quardrillions"],
    ['1000000000000000000', "Quintillions"],
    ['1000000000000000000000', "Sextillions"],
    ['1000000000000000000000000', "Septillions"],
    ['1000000000000000000000000000', "Octillions"],
    ['1000000000000000000000000000000', "Nonillions"],
    ['1000000000000000000000000000000000', "Decillions"],
    ['1000000000000000000000000000000000000', "Undecillions"],
    ['1000000000000000000000000000000000000000', "Duodecillions"],
    ['1000000000000000000000000000000000000000000', "Quattordecillions"],
    ['10000000000000000000000000000000000000000000000', "Quindecillions"],
    ['10000000000000000000000000000000000000000000000000', "Sexdecillions"],
    ['10000000000000000000000000000000000000000000000000000', "Septendecillions"],
    ['10000000000000000000000000000000000000000000000000000000', "Octodecillions"],
    ['10000000000000000000000000000000000000000000000000000000000', "Novemdecillions"],
    ['10^63', "Vigintillions"],
    ['10^93', "Trigintillions"],
    ['10^100', "Googol"],
    ['10^123', "Quadragintillions"],
    ['10^153', "Quinquagintillions"],
    ['10^183', "Sexagintillions"],
    ['10^213', "Septuagintillions"],
    ['10^243', "Octogintillions"],
    ['10^273', "Nonagintillions"],

    ['10^303', "Centillion"],
    ['10^603', "Ducentillions"],
    ['10^903', "Trucentillions"],
    ['10^1203', "Quadringentillion"],
    ['10^1503', "Quingentillion"],
    ['10^1803', "Sescentillion"],
    ['10^2103', "Septingentillion"],
    ['10^2403', "Octingentillion"],
    ['10^2703', "Nongentillion"],
    ['10^3003', "Millillion"],
    ['10^30,003', "Decimillillion"],
    ['10^300,003', "Centimillillion"],
    ['10^3,000,003', "Micrillion"],
    ['10^30,000,003', "Decimicrillion"],
    ['10^300,000,003', "Centimicrillion"],
    ['10^3,000,000,003', "Nanillion"],
    ['10^3,000,000,000,003', "Pecillion"],
    ['10^3,000,000,000,000,000,003', "Attillion"],
    ['10^3,000,000,000,000,000,000,003', "Zeptillion"],
    ['10^3,000,000,000,000,000,000,000,003', "Yoctillion"],
    ['10^3,000,000,000,000,000,000,000,000,003', "Xonillion"],

    ['10^(3x10^30+3)', "Vecillion"],
    ['10^(3x10^33+3)', "Mecillion"],
    ['10^(3x10^36+3)', "Duecillion"],
    ['10^(3x10^39+3)', "Trecillion"],
    ['10^(3x10^42+3)', "Tetrecillion"],
    ['10^(3x10^45+3)', "Pentecillion"],
    ['10^(3x10^48+3)', "Hexecillion"],
    ['10^(3x10^51+3)', "Heptecillion"],
    ['10^(3x10^54+3)', "Octecillion"],
    ['10^(3x10^57+3)', "Ennecillion"],
    ['10^(3x10^60+3)', "Icosillions"],
    ['10^(3x10^120+3)', "Tetracontillion"],
    ['10^(3x10^150+3)', "Pentacontillion"],
    ['10^(3x10^180+3)', "Hexacontillion"],
    ['10^(3x10^210+3)', "Heptacontillion"],
    ['10^(3x10^240+3)', "Octacontillion"],
    ['10^(3x10^270+3)', "Ennacontillion"],
    ['10^(3x10^300+3)', "Hectillion"],

    ['10^(10^3000+3)', "Killillion"],
    ['10^(10^(3x10^6)+3)', "Megillion"],
    ['10^(10^(3x10^9)+3)', "Gigillion"],
    ['10^(10^(3x10^12)+3)', "Terillion"],
    ['10^(10^(3x10^15)+3)', "Petillion"],
    ['10^(10^(3x10^18)+3)', "Exillion"],
    ['10^(10^(3x10^21)+3)', "Zettillion"],
    ['10^(10^(3x10^24)+3)', "Yottillion"],
    ['10^(10^(3x10^27)+3)', "Xennillion"],
    ['10^(10^(3x10^30)+3)', "Dakillion"],
    ['10^(10^(3x10^33)+3)', "Hendillion"],
    ['10^(10^(3x10^60)+3)', "Ikillion"],
    ['10^(10^(3x10^90)+3)', "Trakillion"],

    ['10^(10^(3x10^120)+3)', "Tekillion"],
    ['10^(10^(3x10^150)+3)', "Pekillion"],
    ['10^(10^(3x10^180)+3)', "Exakillion"],
    ['10^(10^(3x10^210)+3)', "Zakillion"],
    ['10^(10^(3x10^240)+3)', "Yokillion"],
    ['10^(10^(3x10^270)+3)', "Nekillion"],
    ['10^(10^(3x10^300)+3)', "Hotillion"],

    ['10^(10^(3x10^3000)+3)', "Kalillion"],
    ['10^(10^(3x10^3000000)+3)', "Mejilillion"],
    ['10^(10^(3x10^3000000000)+3)', "Gejilillion"],

    ['10^(10^(3x10^(3x10^12)+3)', "Astillion"],
    ['10^(10^(3x10^(3x10^15)+3)', "Lunillion"],
    ['10^(10^(3x10^(3x10^18)+3)', "Fermillion"],
    ['10^(10^(3x10^(3x10^21)+3)', "Jovillion"],
    ['10^(10^(3x10^(3x10^24)+3)', "Solillion"],
    ['10^(10^(3x10^(3x10^27)+3)', "Betillion"],
    ['10^(10^(3x10^(3x10^30)+3)', "Glocillion"],
    ['10^(10^(3x10^(3x10^33)+3)', "Gaxillion"],
    ['10^(10^(3x10^(3x10^36)+3)', "Supillion"],
    ['10^(10^(3x10^(3x10^39)+3)', "Versillion"],
    ['10^(10^(3x10^(3x10^42)+3)', "Multillion"],

    ["Graham's Number", "Graham's Number"],
    ["Tritar", "Tritar"],
    ["Rayos Number", "Rayos Number"],
    ["Fish Number", "Fish Number"],
    ["Infinity", "Infinity"]

  ];

  Speak = () => {
    this.stopSequnce();
    if (!this.txtInput){
      this.txtInput = "please enter text";
    }

    let utterance = new SpeechSynthesisUtterance(this.txtInput);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  }

  Numbers_0_to_10 = () => {
    this.numbersCreator(0,10, 1500);
  }
  Numbers_10_to_100 = () => {
    this.numbersCreator(10,100, 1500, 10);
  }
  Numbers_Infinity = () => {

    var numDigit;
    var numString;
    var counter = 0;
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    var counterDigit = document.getElementById("counterId");
    var counterText = document.getElementById("counterTextId");
    this.stopSequnce();
    var startTime = performance.now();

    const updateCount = () => {
      this.stopSequnce();
      if(counter < this.items.length){
        numDigit = this.items[counter][0];
        numString = this.items[counter][1];
        console.log(numString.length);
        //console.log(this.items[counter], this.items.length);
        if(isNaN(numDigit)){
          counterDigit.innerText = numDigit; 
          }
        else{
          counterDigit.innerText = formatter.format(numDigit).slice(1); 
        }
        counterText.innerText = numString;
        let utterance = new SpeechSynthesisUtterance(numString);
        speechSynthesis.speak(utterance);
        this.myTimerUpCounter = setTimeout(updateCount, 500 + numString.length*100);
        counter ++;

        var endTimer = performance.now();
        var diff = (endTimer - startTime)/1000;
        document.getElementById("timerId").innerText = diff.toFixed(2).toString() + " secs";
      }
    }
    updateCount();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  numbersCreator = ( startNum, endNum, speed, skip = 1) => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    this.outputnum = startNum;
    var x = document.getElementById("counterId");
    this.stopSequnce();

    const updateCount = () => {
      if(this.outputnum <= endNum){
        x.innerText = formatter.format(this.outputnum).slice(1);
        let utterance = new SpeechSynthesisUtterance(this.outputnum.toString());
        speechSynthesis.speak(utterance);
        this.myTimerUpCounter = setTimeout(updateCount, speed);
        this.outputnum = this.outputnum + 1*skip;
      }
    }
    updateCount();
  }
  stopSequnce = () => {
    clearTimeout(this.myTimerUpCounter);
    var synth = window.speechSynthesis;
    synth.cancel();
  }
  cancelSpeak = () =>{
    this.stopSequnce();
  }
}
