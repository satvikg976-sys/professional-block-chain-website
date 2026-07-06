// =========================
// Mobile Menu
// =========================
alert("JavaScript Loaded");

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("show");

        });

    });

}
// =========================
// Sticky Navbar
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =========================
// Fade Animation
// =========================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-animation");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(

".service-card,.tech-card,.why-card,.testimonial-card,.team-card,.course-card,.pricing-card,.contact-card"

).forEach(el=>{

    observer.observe(el);

});

// =========================
// Counter Animation
// =========================

const counters=document.querySelectorAll(

".stat-box h2,.achievement-card h2"

);

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target=+counter.innerText.replace(/\D/g,'');

        let count=+counter.getAttribute("data-count") || 0;

        const increment=target/80;

        if(count<target){

            count+=increment;

            counter.setAttribute("data-count",count);

            counter.innerText=Math.ceil(count)+"+";

            requestAnimationFrame(updateCounter);

        }

        else{

            counter.innerText=target+"+";

        }

    };

    updateCounter();

});

// =========================
// Contact Form Validation
// =========================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you for contacting Satvik Solutions! We will get back to you soon.");

form.reset();

});

}

// =========================
// Scroll To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fas fa-arrow-up'></i>";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("active");

}

else{

topBtn.classList.remove("active");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =========================
// Current Year
// =========================

document.querySelectorAll(".year").forEach(y=>{

y.textContent=new Date().getFullYear();

});
