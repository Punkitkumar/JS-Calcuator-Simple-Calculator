var value = [];
function display(a){
    // var present = document.getElementById("textArea").value;
    // console.log("present: "+ present);
    // console.log("a: "+ a);
    
    // var newvalue = present + a;
    document.getElementById("textArea").value+=a;
    // console.log("New Value: "+newvalue);
}
function calculate(){
    var a =document.getElementById("textArea").value;
    var ans = eval(a);
    console.log("Calculated Value is : "+ans);
    document.getElementById("textArea").value=ans;

}
function clr(){
    document.getElementById("textArea").value ='';
}
document.addEventListener("keypress",function(event){
    var ky = event.key ;
    console.log(event.key);
    if(ky==='1' || ky ==='2' || ky ==='3'|| ky ==='4'|| ky ==='5'|| ky ==='6'|| ky ==='7' || ky ==='8' || ky ==='9' || ky ==='0' || ky ==='+' || ky ==='-' || ky ==='*' || ky ==='/' || ky ==='.'){
        display(ky);
    }
    if(ky==='delete'){
        clr();
    }
    if(ky==='=' || ky==='Enter'){
        calculate();
    }
});