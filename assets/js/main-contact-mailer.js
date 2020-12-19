function onSubmit() {

    let name = document.getElementById("contact-name")
    let organization = document.getElementById("contact-organization")
    let address = document.getElementById("contact-address")
    let position = document.getElementById("contact-position")
    let numEmployees = document.getElementById("contact-num-employee")
    let numOffices = document.getElementById("contact-num-offices")
    let phoneNumber = document.getElementById("contact-phone-number")
    let email = document.getElementById("contact-email")
    let industry = document.getElementById("contact-industry")

    consoel.log(`name: ${name}
             organization: ${organization}
             address: ${address}
             position: ${position}
             numEmployees: ${numEmployees}
             numOffices: ${numOffices}
             phoneNumber: ${phoneNumber}
             email: ${email}
             industry: ${industry}`);


}
