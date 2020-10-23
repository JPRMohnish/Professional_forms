function namefunction(){
    var name=document.forms["form"]["name"].value;
    console.log(name);
    console.log(name.length);
    var x=document.getElementById('name_error');
    if(name.length<=1){
        console.log(x);
        x.style.display="block";
        x.innerHTML="Name must have at least 3 characters."
        return false;
    }
    else {
        x.style.display="none";
        return true;
    }
}

function emailfunction(){
    var email=document.forms["form"]["email"].value;
    console.log(email);
    console.log(email.length);
    var x=document.getElementById('email_error');
    
    // validate the email here.
    var l=email.length;
    
    var f1=false,f2=false;
    if(l>=5){
        f1=true;
    }
    
    for(let i=0;i<l;i++){
        if(email.charAt(i)=='@'){
            f2=true;
        }
    }
    if(Boolean(f1&&f2)){
        x.style.display="none";
        return true;
    }
    else {
        x.style.display="block";
        x.innerHTML="Invalid Email"
        return false;
    }
}

function organisationfunction(){
    var name=document.forms["form"]["organisation"].value;
    console.log(name);
    console.log(name.length);
    var x=document.getElementById('organisation_error');
    if(name.length<=1){
        console.log(x);
        x.style.display="block";
        x.innerHTML="Organisation must have at least 3 characters."
        return false;
    }
    else {
        x.style.display="none";
        return true;
    }
}

function numberfunction(){
    var number=document.forms["form"]["number"].value;
    console.log(number);
    console.log(number.length);
    var x=document.getElementById('number_error');
    var l=number.length;
    var f1=true;
    var f2=true;
    var f3=true;
    if(l!=9){
        f1=false;
    }
    for(let i=0;i<l;i++){
        if(number.charAt(i)<'0'||number.charAt(i)>'9'){
            f2=false;
        }
    }
    if(number.charAt(0)<'6'){
        f3=false;
    }
    if(Boolean(f1&&f2&&f3)){
        x.style.display="none";// we can control css to with js.
        return true;
    }
    else {
        x.style.display="block";
        x.innerHTML="Exactly 10 digit valid number"
        return false;
    }
}


function valid_checkbox(){
    var day1=document.forms["form"]["DAY1"];
    var day2=document.forms["form"]["DAY2"];
    var day3=document.forms["form"]["DAY3"];
    var x=document.getElementById('check_error');
    if(day1.checked||day2.checked||day3.checked){
        x.style.display="none";
        return true;
    }
    else {
        x.style.display="block";
        x.innerHTML="At least one of three must be ticked";
        return false;
    }
}

function valid_radio(){
    var v1=document.getElementById("veg");
    var v2=document.getElementById("nonveg");
    var v3=document.getElementById("both");
    var x=document.getElementById('radio_error');
    if(v1.checked||v2.checked||v3.checked){
        x.style.display="none";
        return true;
    }
    else {
        x.style.display="block";
        x.innerHTML="Exactly one of three must be ticked";
        return false;
    }
}

function valid_menu(){
    var menu=document.getElementById("Attend");
    var x=document.getElementById("option_error");

    if(menu.selectedIndex==0){
        x.style.display="block";
        x.innerHTML="Exactly one of four must be selected";
        return false;
    }
    else {
        x.style.display="none";
        return true;
    }
}
function final_name(name){
    var x=document.getElementById('name_error');
    if(name.length<3){
        x.style.display="block";
        x.innerHTML="Organisation must have at least 3 characters."
        return false;
    }
    else {
    x.style.display="none";
    return true;
    }
}
function final_org(org){
    var x=document.getElementById('organisation_error');
    if(org.length<3){
        x.style.display="block";
        x.innerHTML="Organisation must have at least 3 characters."
        return false;
    }
    else {
        x.style.display="none";
        return true;
    }
}
function final_number(number){
    var l=number.length;
    var f1=true;
    var f2=true;
    var f3=true;
    if(l!=10){
        f1=false;
    }
    for(let i=0;i<l;i++){
        if(number.charAt(i)<'0'||number.charAt(i)>'9'){
            f2=false;
        }
    }
    var x=document.getElementById('number_error');
    if(number.charAt(0)<'6'){
        f3=false;
    }
    if(Boolean(f1&&f2&&f3)){
        x.style.display="none";
        return true;
    }
    else {
        x.style.display="block";
        x.innerHTML="Exactly 10 digit valid number"
        return false;
    }
}
function onSubmit(){
    var name=document.forms["form"]["name"].value;
    var email=document.forms["form"]["email"].value;
    var number=document.forms["form"]["number"].value;
    var org=document.forms["form"]["organisation"].value;
    
    var c1=true,c2=true,c3=true,c4=true,c5=true,c6=true,c7=true;
    c1=final_name(name);
    c2=final_number(number);
    c3=emailfunction();
    c4=final_org(org);
    c5=valid_checkbox();
    c6=valid_menu();
    c7=valid_radio();
    if(Boolean(c1&&c2&&c3&&c4&&c5&&c6&&c7))
        alert("All form details may be valid");
    else 
        alert("PLease enter valid details");
}