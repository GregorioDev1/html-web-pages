const testimonials = [
 {
    "name": "June Cha",
    "position": "Software Engineer",
    "photo": "https://randomuser.me/api/portraits/women/44.jpg",
    "text": "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess."
  },
  {
    "name": "Iida Niskanen",
    "position": "Data Engineer",
    "photo": "https://randomuser.me/api/portraits/women/67.jpg",
    "text": "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills."
  },
  {
    "name": "Renee Sims",
    "position": "Cloud engineer",
    "photo": "https://randomuser.me/api/portraits/women/8.jpg",
    "text": "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder."
  },
  {
    "name": "Sasha Ho",
    "position": "Phd student",
    "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    "text": "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills."
  },
  {
    "name": "Veeti Seppanen",
    "position": "Frontend developer",
    "photo": "https://randomuser.me/api/portraits/men/97.jpg",
    "text": "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills."
  }
];

const quoteElement = document.querySelector(".testimonial-card blockquote");
const imageElement = document.querySelector(".testimonial-card .test-image");
const authorElement = document.querySelector(".testimonial-card .author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function showTestimonial(index) {
  const current = testimonials[index];
  quoteElement.textContent = `"${current.text}"`;
  imageElement.src = current.photo;
  imageElement.alt = current.name;
  authorElement.innerHTML = `${current.name} <br><cite>${current.position}</cite>`;
}

function nextTestimonial() {
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }
  showTestimonial(currentIndex);
}

// 4. Auto-advance every 3 seconds (3000ms)
let slideInterval = setInterval(nextTestimonial, 5000);

function resetTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextTestimonial, 5000);
}
// 5. Handle clicks on your <a> buttons without reloading or jumping
nextBtn.addEventListener("click", (event) => {
  event.preventDefault();
  nextTestimonial();
  resetTimer();
});

prevBtn.addEventListener("click", (event) => {
  event.preventDefault();
  prevTestimonial();
  resetTimer();
});

const yearElement = document.getElementById("current-year");
yearElement.textContent = new Date().getFullYear();

const contactForm = document.querySelector(".contact-form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const messageInput = document.getElementById("contact-message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

// Helper pattern to check for a valid email structure (text@text.domain)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();


  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  } else if (nameValue.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address (e.g. name@example.com).";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter a message.";
    isValid = false;
  } else if (messageValue.length < 10) {
    messageError.textContent = "Message must be at least 10 characters long.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

 if (isValid) {
    Swal.fire({
      title: "Success!",
      text: "Thank you contacting us !",
      icon: "success",
      confirmButtonText: "OK"
    });
    contactForm.reset();
  }
});
