// =====================
// DATE CONTROL (TEST MODE)
// =====================
const TEST_MODE = true;   // change to true for testing
const TEST_DAY = 15;       // any number 1–15

const today = new Date();
const month = TEST_MODE ? 2 : today.getMonth(); // March = 2
const day = TEST_MODE ? TEST_DAY : today.getDate();

// =====================
// DAILY WISHES
// =====================
const wishes = {
  1: `🌷💖 Sunshine Soul 💖🌷

Tumhari muskurahat dil ko yeh yakeen dila deti hai ki pyaar shor nahi, sukoon hota hai.

Tum paas hoti ho toh cheezein apni jagah aa jaati hain.

Tumhari aankhon mein sachchai dikhti hai.

Tumhara saath hamesha halka aur warm lagta hai.

Tumhari presence dil ko relax kar deti hai.

Tumhari smile itni natural hai ki baar-baar dekhne ka mann karta hai 😉

Tumhara hona din ko better bana deta hai.

Tum effortlessly special ho.

Tumhe dekh kar mann thoda aur khush ho jaata hai.

⏳ Birthday in 14 days… 💖`,

  2: `🌷💖 Gentle Heart 💖🌷
⏳ Birthday in 13 days… 💖`,

  3: `🌷💖 Pure Smile 💖🌷
⏳ Birthday in 12 days… 💖`,

  4: `🌷💖 Calm Energy 💖🌷
⏳ Birthday in 11 days… 💖`,

  5: `🌷💖 Soft Strength 💖🌷
⏳ Birthday in 10 days… 💖`,

  6: `🌷💖 Kind Soul 💖🌷
⏳ Birthday in 9 days… 💖`,

  7: `🌷💖 Beautiful Mind 💖🌷
⏳ Birthday in 8 days… 💖`,

  8: `🌷💖 Precious One 💖🌷
⏳ Birthday in 7 days… 💖`,

  9: `🌷💖 Warm Presence 💖🌷
⏳ Birthday in 6 days… 💖`,

  10: `🌷💖 Dream Carrier 💖🌷
⏳ Birthday in 5 days… 💖`,

  11: `🌷💖 Caring Star 💖🌷
⏳ Birthday in 4 days… 💖`,

  12: `🌷💖 Pure Light 💖🌷
⏳ Birthday in 3 days… 💖`,

  13: `🌷💖 Sweet Calm 💖🌷
⏳ Birthday in 2 days… 💖`,

  14: `🌷💖 Almost Birthday Girl 💖🌷
⏳ Birthday in 1 day… 💖`,

  15: `🎂💖 Badak 💖🎂

Happy Birthday Badak 🤍  
Hamesha special, hamesha valued, hamesha cared. 🌷💕`
};

// =====================
// LOCK LOGIC
// =====================
function unlock() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (month !== 2 || day < 1 || day > 15) {
    error.innerText = "⏳ This vault works only from 1–15 March";
    return;
  }

  const correctPassword = "BADAK" + day;

  if (input !== correctPassword) {
    error.innerText = "❌ Wrong password";
    return;
  }

  document.getElementById("lockScreen").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");

  showMessage();
  startHearts();

  if (day === 15) {
    startFireworks();
  }
}

// =====================
// SHOW DAILY MESSAGE
// =====================
function showMessage() {
  const msg = document.getElementById("message");
  msg.innerText = wishes[day] || "💖 You are special.";
}

// =====================
// FLOATING HEARTS
// =====================
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

// =====================
// FIREWORKS (15 MARCH ONLY)
// =====================
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      let px = x;
      let py = y;

      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      const interval = setInterval(() => {
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fillRect(px, py, 2, 2);
        px += vx;
        py += vy;
      }, 20);

      setTimeout(() => clearInterval(interval), 500);
    }
  }, 900);
}