
loadHTML("contact", "contact.html", function () {
    
    // for contact part :
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


    // for smooth scrolling part :
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent default jump
      
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
      
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 50, // Adjust for fixed navbar
              behavior: "smooth" // Enables smooth scrolling
            });
          }
        });
    });


    // for footer part
    const footer_part = document.getElementById('footer_part');
    footer_part.addEventListener('click', () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth", // This will enable smooth scrolling
        });
    })
      
});


loadHTML("navbar", "navbar.html", function () {

    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const body = document.body; // Select the body
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        
        // Disable scrolling when menu is open
        if (!menu.classList.contains("hidden")) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }
        menu.addEventListener("click", () => {
            body.classList.remove("overflow-hidden");
        })
    });
    

    // for toggle button 
    const mainDiv = document.getElementById("main_div");
    const toggleBtn = document.getElementById("toggleBtn");
    // Get the original background from inline style
    const originalBackground = mainDiv.style.background;
    toggleBtn.addEventListener("click", () => {
    if (mainDiv.style.background === "black") {
        console.log("Heloo");
        mainDiv.style.background = originalBackground;
    } else {
        mainDiv.style.background = "black";
        mainDiv.style.color = "white";
    }
    });
    
});





