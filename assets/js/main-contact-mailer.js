function onSubmit() {

    let name = document.getElementById("contact-name").value
    let organization = document.getElementById("contact-organization").value
    let address = document.getElementById("contact-address").value
    let position = document.getElementById("contact-position").value
    let numEmployees = document.getElementById("contact-num-employee").value
    let numOffices = document.getElementById("contact-num-offices").value
    let phoneNumber = document.getElementById("contact-phone-number").value
    let email = document.getElementById("contact-email").value
    let industry = document.getElementById("contact-industry").value

    let text = `
                name: ${name}
                organization: ${organization}
                address: ${address}
                position: ${position}
                number of Employees: ${numEmployees}
                number of Offices: ${numOffices}
                phoneNumber: ${phoneNumber}
                email: ${email}
                industry: ${industry}`;


    let body = {
        to: "blake@smithstudios.ca",
        from: "Sanicloud-website@smithstudios.ca",
        subject: "New Message from Sanicloud Website!",
        text: text
    }

    let url = "https://er868qs1ji.execute-api.ca-central-1.amazonaws.com/dev/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify(body);
    xhr.send(data);
    alert("Message Sent!");

}
/*
    fetch(url, {
      method: "POST", 
      body: JSON.stringify(body),
    headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    }).then(res => {
      console.log("Request complete! response:", res);
    });

 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);


    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");


    xhr.send(JSON.stringify(body));
