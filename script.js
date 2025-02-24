// for contact part :
loadHTML("contact", "contact.html", function () {
    document.getElementById("contact_form").addEventListener("submit", function(event) {
    console.log("hello");
    event.preventDefault();
    emailjs.init("_6E4Y7YADcWxLhGBT");  // Replace with your EmailJS Public Key
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_zvjj02l", "template_jkz0nqs", formData)
    .then(() => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        // document.getElementById("status-message").innerText = "Message sent successfully!";
    })
    .catch((error) => {
        document.getElementById("status-message").innerText = "Failed to send message!";
        console.error("Error aa rha hai bhai:", error);
    });
});
});

