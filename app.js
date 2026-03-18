
// ----------------------------
// Sample kids data with group colors and parents
// ----------------------------
const kids = [
  { name: "Angelina", age: 3, image: "images/Angelina.png", group: "Red", parents: "John & Mary", checkedIn: false },
  { name: "Billy", age: 4, image: "images/Billy.png", group: "Blue", parents: "Tom & Linda", checkedIn: false },
  { name: "Bjørn", age: 3, image: "images/Bjørn.png", group: "Yellow", parents: "Karl & Emma", checkedIn: false },
  { name: "Cecilia", age: 2, image: "images/Cecilia.png", group: "Green", parents: "Anna & Peter", checkedIn: false },
  { name: "Daniel", age: 4, image: "images/Daniel.png", group: "Red", parents: "Laura & Michael", checkedIn: false },
  { name: "Elias", age: 3, image: "images/Elias.png", group: "Blue", parents: "Sophia & Lucas", checkedIn: false },
  { name: "Emily", age: 2, image: "images/Emily.png", group: "Yellow", parents: "Nina & Oliver", checkedIn: false },
  { name: "Ezra", age: 3, image: "images/Ezra.png", group: "Green", parents: "Liam & Emma", checkedIn: false },
  { name: "Flora", age: 2, image: "images/Flora.png", group: "Red", parents: "Clara & Henry", checkedIn: false },
  { name: "Isiah", age: 4, image: "images/Isiah.png", group: "Blue", parents: "David & Grace", checkedIn: false },
  { name: "Jeannie", age: 3, image: "images/Jeannie.png", group: "Yellow", parents: "Olivia & Jack", checkedIn: false },
  { name: "Jon", age: 4, image: "images/Jon.png", group: "Green", parents: "Mia & Noah", checkedIn: false },
  { name: "Lasse", age: 3, image: "images/Lasse.png", group: "Red", parents: "Ethan & Sofia", checkedIn: false },
  { name: "Lua", age: 2, image: "images/Lua.png", group: "Blue", parents: "Ella & Samuel", checkedIn: false },
  { name: "Maria", age: 3, image: "images/Maria.png", group: "Yellow", parents: "Isabella & Liam", checkedIn: false },
  { name: "Mathias", age: 4, image: "images/Mathias.png", group: "Green", parents: "Lucas & Emily", checkedIn: false },
  { name: "Molly", age: 3, image: "images/Molly.png", group: "Red", parents: "Ava & Oliver", checkedIn: false },
  { name: "Monira", age: 2, image: "images/Monira.png", group: "Blue", parents: "Lily & Jacob", checkedIn: false },
  { name: "Catalina", age: 3, image: "images/Noah.png", group: "Yellow", parents: "Chloe & Ethan", checkedIn: false },
  { name: "Polly", age: 2, image: "images/Polly.png", group: "Green", parents: "Zoe & Liam", checkedIn: false },
  { name: "Rod", age: 4, image: "images/Rod.png", group: "Red", parents: "Max & Anna", checkedIn: false },
  { name: "Sarah", age: 3, image: "images/Sarah.png", group: "Blue", parents: "Ella & Daniel", checkedIn: false },
  { name: "Stacy", age: 2, image: "images/Stacy.png", group: "Yellow", parents: "Mia & Leo", checkedIn: false }
];

// ----------------------------
// Activities data
// ----------------------------
const activities = [
  { id: 1, title: "Painting Workshop", date: "2026-03-20", group: "Red" },
  { id: 2, title: "Outdoor Play", date: "2026-03-21", group: "Blue" },
  { id: 3, title: "Music Time", date: "2026-03-22", group: "Green" },
  { id: 4, title: "Storytelling Hour", date: "2026-03-23", group: "Yellow" },
  { id: 5, title: "Gardening Activity", date: "2026-03-24", group: "Red" },
  { id: 6, title: "Baking Cookies", date: "2026-03-25", group: "Blue" },
  { id: 7, title: "Science Experiments", date: "2026-03-26", group: "Green" },
  { id: 8, title: "Dance Class", date: "2026-03-27", group: "Yellow" },
  { id: 9, title: "Lego Building", date: "2026-03-28", group: "Red" },
  { id: 10, title: "Puzzle Time", date: "2026-03-29", group: "Blue" },
  { id: 11, title: "Nature Walk", date: "2026-03-30", group: "Green" },
  { id: 12, title: "Painting Rocks", date: "2026-03-31", group: "Yellow" },
  { id: 13, title: "Music and Movement", date: "2026-04-01", group: "Red" },
  { id: 14, title: "Storybook Crafts", date: "2026-04-02", group: "Blue" },
  { id: 15, title: "Mini Olympics", date: "2026-04-03", group: "Green" },
  { id: 16, title: "Animal Parade", date: "2026-04-04", group: "Yellow" },
  { id: 17, title: "Clay Modelling", date: "2026-04-05", group: "Red" },
  { id: 18, title: "Sing-Along Session", date: "2026-04-06", group: "Blue" },
  { id: 19, title: "Obstacle Course", date: "2026-04-07", group: "Green" },
  { id: 20, title: "Puppet Show", date: "2026-04-08", group: "Yellow" },
  { id: 21, title: "Baby Yoga", date: "2026-04-09", group: "Blue" }
];

// ----------------------------
// Notifications data
// ----------------------------
const notifications = [
  {
    author: "Sarah Johnson (Educator - Roskilde Daycare Center)",
    target: "All Employees",
    date: "2026-03-09T10:25:00",
    displayDate: "Mon. 09 Mar. 10:25",
    title: "INSTAGRAM",
    message: `Dear parents,
You are very welcome to follow our Instagram, where we share pictures of the food we serve to the children in everyday life. Here you can get a little insight into the dishes of the day and the food that the children get with us.
Follow us here: https://www.instagram.com/fakeprofile1`
  },
  {
    author: "David Kim (Educator - Roskilde Daycare Center)",
    target: "Kindergarten Department",
    date: "2026-03-09T07:48:00",
    displayDate: "Mon. 09 Mar. 07:48",
    title: "Lice in kindergarten",
    message: `Dear parents,
Lice have been detected in the kindergarten. Please check your child's hair for lice over the next few days.
• Use a lice comb in wet hair with conditioner.
• Check behind the ears and the nape of the neck.
• If lice are found, start treatment immediately.
Thank you for your cooperation.`
  },
  {
    author: "Anna Larsen (Leader - Roskilde Daycare Center)",
    target: "All Children and Parents",
    date: "2026-03-03T16:42:00",
    displayDate: "Tue. 03 Mar. 16:42",
    title: "Lunch boxes reminder",
    message: `Dear parents,
At Roskilde Daycare Center we have a shared meal plan. All children eat the food offered by our kitchen. Packed lunches are discouraged to maintain fairness and community at meal times.
If your child is not enthusiastic about the menu, our staff ensures alternatives are available.`
  },
  {
    author: "Michael Smith (Leader - Roskilde Daycare Center)",
    target: "All Children and Parents",
    date: "2026-02-25T12:40:00",
    displayDate: "Wed. Feb 25 12:40",
    title: "Staff Update",
    message: `Dear parents,
Tina is on long-term sick leave due to a medical condition. The rainbow group will join the space rockets during group time. We will update you when news is available.`
  },
  {
    author: "Emily Wong (Educator - Roskilde Daycare Center)",
    target: "All Employees",
    date: "2026-02-24T15:56:00",
    displayDate: "Tue. 24 Feb. 15:56",
    title: "Lunch boxes policy",
    message: `Hello dear parents,
Children may only bring packed lunches if a special agreement is made with staff at Roskilde Daycare Center.`
  },
  {
    author: "Alex Morgan (Leader - Roskilde Daycare Center)",
    target: "All Children and Parents",
    date: "2026-02-23T17:12:00",
    displayDate: "Mon. 23 Feb. 17:12",
    title: "Reporting absences",
    message: `Dear parents,
Please report vacation, illness, and other absences in AULA before 7:30 AM to help us manage resources and ensure a smooth day for all children.`
  },
  {
    author: "Sophie Allen (Educator - Roskilde Daycare Center)",
    target: "Kindergarten Department",
    date: "2026-02-20T15:44:00",
    displayDate: "Fri. Feb 20 15:44",
    title: "MGP PARTY 🥳",
    message: `Dear parents,
On Wednesday we will have a festive MGP party in the kindergarten with music, dancing, and fun. Please dress your child in glittery or star-themed outfits.`
  },
  {
    author: "Chris Turner (Educator - Roskilde Daycare Center)",
    target: "Kindergarten Department",
    date: "2026-02-13T08:14:00",
    displayDate: "Feb 13 08:14",
    title: "Carnival",
    message: `Dear parents,
Shrove Tuesday celebration will take place during activity time at 9:30. Children can dress up, and buns will be provided in the afternoon.`
  },
  {
    author: "Lily Brown (Educator - Roskilde Daycare Center)",
    target: "All Employees",
    date: "2026-02-06T08:30:00",
    displayDate: "Feb 6 08:30",
    title: "Snow and delays",
    message: `Good morning everyone,
Some staff may arrive late due to weather conditions. Thank you for your understanding and patience.`
  },
  {
    author: "Astrid & Jeanette (Leaders - Roskilde Daycare Center)",
    target: "All Children and Parents",
    date: "2026-01-29T14:09:00",
    displayDate: "Jan 29 14:09",
    title: "New staff updates",
    message: `Dear parents,
Sille has joined Roskilde Daycare Center as a temporary educator to cover maternity leave and training periods.`
  },
  {
    author: "Karen Marie (Educator - Roskilde Daycare Center)",
    target: "Kindergarten Department",
    date: "2026-01-19T12:22:00",
    displayDate: "Jan 19 12:22",
    title: "Maternity leave",
    message: `Dear parents,
I am going on maternity leave starting February 10. Thank you for your cooperation and support.`
  },
  {
    author: "Emma Davis (Educator - Roskilde Daycare Center)",
    target: "Kindergarten Department",
    date: "2025-12-01T14:38:00",
    displayDate: "Dec 1 14:38",
    title: "Christmas clip 🎄😊",
    message: `Dear parents,
After 3 pm, you can find your child in the nursery at Venus. We are looking forward to a pleasant afternoon.`
  }
];


// ----------------------------
// Random birthdays for demo
// ----------------------------
kids.forEach(kid => {
  const day = Math.floor(Math.random() * 28) + 1;
  kid.birthday = `2026-03-${day.toString().padStart(2, "0")}`;
});

// ----------------------------
// Render birthday card
// ----------------------------
function renderBirthdayCard() {
  const today = new Date().toISOString().split('T')[0];
  const birthdayKids = kids.filter(k => k.birthday === today);
  const container = document.getElementById("birthday-card");

  if (birthdayKids.length === 0) {
    container.innerHTML = `<p>No birthdays today 🎈</p>`;
  } else {
    container.innerHTML = `<h3>🎉 Birthday Today!</h3>` +
      birthdayKids.map(k => `<p>${k.name}, Age ${k.age}</p>`).join('');
  }
}

// ----------------------------
// Render children list and modal
// ----------------------------
const modal = document.getElementById("child-modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalAge = document.getElementById("modal-age");
const modalGroup = document.getElementById("modal-group");
const modalParents = document.getElementById("modal-parents");
const modalStatus = document.getElementById("modal-status");
const modalClose = document.getElementById("modal-close");

function renderChildren() {
  const container = document.getElementById("children-list");
  container.innerHTML = "";

  if (!kids || kids.length === 0) {
    console.warn("No kids data!");
    return;
  }

kids.forEach(kid => {
  console.log("Rendering child:", kid.name, kid.image);
  const card = document.createElement("div");
  card.classList.add("card");

  // Optional: visual status border
  card.style.border = kid.checkedIn ? "2px solid green" : "2px solid red";

  // Image
  const img = new Image();
  img.src = kid.image;
  img.alt = kid.name;
  img.onerror = () => console.warn("Image failed to load:", kid.image);
  card.appendChild(img);

  // Name + age
  const p = document.createElement("p");
  p.textContent = `${kid.name}, Age ${kid.age}`;
  card.appendChild(p);

  // ✅ Status text
  const status = document.createElement("p");
  status.textContent = kid.checkedIn ? "🟢 Checked In" : "🔴 Checked Out";
  status.style.fontSize = "0.9rem";
  card.appendChild(status);

// ✅ Check-in button
const btn = document.createElement("button");
btn.textContent = kid.checkedIn ? "Check Out" : "Check In";

btn.addEventListener("click", (e) => {
  e.stopPropagation();   // prevent card click (modal)
  e.preventDefault();    // extra safety

  console.log("Clicked:", kid.name); // 👈 debug

  toggleCheckIn(kid);
});

card.appendChild(btn);

  // Modal click (unchanged)
card.addEventListener("click", () => {
  modalImage.src = kid.image;
  modalImage.alt = kid.name;
  modalName.textContent = kid.name;
  modalAge.textContent = `Age: ${kid.age}`;
  modalGroup.textContent = `Group: ${kid.group} Group`;
  modalParents.textContent = `Parents: ${kid.parents}`;
  modalStatus.textContent = kid.checkedIn ? "🟢 Checked In" : "🔴 Not Checked In"; // ✅ show status
  modal.classList.remove("hidden");
});

  container.appendChild(card);
});
}

// Close modal
modalClose.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

// ----------------------------
// Toggle check-in status for a child
// ----------------------------
function toggleCheckIn(kid) {
  kid.checkedIn = !kid.checkedIn; // flip the status
  renderChildren();               // re-render the list to update UI
}

// ----------------------------
// Render notifications
// ----------------------------
function renderNotifications() {
  const list = document.getElementById("notif-list");
  list.innerHTML = "";

  // Optional: sort notifications newest first
  const sorted = notifications.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  sorted.forEach(notif => {
    const card = document.createElement("div");
    card.classList.add("notification-card");
    card.innerHTML = `
      <div class="notification-header">
        <strong>${notif.title}</strong> — <span class="author">${notif.author}</span>
        <span class="timestamp">${notif.displayDate}</span>
      </div>
      <div class="notification-body">
        ${notif.message.split("\n").map(line => `<p>${line}</p>`).join("")}
      </div>
      <div class="notification-footer" style="font-size:0.75rem; color:#888; margin-top:5px;">
        Shared with: ${notif.target}
      </div>
    `;
    list.appendChild(card);
  });

  document.getElementById("notif-count").textContent = notifications.length;
}

// ----------------------------
// Render activities
// ----------------------------
function renderActivities() {
  const tableBody = document.querySelector("#activities-table tbody");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  const groups = ["Red", "Blue", "Yellow", "Green"];
  const circleTime = { title: "Circle Time", description: "Songs and talking about how the children are" };
  const outdoorPlay = { title: "Outdoor Play", description: "Outdoor play time" };
  const lunch = { title: "Lunch", description: "Lunch time" };
  const randomPool = activities.filter(a => !["Circle Time", "Outdoor Play", "Lunch"].includes(a.title));

  function pickRandomActivities() {
    const copy = [...randomPool];
    const result = {};
    groups.forEach(g => {
      const index = Math.floor(Math.random() * copy.length);
      result[g] = copy[index].title;
      copy.splice(index, 1);
    });
    return result;
  }

  const rows = [circleTime, "Random1", outdoorPlay, lunch, "Random2"];

  rows.forEach(rowItem => {
    const tr = document.createElement("tr");
    groups.forEach(g => {
      const td = document.createElement("td");
      td.style.padding = "10px";
      td.style.textAlign = "center";
      if (rowItem === "Random1" || rowItem === "Random2") {
        const randomActs = pickRandomActivities();
        td.textContent = randomActs[g];
      } else {
        td.textContent = rowItem.description;
      }
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

// ----------------------------
// Lunch menu
// ----------------------------
const lunchPool = [
  "Tomato soup 🍅","Grilled chicken 🍗","Steamed vegetables 🥦","Fruit salad 🍎",
  "Pasta with cheese 🧀","Mini sandwiches 🥪","Rice with veggies 🍚","Omelette 🍳",
  "Fish fingers 🐟","Vegetable stir-fry 🥕","Mac & cheese 🧀","Chicken nuggets 🍗",
  "Mashed potatoes 🥔","Salmon fillet 🐟","Quiche 🥧","Mini pizza 🍕","Pancakes 🥞",
  "Beef stew 🥩","Couscous salad 🥗","Cheese toasties 🥪","Lentil soup 🥣",
  "Spaghetti bolognese 🍝","Tuna salad 🥗","Veggie burgers 🍔","Grilled cheese sandwich 🥪",
  "Chicken soup 🍲","Roasted vegetables 🥕","Fried rice 🍚","Meatballs in tomato sauce 🍝",
  "Egg fried rice 🍳","Turkey wrap 🌯","Cheese omelette 🧀","Stuffed peppers 🌶️",
  "Chicken salad 🥗","Mini tacos 🌮","Baked potatoes 🥔","Vegetable lasagna 🍝",
  "Shrimp stir-fry 🍤","Pumpkin soup 🎃","Greek salad 🥗","Beef tacos 🌮","Grilled fish 🐟",
  "Chicken curry 🍛","Veggie sushi 🍣","Baked chicken drumsticks 🍗","Tomato & mozzarella salad 🥗",
  "Frittata 🍳","Pasta primavera 🍝","Minestrone soup 🍲","Falafel wrap 🌯","Caprese sandwich 🥪"
];

function renderLunchMenu() {
  const menuContainer = document.getElementById("lunch-menu");
  const item = lunchPool[Math.floor(Math.random() * lunchPool.length)];
  menuContainer.textContent = `🍽️ Today's Lunch: ${item}`;
}

// ----------------------------
// Weather
// ----------------------------
async function fetchWeather() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.6419&longitude=12.0803&hourly=temperature_2m");
    const data = await response.json();
    const temp = data.hourly.temperature_2m[new Date().getHours()];
    document.getElementById("current-weather").textContent = `${temp}°C`;
  } catch (err) {
    console.error("Weather fetch error:", err);
    document.getElementById("current-weather").textContent = "N/A";
  }
}

// ----------------------------
// Date & Time
// ----------------------------
function updateDateTime() {
  const now = new Date();
  document.getElementById("current-date").textContent = now.toLocaleDateString("en-GB", { weekday: "short", year: "numeric", month: "short", day: "numeric" });
  document.getElementById("current-time").textContent = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
}

// ----------------------------
// Sections nav
// ----------------------------
const dashboardSection = document.getElementById("dashboard");
const childrenSection = document.getElementById("children");
const notificationsSection = document.getElementById("notifications");

// First define the function
function showSection(section) {
  dashboardSection.classList.add("hidden");
  childrenSection.classList.add("hidden");
  notificationsSection.classList.add("hidden");

  if (section === "dashboard") dashboardSection.classList.remove("hidden");
  if (section === "children") childrenSection.classList.remove("hidden");
  if (section === "notifications") notificationsSection.classList.remove("hidden");
}

// Then attach listeners
document.getElementById("dashboard-btn").addEventListener("click", () => showSection("dashboard"));
document.getElementById("children-btn").addEventListener("click", () => {
  showSection("children");
  renderChildren(); // make sure children render each time
});
document.getElementById("notifications-btn").addEventListener("click", () => showSection("notifications"));

// ----------------------------
// Initialize everything
// ----------------------------
renderChildren();
renderActivities();
renderNotifications();
renderBirthdayCard();
renderLunchMenu();
fetchWeather();
updateDateTime();
showSection("dashboard");

setInterval(fetchWeather, 600000); // 10 min
setInterval(updateDateTime, 1000);  // every second

