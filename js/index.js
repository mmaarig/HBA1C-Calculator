function myFunction() {
  var avg = prompt("Please Enter Your Average mg/dl") //user input for Arithmetic Mean of test results in mg/dl
  var dcct = (Number(avg)+Number(46.7))/28.7
  dcct = dcct.toFixed(2) //limiting decimals to 2 digits
  //document.write("Your HBA1C is probably: ",dcct,"%<br><br>") //printing the Number
  document.getElementById("demo").innerHTML = "Your Hemoglobin A1C is probably: "+dcct+"%";
  }

  function myFunction2() {
    var avg2 = prompt("Please Enter Your HBA1C ") //user input for HBA1C result
    var mgdl = (28.7*avg2)-(Number(46.7))
    mgdl = mgdl.toFixed(0) //limiting decimals to 2 digits
    //document.write("Your HBA1C is probably: ",dcct,"%<br><br>") //printing the Number
    document.getElementById("demo2").innerHTML = "Your Average Blood Sugar in mg/dl is probably: "+mgdl;
    }

function myFunction3() {
    var basic = prompt("Please Enter Your Basic Salary ") //user input for Hourly Overtime result
    var ot = ((basic/26)/8)*(Number(2))
    ot = ot.toFixed(0) //limiting decimals to 2 digits
    //document.write("Your Overtime is probably: ",dcct,"%<br><br>") //printing the Number
    document.getElementById("demo3").innerHTML = "Your Overtime is probably: "+ot;
    }
