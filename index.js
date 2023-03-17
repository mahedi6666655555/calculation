function mahedi() {
  let inputField1 = document.getElementById("input1");
  let tt = inputField1.value;
  

  let forFloting = parseFloat(tt);
// forFloting=""
  let inputField2 = document.getElementById("input2");
  let tt2 = inputField2.value;
  

  let forFlotin2 = parseFloat(tt2);
// forFlotin2=""

  let total2 = forFloting + forFlotin2;

  let get1 = document.getElementById("mm");

  get1.innerText = total2;
}
