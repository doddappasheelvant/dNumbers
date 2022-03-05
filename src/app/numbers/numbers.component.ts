import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  title = 'dNumbers';
  constructor( ) {
    this.startNum = 0;
    this.endNum = 100;
    this.speed = 10;
    this.COLOR_FREQ  = 10;
  }

  public startNum:number;
  public endNum:number;
  public speed:number;
  public outputnum:number;
  public myTimerUpCounter;
  public myTimerDownCounter;
  public myTimerPrimeCounter;
  public counter: number;
  public COLOR_FREQ;
  public numType = {"regular": 0, "odd" : 1, "even": 2, 'square':3, 'cube': 4, 'Fibb': 5};

  public textNumbers = {1: "Ones", 10: "Tens", 100: "Hundreds", 1000:"Thousands", 
                        10000: "Ten Thousands", 100000:" Hundred Thousands",
                        1000000: "Millions", 10000000:"Ten Millions", 100000000: "Hundred Millions",
                        1000000000: "Billions", 10000000000: "Ten Billions", 100000000000: "Hundred Billions",
                        1000000000000: "Trillions", 10000000000000: "Ten Trillions", 100000000000000: "Hundred Trillions"};

  public fontFamilyList = ["Candara",
                            "Arial, Helvetica, sans-serif",
                            "Lucida Console, Courier New, monospace",
                            "'Brush Script MT', cursiv",
                            "serif",
                            "fantasy",
                            "system-ui",
                            "fangsong",
                            "math",
                            "Impact"
                          ];

  sequenceNumUp = () => {
    this.numbersCreator( );
  }
  oddNumbers = () => {
    this.numbersCreator(this.numType.odd );
  }
  evenNumbers = () => {
    this.numbersCreator(this.numType.even );
  }
  SquareNumbers = () =>{
    this.numbersCreator2(this.numType.square );
  }
  CubeNumbers = () =>{
    this.numbersCreator2(this.numType.cube );
  }
  FibbNumbers = () =>{
    this.numbersCreator2(this.numType.Fibb );
  }
  
  numbersCreator2 = (nType = this.numType.square) => {

    var seqCounter = this.startNum;
    var fontCounter = 0;  
    var startTime = performance.now();
    this.outputnum = this.startNum;
    var allNumbers = "";
    var F0 = 0;
    var F1 = 1;

    console.log ("inside sequence num function", this.startNum, this.endNum, this.outputnum, this.speed);
    var x = document.getElementById("cunterId");
    
    this.stopSequnce();
    const updateCount = () => {
      if(seqCounter <= this.endNum){
        if (this.numType.square == nType) {
          this.outputnum = seqCounter * seqCounter;
          x.innerText = seqCounter + "² : " + this.outputnum.toString();
        } 
        else if (this.numType.cube == nType) {
          this.outputnum = seqCounter * seqCounter * seqCounter; 
          x.innerText = seqCounter + "³ : " + this.outputnum.toString();
        }
        else if (this.numType.Fibb = nType){
          if (seqCounter > 1){
              var tem = F1;
              F1 = F0 + F1;
              F0 = tem;
              x.innerText = F1.toString();
          } else {
            x.innerText = seqCounter.toString();
          }
        }
        if(seqCounter % (this.endNum/this.COLOR_FREQ) == 0){
          document.getElementById('cunterId').style.color = this.getRandomColor();
          x.style.fontFamily = this.fontFamilyList[fontCounter];
          fontCounter++;
        }
        
        allNumbers = allNumbers + ", " + x.innerText;
        document.getElementById("allNumbersId").innerText = allNumbers; 
        var endTimer = performance.now();
        var diff = (endTimer - startTime)/1000;
        document.getElementById("timerId").innerText = diff.toFixed(2).toString() + " secs";

        this.myTimerUpCounter = setTimeout(updateCount, this.speed);
      }
      seqCounter++;
    }
    updateCount();
  }

  numbersCreator = (nType = this.numType.regular) => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    var seqCounter = this.startNum;
    var fontCounter = 0;  
    var startTime = performance.now();
    this.outputnum = this.startNum;
    var allNumbers = this.outputnum.toString();
    if(((this.numType.odd == nType) && this.startNum%2 == 0) ||this.numType.square == nType||this.numType.cube == nType) {
      this.outputnum ++;
    }
    console.log ("inside sequence num function", this.startNum, this.endNum, this.outputnum, this.speed);
    var x = document.getElementById("cunterId");
    
    this.stopSequnce();
    const updateCount = () => {
      if(this.outputnum <= this.endNum){
        if(this.textNumbers.hasOwnProperty(this.outputnum)){
          document.getElementById("textNumberId").innerText = this.textNumbers[this.outputnum];
        }
        x.innerText = formatter.format(this.outputnum).slice(1);
        this.myTimerUpCounter = setTimeout(updateCount, this.speed);

        allNumbers = allNumbers + ", " + x.innerText;
        document.getElementById("allNumbersId").innerText = allNumbers;    

        if((this.numType.odd == nType) || (this.numType.even == nType)){
          this.outputnum = this.outputnum + 2;
        }
        else if (this.numType.square == nType) {
          this.outputnum = this.outputnum + this.outputnum;
        } 
        else if (this.numType.cube == nType) {
          this.outputnum = this.outputnum + this.outputnum; 
        }
        else
          this.outputnum = this.outputnum + 1;

        if(this.outputnum % (this.endNum/this.COLOR_FREQ) == 0){
          document.getElementById('cunterId').style.color = this.getRandomColor();
          x.style.fontFamily = this.fontFamilyList[fontCounter];
          fontCounter++;
        }
        var endTimer = performance.now();
        var diff = (endTimer - startTime)/1000;
        document.getElementById("timerId").innerText = diff.toFixed(2).toString() + " secs";
      }
      seqCounter++;
    }
    updateCount();
  }

  sequenceNumDown = () => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    
    var fontCounter = 0;  
    var startTime = performance.now();
    this.outputnum = this.endNum;
    var allNumbers = this.outputnum.toString();
    console.log ("inside sequence num function", this.startNum, this.endNum, this.outputnum, this.speed);
    var x = document.getElementById("cunterId");
    
    this.stopSequnce();
    const updateCount = () => {
      if(this.outputnum > this.startNum){
        this.outputnum = this.outputnum - 1;
        if(this.textNumbers.hasOwnProperty(this.outputnum)){
          document.getElementById("textNumberId").innerText = this.textNumbers[this.outputnum];
        }
        x.innerText = formatter.format(this.outputnum).slice(1);
        allNumbers = allNumbers + ", " + x.innerText;
        document.getElementById("allNumbersId").innerText = allNumbers;

        this.myTimerUpCounter = setTimeout(updateCount, this.speed); 

        if(this.outputnum % (this.endNum/this.COLOR_FREQ) == 0){
          document.getElementById('cunterId').style.color = this.getRandomColor();
          x.style.fontFamily = this.fontFamilyList[fontCounter];
          fontCounter++;
        }
        var endTimer = performance.now();
        var diff = (endTimer - startTime)/1000;
        document.getElementById("timerId").innerText = diff.toFixed(2).toString() + " secs";
      }
    }
    updateCount();
  }

  primeNumbers = () => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    var fontCounter = 0;  
    var startTime = performance.now();
    this.outputnum = this.startNum;
    var allNumbers = "";
    console.log ("inside prime num function", this.startNum, this.endNum, this.outputnum, this.speed);
    var x = document.getElementById("cunterId");
    
    this.stopSequnce();
    const updateCount = () => {
      document.getElementById("textNumberId").innerText ="";
      if(this.outputnum < this.endNum){
        if(this.isPrimeNum(this.outputnum)){
          x.innerText = formatter.format(this.outputnum).slice(1);
          allNumbers = allNumbers + ", " + x.innerText;
          document.getElementById("allNumbersId").innerText = allNumbers;
          this.myTimerPrimeCounter = setTimeout(updateCount, this.speed);
        }
        else
          this.myTimerPrimeCounter = setTimeout(updateCount,0);

        if(this.outputnum % (this.endNum/this.COLOR_FREQ) == 0){
          document.getElementById('cunterId').style.color = this.getRandomColor();
          x.style.fontFamily = this.fontFamilyList[fontCounter];
          fontCounter++;
        }
        var endTimer = performance.now();
        var diff = (endTimer - startTime)/1000;
        document.getElementById("timerId").innerText = diff.toFixed(2).toString() + " secs";
        this.outputnum = this.outputnum +1;
      }
    }
    updateCount();
  }

  isPrimeNum = (n) => {
    if(n===2)
    return true;
    if (!Number.isInteger(n) || n<2 || !(n%2)){
      return false;
    }
    for (let i = 3; i<= Math.sqrt(n); i++, i++){
      if(n%i ===0){
        return false;
      }
    }
    return true;
  }

  stopSequnce = () => {
    clearTimeout(this.myTimerUpCounter);
    clearTimeout(this.myTimerDownCounter);
    clearTimeout(this.myTimerPrimeCounter);
  }
  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    //color = '#fffff';
    return color;
  }

  ngOnInit(): void {
  }

}
