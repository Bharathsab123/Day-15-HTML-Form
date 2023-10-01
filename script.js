
let container=document.createElement("div");
container.setAttribute("class","container");


let heading =document.createElement("h2")
heading.innerHTML="HTML FORM"
heading.setAttribute("id","head")

let all=document.createElement("div")
all.setAttribute("id","all")
let para=document.createElement("p")
para.setAttribute("class","pad")
para.innerHTML="Name"

let form =document.createElement("form");
form.setAttribute("id","htmlform1")
form.setAttribute("name","HTMLform")


let divele = document.createElement("div")
divele.setAttribute("class","row")
let divele1 = document.createElement("div")
divele1.setAttribute("class","col-6")
let fname =document.createElement("input");
fname.setAttribute("id","fname")
fname.setAttribute("placeholder","First")
let divele2 = document.createElement("div")
divele2.setAttribute("class","col-6")
let lname =document.createElement("input");
lname.setAttribute("id","lname");
lname.setAttribute("placeholder","Last");

let para1=document.createElement("p")
para1.innerHTML="Address"
let address=document.createElement("input")
address.setAttribute("id","address")

let para2=document.createElement("p")
para2.innerHTML="Pincode"
let pincode=document.createElement("input")
pincode.setAttribute("id","pincode")
pincode.setAttribute("type","number")

let para3=document.createElement("p")
para3.innerHTML="Gender"

let divele3 = document.createElement("div")
divele3.setAttribute("class","row")
let divele4 = document.createElement("div")
divele4.setAttribute("class","col-2")

let male=document.createElement("input")
male.setAttribute("type","radio")
male.setAttribute("name","gender")
male.setAttribute("value","male")
male.setAttribute("id","male")
let label =document.createElement("label")
label.setAttribute("for","male")
label.innerHTML="Male"

let divele5 = document.createElement("div")
divele5.setAttribute("class","col-2")

let female=document.createElement("input")
female.setAttribute("type","radio") 
female.setAttribute("name","gender")
female.setAttribute("value","female")
female.setAttribute("id","female")
let label1 =document.createElement("label")
label1.setAttribute("for","female")
label1.innerHTML="Female"

let divele6 = document.createElement("div")
divele6.setAttribute("class","col-2")
let other=document.createElement("input")
other.setAttribute("type","radio")
other.setAttribute("name","gender")
other.setAttribute("id","other")
other.setAttribute("value","other")

let label2 =document.createElement("label")
label2.setAttribute("for","other")
label2.innerHTML="Other"

let divele7 = document.createElement("div")
divele7.setAttribute("class","food")
let para4=document.createElement("p")
para4.innerHTML="Choose Of Food"
let select=document.createElement("select")
select.setAttribute("id","foods")


let op1=document.createElement("option")
op1.setAttribute("value","biriyani")
op1.innerHTML="Biriyani"
let op2=document.createElement("option")
op2.setAttribute("value"," Veg Meals")
op2.innerHTML="Veg Meals"
let op3=document.createElement("option")
op3.setAttribute("value","Noodels")
op3.innerHTML="Noodels"
let op4=document.createElement("option")
op4.setAttribute("value","dosa")
op4.innerHTML="dosa"
let op5=document.createElement("option")
op5.setAttribute("value","dessert Items")
op5.innerHTML="dessert Items"

let divele8=document.createElement("div")
divele8.setAttribute("class","row")
let divele9=document.createElement("div")
divele9.setAttribute("class","col-6")
let para5=document.createElement("p")
para5.innerHTML="State"
let state =document.createElement("input");
state.setAttribute("id","state")

let divele10=document.createElement("div")
divele10.setAttribute("class","col-6")
let para6=document.createElement("p")
para6.innerHTML="Country"
let country =document.createElement("input");
country.setAttribute("id","country")

let divele11=document.createElement("div")
divele11.setAttribute("class","button")
let btn=document.createElement("button")
btn.setAttribute("type","button")
btn.setAttribute("id","btn")
btn.setAttribute("onclick","myfunction()")
btn.innerHTML="submit"

let divele12=document.createElement("div")
divele12.setAttribute("class","col-12")
let tabel=document.createElement("table");
tabel.setAttribute("id","tabel");
let thead=document.createElement("thead");
let tr=document.createElement("tr");

let th=document.createElement("th")
th.innerHTML="First Name"
let th1=document.createElement("th")
th1.innerHTML="Last Name"
let th2=document.createElement("th")
th2.innerHTML="Address"
let th3=document.createElement("th")
th3.innerHTML="pincode"
let th4=document.createElement("th")
th4.innerHTML="Gender"
let th5=document.createElement("th")
th5.innerHTML="Choose Of Food"
let th6=document.createElement("th")
th6.innerHTML="State"
let th7=document.createElement("th")
th7.innerHTML="Country"



let tr2=document.createElement("tr")
let td=document.createElement("td")
td.setAttribute("id","td")
let td1=document.createElement("td")
td1.setAttribute("id","td1")
let td2=document.createElement("td")
td2.setAttribute("id","td2")
let td3=document.createElement("td")
td3.setAttribute("id","td3")
let td4=document.createElement("td")
td4.setAttribute("id","td4")
let td5=document.createElement("td")
td5.setAttribute("id","td5")
let td6=document.createElement("td")
td6.setAttribute("id","td6")
let td7=document.createElement("td")
td7.setAttribute("id","td7")

function myfunction(){   
    let fn=document.getElementById("fname").value
    document.getElementById("td").innerHTML= fn

    let ln=document.getElementById("lname").value
    document.getElementById("td1").innerHTML= ln

    let address=document.getElementById("address").value
    document.getElementById("td2").innerHTML= address

    let Pin =document.getElementById("pincode").value
    document.getElementById("td3").innerHTML= Pin

    let gen =document.getElementById("male");
    let gen1=document.getElementById("female");
    let gen2=document.getElementById("other");
        if(gen.checked==true){
            document.getElementById("td4").innerHTML=gen.value
        }
        else if(gen1.checked==true){
            document.getElementById("td4").innerHTML=gen1.value
        }
        else if(gen2.checked==true){
            document.getElementById("td4").innerHTML=gen2.value
        }
        else{alert("Please Select Your Gender")}
    
    let food=document.getElementsByTagName("select")[0].value
    document.getElementById("td5").innerHTML= food

    let state =document.getElementById("state").value
    document.getElementById("td6").innerHTML= state

    let country =document.getElementById("country").value
    document.getElementById("td7").innerHTML= country

    document.getElementById("htmlform1").reset();

  
    }       








document.body.append(container);
container.append(heading ,all)
all.append(para ,form,divele12)
form.append(divele,para1,address,para2,pincode,para3,divele3,divele7,divele8,divele11)
divele.append(divele1,divele2)
divele1.append(fname)
divele2.append(lname)
divele3.append(divele4,divele5,divele6)
divele4.append(male,label)
divele5.append(female,label1)
divele6.append(other,label2)
divele7.append(para4,select)
select.append(op1,op2,op3,op4,op5)
divele8.append(divele9,divele10)
divele9.append(para5,state)
divele10.append(para6,country)
divele11.append(btn)
divele12.append(tabel)
tabel.append(thead)
thead.append(tr,tr2)
tr.append(th,th1,th2,th3,th4,th5,th6,th7)
tr2.append(td,td1,td2,td3,td4,td5,td6,td7)