/* =====================================================   PRODUCT NAVIGATION   ===================================================== */
function goToProduct(productKey) {
  window.location.href = "product.html?name=" + productKey;
}

/* =====================================================   TRACK PRODUCT VIEWS (localStorage)   ===================================================== */
function logView(product) {
  let count = Number(localStorage.getItem(product)) || 0;
  localStorage.setItem(product, count + 1);
}

/* =====================================================  LOW INTERNET MODE   ===================================================== */
(function detectLowInternet() {
  const banner = document.getElementById("low-internet-banner");
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  if (!connection) return;

  const slow =
    connection.saveData ||
    connection.effectiveType === "2g" ||
    connection.effectiveType === "slow-2g";

  if (slow) {
    document.documentElement.classList.add("low-internet");
    if (banner) banner.style.display = "block";
  }
})();

/* ===================================================== PRODUCT DATA ===================================================== */
const productData = {
 "hustler-magnesium": {
  name: "Hustler Magnesium",
  purpose: "Supplies magnesium, a key component of chlorophyll and enzyme activation.",
  why: "Magnesium deficiency leads to interveinal chlorosis and reduced photosynthesis. This product ensures greener leaves and higher energy conversion.",
  crops: "Cereals, pulses, vegetables, fruits, and cash crops.",
  how: "Foliar spray or fertigation.",
  dosage: "2–3 ml per litre for foliar spray; 500 ml per acre for fertigation.",
  time: "Vegetative stage and early flowering.",
  additional_info: "Compatible with most fertilizers and pesticides. Avoid mixing with highly alkaline solutions."
},

"hustler-calcium": {
  name: "Hustler Calcium",
  purpose: "Provides calcium for strong cell walls and improved fruit quality.",
  why: "Calcium deficiency causes blossom end rot, poor shelf life, and weak plant structure.",
  crops: "Tomato, chili, grapes, apple, banana, and other fruit/vegetable crops.",
  how: "Foliar spray or drip irrigation.",
  dosage: "2 ml per litre for foliar spray; 1 litre per acre via drip.",
  time: "Fruit setting and development stages.",
  additional_info: "Improves firmness, reduces post-harvest losses, and enhances stress tolerance."
},

"hustler-combi": {
  name: "Hustler Combi",
  purpose: "Balanced micronutrient formulation with Zn, Fe, Mn, Cu, B.",
  why: "Corrects hidden hunger and ensures uniform growth.",
  crops: "All crops including cereals, pulses, fruits, vegetables, and cash crops.",
  how: "Foliar spray or fertigation.",
  dosage: "2 ml per litre foliar; 500 ml per acre fertigation.",
  time: "Vegetative stage; repeat during flowering if needed.",
  additional_info: "Compatible with most agrochemicals. Enhances resilience against drought and salinity."
},

"hustler-ferrous": {
  name: "Hustler Ferrous",
  purpose: "Supplies iron for chlorophyll synthesis and respiration.",
  why: "Iron deficiency causes yellowing of young leaves and poor growth.",
  crops: "Rice, wheat, soybean, citrus, banana, and vegetables.",
  how: "Foliar spray or soil application.",
  dosage: "2–3 ml per litre foliar; 1 kg per acre soil application.",
  time: "Early vegetative stage.",
  additional_info: "Chelated form ensures better absorption even in alkaline soils."
},

"hustler-manganese": {
  name: "Hustler Manganese",
  purpose: "Provides manganese for enzyme activation and nitrogen metabolism.",
  why: "Deficiency leads to poor photosynthesis and reduced grain filling.",
  crops: "Cereals, pulses, sugarcane, fruits, vegetables.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Vegetative stage.",
  additional_info: "Improves disease resistance and enhances yield quality."
},

"hustler-zinc": {
  name: "Hustler Zinc",
  purpose: "Supplies zinc for hormone regulation and enzyme activity.",
  why: "Zinc deficiency causes stunted growth, small leaves, and poor flowering.",
  crops: "Wheat, rice, maize, cotton, fruits, vegetables.",
  how: "Foliar spray or soil application.",
  dosage: "2 ml per litre foliar; 1 kg per acre soil.",
  time: "Vegetative stage and flowering.",
  additional_info: "Improves grain size and crop maturity."
},

"hustler-mix": {
  name: "Hustler Mix",
  purpose: "Multi-micronutrient blend for balanced nutrition.",
  why: "Addresses multiple deficiencies simultaneously.",
  crops: "All crops.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Vegetative stage.",
  additional_info: "Cost-effective solution for farmers facing mixed deficiencies."
},

"hustler-cal-11": {
  name: "Hustler Cal-11",
  purpose: "High-strength calcium formulation.",
  why: "Ensures strong fruit development and reduces physiological disorders.",
  crops: "Fruit crops, vegetables, and ornamentals.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Fruit setting stage.",
  additional_info: "Improves shelf life and marketability of produce."
},

"hustler-boro": {
  name: "Hustler Boro",
  purpose: "Supplies boron for pollination and fruit set.",
  why: "Boron deficiency causes poor flowering and fruit cracking.",
  crops: "Oilseeds, fruits, vegetables.",
  how: "Foliar spray.",
  dosage: "1–2 ml per litre.",
  time: "Pre-flowering and flowering stages.",
  additional_info: "Improves seed quality and oil content."
},

"boro-Glymax": {
  name: "Boro Glymax",
  purpose: "Chelated boron for better absorption.",
  why: "Ensures efficient boron uptake even in adverse soil conditions.",
  crops: "Fruits, vegetables, oilseeds.",
  how: "Foliar spray.",
  dosage: "1–2 ml per litre.",
  time: "Flowering stage.",
  additional_info: "Improves fruit set and reduces flower drop."
},

"revo-growth": {
  name: "Revo Growth",
  purpose: "Plant growth promoter with natural bio-stimulants.",
  why: "Enhances root growth, nutrient uptake, and overall vigor.",
  crops: "All crops.",
  how: "Foliar spray or soil drench.",
  dosage: "2 ml per litre.",
  time: "Early vegetative stage.",
  additional_info: "Improves stress tolerance and yield potential."
},

"revo-boost": {
  name: "Revo Boost",
  purpose: "Energy booster for crops with amino acids and vitamins.",
  why: "Supports rapid growth and recovery from stress.",
  crops: "Vegetables, fruits, cereals.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Vegetative and flowering stages.",
  additional_info: "Improves flowering intensity and fruit set."
},

"revo-speed": {
  name: "Revo Speed",
  purpose: "Quick-acting nutrient solution.",
  why: "Provides immediate energy and nutrient supply.",
  crops: "All crops.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Critical growth stages.",
  additional_info: "Useful during stress conditions like drought or pest attack."
},

"revo-cane": {
  name: "Revo Cane",
  purpose: "Special formulation for sugarcane.",
  why: "Improves cane thickness, juice quality, and sugar recovery.",
  crops: "Sugarcane.",
  how: "Foliar spray or soil drench.",
  dosage: "500 ml per acre.",
  time: "Tillering and grand growth stage.",
  additional_info: "Enhances sucrose accumulation."
},

"revo-phos": {
  name: "Revo Phos",
  purpose: "Phosphorus-rich formulation.",
  why: "Supports root development and energy transfer.",
  crops: "Cereals, pulses, oilseeds.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Early vegetative stage.",
  additional_info: "Improves flowering and seed formation."
},

"revo-sil": {
  name: "Revo Sil",
  purpose: "Silicon-based product for stress tolerance.",
  why: "Strengthens cell walls and improves resistance to pests/diseases.",
  crops: "Rice, wheat, sugarcane, fruits.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Vegetative stage.",
  additional_info: "Improves drought and salinity tolerance."
},

"revo-spread": {
  name: "Revo Spread",
  purpose: "Wetting and spreading agent.",
  why: "Improves coverage and absorption of sprays.",
  crops: "All crops.",
  how: "Tank mix with pesticides/fertilizers.",
  dosage: "0.5 ml per litre.",
  time: "Whenever foliar sprays are applied.",
  additional_info: "Reduces spray wastage and increases efficiency."
},

"revo-zinco": {
  name: "Revo Zinco",
  purpose: "Zinc-rich formulation.",
  why: "Corrects zinc deficiency quickly.",
  crops: "Cereals, pulses, fruits.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Vegetative stage.",
  additional_info: "Improves flowering and grain filling."
},

"revo-bud": {
  name: "Revo Bud",
  purpose: "Bud initiation promoter.",
  why: "Enhances flowering and fruit set.",
  crops: "Fruit crops, vegetables.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Pre-flowering stage.",
  additional_info: "Improves yield and quality."
},

"Revo Fe HEDP-17": {
  name: "Revo Fe HEDP-17",
  purpose: "Chelated iron formulation stabilized with HEDP (Hydroxyethylidene Diphosphonic Acid) for maximum availability.",
  why: "Iron deficiency leads to chlorosis in young leaves and reduced photosynthesis. The HEDP chelation prevents precipitation in alkaline soils, ensuring consistent iron uptake.",
  crops: "Rice, wheat, maize, soybean, citrus, banana, grapes, and vegetables.",
  how: "Foliar spray or fertigation.",
  dosage: "2–3 ml per litre for foliar spray; 500 ml per acre for fertigation.",
  time: "Vegetative stage and early flowering when iron demand is high.",
  additional_info: "Highly stable formulation, resistant to soil fixation. Improves leaf greenness, crop vigor, and yield."
},

"zinc-glucon": {
  name: "Zinc Glucon",
  purpose: "Organic zinc supplement in gluconate form for rapid absorption.",
  why: "Zinc deficiency causes stunted growth, poor flowering, and reduced grain size. Gluconate form ensures better bioavailability compared to inorganic salts.",
  crops: "Cereals, pulses, fruits, vegetables, and oilseeds.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Vegetative and flowering stages.",
  additional_info: "Safe for repeated use. Improves enzyme activity and hormone regulation."
},

"zinc-glymax": {
  name: "Zinc Glymax",
  purpose: "Chelated zinc with glycine for enhanced uptake.",
  why: "Corrects zinc deficiency quickly and supports protein synthesis.",
  crops: "Rice, wheat, maize, cotton, fruits, vegetables.",
  how: "Foliar spray.",
  dosage: "2 ml per litre.",
  time: "Vegetative stage.",
  additional_info: "Chelation with glycine improves absorption efficiency and reduces antagonism with other nutrients."
},

"cal-glymax": {
  name: "Cal Glymax",
  purpose: "Chelated calcium with glycine for strong cell wall development.",
  why: "Prevents blossom end rot, fruit cracking, and poor shelf life.",
  crops: "Tomato, chili, grapes, apple, banana, and other fruit crops.",
  how: "Foliar spray or drip irrigation.",
  dosage: "2 ml per litre foliar; 1 litre per acre drip.",
  time: "Fruit setting and development stages.",
  additional_info: "Improves firmness, enhances stress tolerance, and boosts marketability."
},

"n-32": {
  name: "N-32",
  purpose: "Nitrogen-rich liquid fertilizer providing 32% nitrogen in readily available form.",
  why: "Supports rapid vegetative growth, chlorophyll formation, and protein synthesis.",
  crops: "All crops including cereals, pulses, oilseeds, fruits, and vegetables.",
  how: "Foliar spray or fertigation.",
  dosage: "2–3 ml per litre foliar; 1 litre per acre fertigation.",
  time: "Vegetative stage when nitrogen demand is highest.",
  additional_info: "Quick-acting formulation that reduces nitrogen losses. Enhances leaf greenness and crop vigor."
}
  // (you can keep adding remaining products same way)
};

/* =====================================================  PRODUCT DETAILS PAGE LOGIC  ===================================================== */
if (window.location.pathname.includes("product.html")) {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("name");

  if (productData[key]) {
    const p = productData[key];

    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    setText("product-name", p.name);
    setText("product-purpose", p.purpose);
    setText("product-why", p.why);
    setText("product-crops", p.crops);
    setText("product-how", p.how);
    setText("product-dosage", p.dosage);
    setText("product-time", p.time);

    const img = document.getElementById("product-image");
    if (img) {
      img.src = "assets/products/" + key + ".jpeg";
      img.alt = p.name;
    }

    logView(key);
  }
}

/* =====================================================   DASHBOARD – TRENDING & EXPLAINABILITY   ===================================================== */
const trendingList = document.getElementById("trending-list");
const explainList = document.getElementById("explainability-list");

if (trendingList && explainList) {
  let products = [];

  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    const v = localStorage.getItem(k);

    if (!isNaN(v)) {
      products.push({ name: k, views: Number(v) });
    }
  }

  products.sort((a, b) => b.views - a.views);

  if (products.length === 0) {
    trendingList.innerHTML = "<li>No data yet</li>";
    explainList.innerHTML = "<li>Click products to generate insights</li>";
  } else {
    products.slice(0, 5).forEach(p => {
      const li = document.createElement("li");
      li.textContent = `${p.name} (${p.views} views)`;
      trendingList.appendChild(li);

      const eli = document.createElement("li");
      eli.textContent =
        `${p.name} is trending because users viewed it ${p.views} times.`;
      explainList.appendChild(eli);
    });
  }
}

/* =====================================================   DASHBOARD CHARTS (Chart.js REQUIRED)===================================================== */
if (typeof Chart !== "undefined") {
  const bar = document.getElementById("viewsChart");
  const pie = document.getElementById("pieChart");

  if (bar && pie) {
    const labels = [];
    const values = [];

    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      const v = localStorage.getItem(k);
      if (!isNaN(v)) {
        labels.push(k);
        values.push(Number(v));
      }
    }

    if (labels.length) {
      new Chart(bar, {
        type: "bar",
        data: {
          labels,
          datasets: [{ data: values, backgroundColor: "#66bb6a" }]
        },
        options: { plugins: { legend: { display: false } } }
      });

      new Chart(pie, {
        type: "pie",
        data: {
          labels,
          datasets: [{ data: values }]
        }
      });
    }
  }
}

/* =====================================================   CONTACT FORM (SAFE)  ===================================================== */
/* ================= MOBILE MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= CONTACT → WHATSAPP ================= */
function handleContact(e) {
  e.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const product = document.getElementById("product-interest").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  // ✅ PUT REAL NUMBER HERE (NO +, NO SPACE)
  const phoneNumber = "919876543210";

  const text =
    "Hello Revolve Agro 👋\n\n" +
    "👤 Name: " + name + "\n" +
    "📧 Email: " + email + "\n" +
    "🌾 Product Interested: " + product + "\n\n" +
    "💬 Message:\n" + message;

  const whatsappURL =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
}

/* ================= DYNAMIC BACKGROUND ================= */
(function setRandomBackground() {
  const images = [
    "assets/bg/farm1.jpg",
    "assets/bg/farm2.jpg",
    "assets/bg/farm3.jpg",
    "assets/bg/farm4.jpg",
    "assets/bg/farm5.jpg"
  ];

  const randomImage =
    images[Math.floor(Math.random() * images.length)];

  document.body.style.backgroundImage =
    `linear-gradient(rgba(233,245,236,0.55), rgba(246,251,247,0.65)), url("${randomImage}")`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
})();

function sendToWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const product = document.getElementById("product-interest").value;
  const message = document.getElementById("contact-message").value;

  const phoneNumber = "919XXXXXXXXX"; // ← replace with REAL number (no +)

  const text =
    `Hello Revolve Agro 👋%0A%0A` +
    `👤 Name: ${name}%0A` +
    `📧 Email: ${email}%0A` +
    `🌾 Product Interest: ${product}%0A%0A` +
    `💬 Message:%0A${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(whatsappURL, "_blank");
}

/* ================= AI ADVISOR ================= */
function askAI() {
  const input = document.getElementById("user-question");
  const chat = document.getElementById("ai-chat");
  const langSelect = document.getElementById("ai-language");
  const lang = langSelect ? langSelect.value : "en";

  if (!input || !chat) return;

  const rawQuestion = input.value.trim();
  if (rawQuestion === "") return;

  const question = rawQuestion.toLowerCase();

  /* ---------- USER MESSAGE ---------- */
  const userMsg = document.createElement("div");
  userMsg.className = "ai-message user";
  userMsg.textContent = rawQuestion;
  chat.appendChild(userMsg);
  input.value = "";

  let response = "";

  /* =====================================================     ZINC DEFICIENCY  ===================================================== */
  if (question.includes("zinc") || question.includes("झिंक") || question.includes("जिंक")) {
    if (lang === "hi") {
      response =
`🔍 समस्या: जिंक की कमी

जिंक पौधों में हार्मोन निर्माण, एंजाइम गतिविधि और नई पत्तियों के विकास के लिए आवश्यक है।
जिंक की कमी से पौधे छोटे रह जाते हैं और पत्तियाँ पीली हो जाती हैं।

✅ अनुशंसित उत्पाद:
Hustler Zinc

🌾 फसलें:
कपास, धान, गेहूं, सब्ज़ियाँ

💧 मात्रा:
2 ml प्रति लीटर पानी (फोलियर स्प्रे)

⏰ सही समय:
शुरुआती वृद्धि अवस्था

📌 लाभ:
बेहतर टिलरिंग, पत्तियों का विकास और अधिक उत्पादन।`;
    } 
    else if (lang === "mr") {
      response =
`🔍 समस्या: झिंक कमतरता

झिंक हे एन्झाइम क्रिया, हार्मोन निर्मिती आणि पानांच्या वाढीसाठी आवश्यक आहे.
झिंक कमतरतेमुळे वाढ खुंटते आणि पाने पिवळी पडतात.

✅ शिफारस केलेले उत्पादन:
Hustler Zinc

🌾 पिके:
कापूस, भात, गहू, भाजीपाला

💧 डोस:
2 ml प्रति लिटर पाणी (फवारणी)

⏰ योग्य वेळ:
प्रारंभिक वाढ अवस्था

📌 फायदा:
चांगली वाढ, मजबूत पाने आणि जास्त उत्पादन.`;
    } 
    else {
      response =
`🔍 Problem: Zinc Deficiency

Zinc is essential for enzyme activity, hormone production, and leaf development.
Deficiency causes stunted growth and yellowing of young leaves.

✅ Recommended Product:
Hustler Zinc

🌾 Suitable Crops:
Cotton, Paddy, Wheat, Vegetables

💧 Dosage:
2 ml per litre (foliar spray)

⏰ Best Time:
Early growth stage

📌 Benefit:
Improves tillering, leaf size, and overall yield.`;
    }
  }

  /* =====================================================     MAGNESIUM DEFICIENCY  ===================================================== */
  else if (question.includes("magnesium") || question.includes("मॅग्नेशियम") || question.includes("मैग्नीशियम")) {
    if (lang === "hi") {
      response =
`🔍 समस्या: मैग्नीशियम की कमी

मैग्नीशियम क्लोरोफिल का मुख्य घटक है।
इसकी कमी से पत्तियों के बीच पीलापन आ जाता है।

✅ अनुशंसित उत्पाद:
Hustler Magnesium

🌾 फसलें:
गेहूं, कपास, धान, गन्ना

💧 मात्रा:
2–3 ml प्रति लीटर पानी

⏰ समय:
वेजिटेटिव अवस्था

📌 लाभ:
हरियाली बढ़ती है और प्रकाश संश्लेषण बेहतर होता है।`;
    } 
    else if (lang === "mr") {
      response =
`🔍 समस्या: मॅग्नेशियम कमतरता

मॅग्नेशियम हे क्लोरोफिलसाठी आवश्यक आहे.
कमतरतेमुळे पानांच्या शिरांमध्ये पिवळेपणा येतो.

✅ शिफारस केलेले उत्पादन:
Hustler Magnesium

🌾 पिके:
गहू, कापूस, भात, ऊस

💧 डोस:
2–3 ml प्रति लिटर

⏰ वेळ:
वाढीची अवस्था

📌 फायदा:
पाने हिरवी राहतात आणि उत्पादन वाढते.`;
    } 
    else {
      response =
`🔍 Problem: Magnesium Deficiency

Magnesium is required for chlorophyll formation and photosynthesis.
Deficiency causes interveinal yellowing of leaves.

✅ Recommended Product:
Hustler Magnesium

🌾 Suitable Crops:
Wheat, Cotton, Rice, Sugarcane

💧 Dosage:
2–3 ml per litre

⏰ Best Time:
Vegetative stage

📌 Benefit:
Restores green color and improves photosynthesis.`;
    }
  }

  /* =====================================================   GROWTH / YIELD ISSUE   ===================================================== */
  else if (
    question.includes("growth") ||
    question.includes("yield") ||
    question.includes("वाढ") ||
    question.includes("उत्पादन")
  ) {
    if (lang === "hi") {
      response =
`🌱 समस्या: फसल की कमजोर वृद्धि

कम वृद्धि का कारण पोषक तत्वों की कमी या जड़ों की कमजोरी हो सकती है।

✅ अनुशंसित उत्पाद:
Revo Growth

🌾 सभी फसलें

💧 मात्रा:
1–2 ml प्रति लीटर

📌 लाभ:
मजबूत जड़ें, बेहतर पोषण और अधिक उत्पादन।`;
    } 
    else if (lang === "mr") {
      response =
`🌱 समस्या: पिकाची वाढ कमी

कमकुवत वाढीचे कारण अन्नद्रव्यांची कमतरता असू शकते.

✅ शिफारस केलेले उत्पादन:
Revo Growth

🌾 सर्व पिके

💧 डोस:
1–2 ml प्रति लिटर

📌 फायदा:
मजबूत मुळे आणि जास्त उत्पादन.`;
    } 
    else {
      response =
`🌱 Problem: Poor Crop Growth / Low Yield

Poor growth is often due to nutrient imbalance or weak root development.

✅ Recommended Product:
Revo Growth

🌾 Suitable for all crops

💧 Dosage:
1–2 ml per litre

📌 Benefit:
Improves root strength, nutrient uptake, and yield.`;
    }
  }

  /* =====================================================     DEFAULT    ===================================================== */
  else {
    if (lang === "hi") {
      response =
`❓ कृपया फसल और समस्या स्पष्ट करें।
उदाहरण:
"कपास में जिंक की कमी"`;
    } 
    else if (lang === "mr") {
      response =
`❓ कृपया पीक आणि समस्या स्पष्ट करा.
उदाहरण:
"कापसामध्ये झिंक कमतरता"`;
    } 
    else {
      response =
`❓ Please mention crop and problem clearly.
Example:
"Zinc deficiency in cotton"`;
    }
  }

  /* ---------- BOT MESSAGE ---------- */
  const botMsg = document.createElement("div");
  botMsg.className = "ai-message bot";

  setTimeout(() => {
    botMsg.textContent = response;
    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 500);
}

function fillQuestion(text) {
  const input = document.getElementById("user-question");
  if (input) {
    input.value = text;
    input.focus();
  }
}
