// ===== TEST MODE =====
const TEST_MODE = false; // true = test
const TEST_DAY = 15;

// ===== DATE =====
const now = new Date();
const month = TEST_MODE ? 2 : now.getMonth(); // 0=Jan, 1=Feb, 2=Mar
const day = TEST_MODE ? TEST_DAY : now.getDate();

// ===== PASSWORDS =====
const passwords = {};
for (let i = 1; i <= 15; i++) {
  passwords[i] = "BADAK" + i;
}

// ===== WISHES (ALL 15 DAYS) =====
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

Tumhara khayal rakhna pyaar ka woh roop hai jo bina bole samajh jaata hai.

Tum care ko silently nibhaati ho.

Tumhari baatein dil ko sukoon deti hain.

Tum paas hoti ho toh worries kam lagti hain.

Tumhara concern genuine hota hai.

Tumhari softness naturally attractive lagti hai 😉

Tumhara dil bohot saaf hai.

Tum trust feel karwati ho.

Tumhare saath sab thoda safe lagta hai.

⏳ Birthday in 13 days… 💖`,

  3: `🌷💖 Pure Smile 💖🌷

Tum jab hasti ho, zindagi bina wajah thodi aur khoobsurat ho jaati hai.

Tumhari hasi dil tak pahunchti hai.

Tumhara laughter mood change kar deta hai.

Tum smile karti ho aur pal special ban jaata hai.

Tumhari smile mein innocence hai.

Tumhari hasi dekh kar nazar hattana mushkil ho jaata hai 😉

Tum khushi baantna jaanti ho.

Tum positive energy ho.

Tum din ka best moment ban jaati ho.

⏳ Birthday in 12 days… 💖`,

  4: `🌷💖 Calm Energy 💖🌷

Tumhari khamoshi bhi itni pyaari hoti hai ki dil use samajh leta hai.

Tum saath hoti ho toh shor kam ho jaata hai.

Tumhari presence soothing lagti hai.

Tum calm ko grace ke saath le aati ho.

Tum emotions ko bohot ache se sambhaalti ho.

Tumhari silence bhi kaafi kuch keh jaati hai 😉

Tum grounding feel ho.

Tum saath hoti ho toh sab manageable lagta hai.

Tum shaanti ho.

⏳ Birthday in 11 days… 💖`,

  5: `🌷💖 Soft Strength 💖🌷

Tumhari taakat pyaar se bhari hoti hai, isliye woh aur gehri lagti hai.

Tum quietly strong ho.

Tum mushkil ko dignity ke saath face karti ho.

Tumhara courage calm hota hai.

Tum balanced aur grounded ho.

Tumhari strength aur softness ka combination bohot sundar lagta hai 😉

Tum inspire karti ho.

Tum par bharosa naturally aata hai.

Tum saath hoti ho toh himmat badhti hai.

⏳ Birthday in 10 days… 💖`,

  6: `🌷💖 Kind Soul 💖🌷

Tumhari achhai bina dikhaye dil ko chhoo jaati hai.

Tum care ko naturally jeeti ho.

Tumhari kindness bohot real lagti hai.

Tum logon ke liye soft place ho.

Tum genuine ho.

Tumhari kindness tumhe aur bhi beautiful bana deti hai 😉

Tum saath hoti ho toh mann halka hota hai.

Tum ek blessing ho.

Tum rare ho.

⏳ Birthday in 9 days… 💖`,

  7: `🌷💖 Beautiful Mind 💖🌷

Tumhari soch tumhare pyaar ko aur meaningful bana deti hai.

Tum baaton ko samajh ke bolti ho.

Tum empathy rakhti ho.

Tumhari maturity comforting lagti hai.

Tum smart aur soft dono ho.

Tumhari intelligence tumhari smile ke saath aur bhi charming lagti hai 😉

Tum meaningful conversations ho.

Tumhe sunna achha lagta hai.

Tum alag ho, ache tareeke se.

⏳ Birthday in 8 days… 💖`,

  8: `🌷💖 Precious One 💖🌷

Tumhari keemat tumhare dil se hai, duniya ke scale se nahi.

Tum khud mein complete ho.

Tum comparison se upar ho.

Tum authentic ho.

Tum best deserve karti ho.

Tumhari simplicity hi tumhari beauty hai 😉

Tum special ho.

Tum enough ho.

Tum precious ho.

⏳ Birthday in 7 days… 💖`,

  9: `🌷💖 Warm Presence 💖🌷

Tum saath hoti ho toh dil ghar jaisa mehsoos karta hai.

Tum comfort ho.

Tumhari warmth real lagti hai.

Tum ease laati ho.

Tum saath ho toh sab normal lagta hai.

Tumhari vibe naturally cozy lagti hai 😉

Tum safe feel ho.

Tum connection ho.

Tum saath ho toh kaafi lagta hai.

⏳ Birthday in 6 days… 💖`,

  10: `🌷💖 Dream Carrier 💖🌷

Tum sapnon ko pyaar se pakadti ho, isliye woh sach lagte hain.

Tum hopeful ho.

Tum future ko softly dekhte ho.

Tum consistency rakhti ho.

Tum believe karti ho.

Tumhara dreaming nature bohot cute lagta hai 😉

Tum growth wali soul ho.

Tum possibilities ho.

Tum inspire karti ho.

⏳ Birthday in 5 days… 💖`,

  11: `🌷💖 Caring Star 💖🌷

Tum care ko zimmedari nahi, apnapan samajhti ho.

Tum details notice karti ho.

Tum dependable ho.

Tum sincere ho.

Tumhari care dil ko quietly chhoo jaati hai 😉

Tum trustworthy ho.

Tum valuable ho.

Tum softness deserve karti ho.

⏳ Birthday in 4 days… 💖`,

  12: `🌷💖 Pure Light 💖🌷

Tumhari positivity bina jalaye roshan karti hai.

Tum uplifting ho.

Tum calm rehti ho.

Tum negativity ko softly handle karti ho.

Tumhari presence matter karti hai.

Tumhari smile se jagah bright ho jaati hai 😉

Tum light ho.

Tum genuine ho.

Tum soothing ho.

⏳ Birthday in 3 days… 💖`,

  13: `🌷💖 Sweet Calm 💖🌷

Tumhari shaanti dil ko sambhaal leti hai.

Tum soothing ho.

Tum balance laati ho.

Tum healing jaisi ho.

Tum safe feel karwati ho.

Tum paas hoti ho toh mann khud-ba-khud shaant ho jaata hai 😉

Tum gentle ho.

Tum calming ho.

Tum comfort ho.

⏳ Birthday in 2 days… 💖`,

  14: `🌷💖 Almost Birthday Girl 💖🌷

Aaj intezaar bhi pyaar lag raha hai, kyunki kal tumhara din hai.

Tum excitement laa rahi ho.

Tum already shine kar rahi ho.

Tum celebration deserve karti ho.

Tum spotlight mein natural lagti ho.

Tumhara glow aaj bhi alag hi lag raha hai 😉

Tum happiness ho.

Tum special ho.

Tum ready ho.

⏳ Birthday in 1 day… 💖`,

  15: `🎂💖 Badak 💖🎂

Badak, tum pyaar ka woh ehsaas ho jo dheere se aata hai aur hamesha reh jaata hai.

Tumhari presence meri life ko soft bana deti hai.

Tum saath hoti ho toh cheezein apne aap theek lagti hain.

Tumhari care bohot genuine aur pure hai.

Tum best friend ho, aur dil ke bohot paas bhi.

Tumhari smile dil ko baar-baar dekhne par majboor kar deti hai 😉

Tum bina shartein pyaar deserve karti ho.

Aaj tumhara din hai—pure warmth aur respect ke saath.

Happy Birthday Badak 🤍 hamesha special, hamesha valued, hamesha cared. 🌷💕`
};

// ===== COUNTDOWN =====
function showCountdown() {
  const cd = document.getElementById("countdown");
  if (day === 15) {
    cd.innerText = "🎂 Today is your day 🤍";
  } else if (day < 15) {
    cd.innerText = `⏳ Birthday in ${15 - day} days`;
  }
}
showCountdown();

// ===== UNLOCK =====
function unlock() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (month !== 2 || day < 1 || day > 15) {
    error.innerText = "⏳ Available only from 1–15 March";
    return;
  }

  if (input !== passwords[day]) {
    error.innerText = "Only for you 🤍";
    return;
  }

  document.getElementById("lockScreen").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");

  document.getElementById("message").innerText = wishes[day];

  startHearts();

  if (day === 15) {
    document.getElementById("nameGlow").classList.add("glow");
    startFireworks();
  }
}

// ===== HEARTS =====
function startHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 15 + Math.random() * 20 + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 300);
}

// ===== FIREWORKS =====
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 40; i++) {
      let px = x, py = y;
      const a = Math.random() * Math.PI * 2;
      const s = Math.random() * 4 + 2;
      const vx = Math.cos(a) * s;
      const vy = Math.sin(a) * s;

      const t = setInterval(() => {
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(px, py, 2, 2);
        px += vx;
        py += vy;
      }, 20);

      setTimeout(() => clearInterval(t), 500);
    }
  }, 900);
}