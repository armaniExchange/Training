console.log(`line1
line2
    line3
          line4
  line5`);

console.log(`-------------`);

let var1 = "aaa";
let var2 = "bbb";
console.log(`line1
line2 ${var1}
    line3
  ${var2}        line4
  line5`);



let var3 = {aaa:'aaa1', bbb:'bbb1'};
console.log(`line1
line2 ${var3.aaa}
    line3
  ${var3.bbb}        line4
  line5`);

function fn0(str){
  return str;
}
console.log(fn0`aaaa11111`);
function fn1(str){
  var str = str[0];
  return str;
}
console.log(fn1`aaaa2222222`);
function fn2(str){
  return str;
}
console.log(fn2(`aaaa333333`));


//----------------------------------------
function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

var bonk = {
    sender: "Hacker Steve <script>alert('xss');</script>"
};

console.log(SaferHTML`<p>${bonk.sender} sent you a bonk.</p>`);
