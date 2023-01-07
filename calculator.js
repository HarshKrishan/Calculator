
$(document).ready(function () {
  let first = "_";
  let second = "_";
  let operator = "_";
  let equalpressed = false;
  let operatorpressed = false;
  let off = false;
  let on = true;
  const addition = function (a, b) {
    return a + b;
  };

  const subtract = function (a, b) {
    return a - b;
  };
  const multiply = function (a, b) {
    return a * b;
  };
  const divide = function (a, b) {
    return a / b;
  };

  $(".num").click(function () {
    if (equalpressed || operatorpressed) {
      $(".calculator-screen").empty();
      equalpressed = false;
      operatorpressed = false;
    }
    let num = $(this).text();
    // console.log(num);

    let txt = $(".calculator-screen").text();
    $(".calculator-screen").text(txt + num);
    if (operator == "_") {
      first = parseFloat(txt + num);
    } else {
      second = parseFloat(txt + num);
      console.log("second: " + second);
    }
  });
  $(".operator").click(function () {
    operatorpressed = true;
    operator = $(this).text();
    console.log(operator);
    $(".calculator-screen").text(operator);
  });
  $(".eq").click(function () {
    equalpressed = true;
    if (operator == "+" && first != "_" && second != "_") {
      console.log(first + " " + operator + " " + second);
      $(".calculator-screen").text(addition(first, second));
      first = "_";
      second = "_";
      operator = "_";
    } else if (operator == "-" && first != "_" && second != "_") {
      console.log(first + " " + operator + " " + second);
      $(".calculator-screen").text(subtract(first, second));
      first = "_";
      second = "_";
      operator = "_";
    } else if (operator == "*" && first != "_" && second != "_") {
      console.log(first + " " + operator + " " + second);
      $(".calculator-screen").text(multiply(first, second));
      first = "_";
      second = "_";
      operator = "_";
    } else if (operator == "/" && first != "_" && second != "_") {
      console.log(first + " " + operator + " " + second);
      if(second!=0)
      $(".calculator-screen").text(divide(first, second));
      else
      $(".calculator-screen").text("Not Allowed!");
      first = "_";
      second = "_";
      operator = "_";
    }
  });

  $(".all-clear").click(function () {
    $(".calculator-screen").empty();
  });

  

  $(".off").click(function () {
    if(off){
        // console.log("hi");
        $(".outer").removeClass("my-bg");
        $(".off").text("OFF");
        $(".calculator-screen").css("background-color", "black");
        $(".calculator-screen").css("justify-content", "end");
        $(".calculator-screen").empty();
        $(".calculator-screen").css("color", "white");
        $(".num").prop("disabled", false);
        $(".operator").prop("disabled", false);
        $(".decimal").prop("disabled", false);
        $(".all-clear").prop("disabled", false);
        $(".eq").prop("disabled",false);
        on = true;
        off = false;
    }else if(on){
      // console.log("hi");
      $(".outer").addClass("my-bg");
      $(".calculator-screen").css("background-color","yellow");
      $(".calculator-screen").css("justify-content", "center");
      $(".calculator-screen").html("<b>Please turn On first!</b>");
      
      $(".calculator-screen").css("color","red");
      $(".num").prop("disabled",true);
      $(".operator").prop("disabled",true);
      $(".decimal").prop("disabled", true);
      $(".all-clear").prop("disabled", true);
      
      $(".eq").prop("disabled", true);
      $(".off").text("ON");
      off = true;
      on = false;
    }
  
  });
});
