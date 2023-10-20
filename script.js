function submitForm(fName,lName,dob,country,gender,email,profession,mobile,firstQuestion,secQuestion) {

    //Display to result popup
    const results=`
    <p>Name: ${fName} ${lName}</p>
    <p>Date of Birth: ${dob}</p>
    <p>Country:  ${country}</p>
    <p>Gender:  ${gender} </p>
    <p>Email:  ${email}</p>
    <p>Profession:  ${profession}</p>
    <p>Mobile number:  ${mobile}</p>
    <p>Is this first time you are using our product/service?  ${firstQuestion}</p>
    <p>How satisfied are you with our company overall?  ${secQuestion}</p>
    `;

    document.getElementById('results').innerHTML = results;
    document.getElementById('popup').style.display = 'flex';
}

function validateEmail(email){
    let symbolCheck=false;
    let extensionCheck=false;
    let lengthCheck=false;

    const n= email.length;
    if(n>=6){
        lengthCheck=true;
    }
    if(email.substring(n-4,n)===".com"){
        extensionCheck=true;
    }
    if(email.substring(n-5,n)==="@.com"){
        extensionCheck=false;
    }
    for(let i=0; i<n; i++){
        if(email.charAt(i)==='@'){
            symbolCheck=true;
            break;
        }
    }
    return symbolCheck && extensionCheck && lengthCheck;
}

function validateMobile(mobile){
    if(mobile.length<10 || mobile.length>10){
        return false;
    } else{
        return true;
    }
}

function checkRequired(){
    const fName= document.getElementById('firstName').value;
    const lName= document.getElementById('lastName').value;
    const dob= document.getElementById('dob').value;
    const country= document.getElementById('country').value;
    const gender= document.getElementById('male').checked ? "Male" : "" || document.getElementById('female').checked ? "Female" : "" || document.getElementById('other').checked ? "Other" : "";

    let email= document.getElementById('email').value;
    if(!validateEmail(email)){
        email="";
    } 

    const profession= document.getElementById('profession').value;
    let mobile= document.getElementById('mobile').value;

    if(!validateMobile(mobile)){
        mobile="";
    }

    const firstQuestion= document.getElementById('yes').checked ? "Yes": "" || document.getElementById('no').checked ? "No": "";
    const secQuestion= document.getElementById('satisfied').checked ? "Satisfied" : "" || document.getElementById('undecided').checked ? "Undecided" : "" || document.getElementById('unsatisfied').checked ? "Unsatisfied" : "";

    if(fName!="" && lName!="" && dob!="" && country!="none" && gender!="" && email!="" && profession!="" && mobile!=""){
        submitForm(fName,lName,dob,country,gender,email,profession,mobile,firstQuestion,secQuestion);
    } else{
        alert("Please Fill the required data.")
    }
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm();
}