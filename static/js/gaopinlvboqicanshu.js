function perRound(num, precision) {

var precision = 3; //default value if not passed from caller, change if desired

// remark if passed from caller

precision = parseInt(precision); // make certain the decimal precision is an integer

  var result1 = num * Math.pow(10, precision);

  var result2 = Math.round(result1);

  var result3 = result2 / Math.pow(10, precision);

  return zerosPad(result3, precision);

}



function zerosPad(rndVal, decPlaces) {

  var valStrg = rndVal.toString(); // Convert the number to a string

  var decLoc = valStrg.indexOf("."); // Locate the decimal point

  // check for a decimal 

  if (decLoc == -1) {

      decPartLen = 0; // If no decimal, then all decimal places will be padded with 0s

      // If decPlaces is greater than zero, add a decimal point

      valStrg += decPlaces > 0 ? "." : "";

  }

  else {

      decPartLen = valStrg.length - decLoc - 1; // If there is a decimal already, only the needed decimal places will be padded with 0s

  }

   var totalPad = decPlaces - decPartLen;    // Calculate the number of decimal places that need to be padded with 0s

  if (totalPad > 0) {

      // Pad the string with 0s

      for (var cntrVal = 1; cntrVal <= totalPad; cntrVal++) 

          valStrg += "0";

      }

  return valStrg;

}

// send the value in as "num" in a variable

// clears field of default value

function clear_field(field) {

	if (field.value==field.defaultValue) {

		field.value=''

	}

}



function init() {

 t=""; bg = 0; info = 0; m = 1000000; fa = 100; fb = fa;

 La = "  La "; Lb = "  Lb "; Ca = "  Ca "; Cb = "  Cb "; Cc="  Cc ";

 display();

}



function display() {

t = "";

pr(" ");

pr(" ");

pr(" ");

pr("        高频滤波器电路\r\n ");

pr(" ");

pr("          "+La+"         "+Lb);

pr("    +--+--(((((((--+--(((((((---+--+");

pr("      _|_         _|_          _|_");

pr(" R in ~|~         ~|~          ~|~  R out");

pr("       |           |            |");

pr("    +--+-----------+------------+--+");

pr("    "+Ca+"      "+Cb+"       "+Cc);



}

function pr(text) {

 t = ""+t+text+"\r\n";

 document.filter.screen.value=t;

}

function calc() {

 f = document.filter.freq.value;

 rin = document.filter.Rin.value;

 ro = document.filter.Rout.value;

 fac = document.filter.Qf.value;

 if((f =="") || (rin =="") || (ro =="") || (fac =="")) return;

 f = parseFloat(f); rin = parseFloat(rin); ro = parseFloat(ro);

 qf = parseInt(fac,10);

 xcb = ro;

 xca = rin * Math.sqrt((ro/rin)/(((qf*qf)+1)-(ro/rin)));

 xla = ((qf*ro)+((rin*ro)/xca))/((qf*qf)+1);

 xcc = ro/qf;

 xcd = ro * Math.sqrt(1/(qf*qf));

 xlb = ((qf*ro)+((ro*ro)/xcb))/((qf*qf)+1);

 La = xla/(6.284*f); 

 if(La < 1) fa = fa*100; 

 La = (parseInt((La*fa)+0.5)/fa) + " uH";

 Lb = xlb/(6.284*f);

 if(Lb < 1) fb = fb*100;

 Lb = (parseInt((Lb*fb)+0.5)/fb) + " uH";

 fa = 100; fb = fa;

 with(Math) {   

    Ca = (ceil(m/(6.284*f*xca))) + " pF";

    Cb1 = ceil(m/(6.284*f*xcb));

    Cb2 = ceil(m/(6.284*f*xcc));

    Cc  = (ceil(m/(6.284*f*xcd))) + " pF";

 }

 Cb  = (Cb1 + Cb2) + " pF";

 display(); info = 1;

}
