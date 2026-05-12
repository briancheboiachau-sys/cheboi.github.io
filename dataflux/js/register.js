

let btnCreate = document.getElementById('btnCreate');


btnCreate.addEventListener('click', () => {
    let txtFirstName = document.getElementById("txtFirstName").value;
    let txtLastName = document.getElementById("txtLastName").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtPassword = document.getElementById("txtPassword").value;
    let txtConfirmPassword = document.getElementById("txtConfirmPassword").value;
    
    if (txtFirstName == "" || txtEmail == "" || txtConfirmPassword == "" || txtPassword == ""){
        alert("Email and Name must be filled");
        return;
    }
    else{
        if (txtPassword == txtConfirmPassword){
            let email_id = txtEmail.replace(/\./g, "_dot_").replace(/@/g, "_at_");
            let status = 'active';
            let timenow = Date.now();
            let role = "admin"
            firebaseConfig.auth().createUserWithEmailAndPassword(txtEmail, txtPassword)
            .then((userCredential) => {
                firebase.database().ref('userDetails/' + email_id).set({
                    FirtName:txtFirstName, 
                    LastName:txtLastName,
                    Email:txtEmail,
                    Status:status,
                    createdBy:txtEmail,
                    createdOn:timenow,
                    Role:role
                })
                alert("Account Created")
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            })
        }
        else{
            alert("Password does not match");
        }
    }
});
