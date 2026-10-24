// CampusClub Hub JavaScript Logic
const INITIAL_CLUBS = [
  {
    id: "club_coding",
    name: "Coding & Open Source Club",
    category: "Technical",
    badgeClass: "badge-tech",
    tagline: "Building scalable web & cloud solutions",
    description: "The primary coding community focusing on Full-Stack Web Development, Data Structures, Git/GitHub version control, Open Source contributions, and Competitive Programming.",
    tags: ["JavaScript", "Python", "Web Dev", "Algorithms", "GitHub"],
    coordinator: "Dr. K. Senthil Kumar (HOD, CS)",
    venue: "Computer Science Lab 2",
    schedule: "Every Wednesday, 3:30 PM - 5:00 PM",
    email: "codingclub@taggac.edu.in",
    members: [
      { regno: "25132061802522068", name: "ROOBEENA.A", dept: "B.Sc. Computer Science", date: "2026-08-15" },
      { regno: "25132061802522045", name: "K. Vignesh", dept: "B.Sc. Computer Science", date: "2026-08-18" },
      { regno: "25132061802522012", name: "M. Priya", dept: "B.Sc. Mathematics", date: "2026-08-20" }
    ]
  },
  {
    id: "club_ai_data",
    name: "AI & Data Science Society",
    category: "Technical",
    badgeClass: "badge-tech",
    tagline: "Exploring Machine Learning, AI & Big Data",
    description: "Dedicated to advancing student interest in Artificial Intelligence, Neural Networks, Computer Vision, and Predictive Analytics through hands-on hackathons and project labs.",
    tags: ["Machine Learning", "Python", "Deep Learning", "Data Analysis"],
    coordinator: "Prof. S. Ranganathan (CS Dept)",
    venue: "Advanced Computing Lab",
    schedule: "Every Friday, 4:00 PM - 5:30 PM",
    email: "datascience@taggac.edu.in",
    members: [
      { regno: "25132061802522068", name: "ROOBEENA.A", dept: "B.Sc. Computer Science", date: "2026-08-15" },
      { regno: "25132061802522088", name: "R. Dinesh", dept: "B.Sc. Physics", date: "2026-08-22" }
    ]
  },
  {
    id: "club_arts",
    name: "Fine Arts & Literary Forum",
    category: "Arts & Culture",
    badgeClass: "badge-arts",
    tagline: "Expressing creativity through literature & arts",
    description: "A cultural collective encouraging creative writing, elocution, classical Tamil and English literature, painting, dramatic arts, and campus cultural festivals.",
    tags: ["Tamil Literature", "Elocution", "Debate", "Creative Writing"],
    coordinator: "Dr. P. Meenakshi (Tamil Dept)",
    venue: "College Auditorium & Seminar Hall",
    schedule: "Every Tuesday, 4:00 PM - 5:00 PM",
    email: "artsforum@taggac.edu.in",
    members: [
      { regno: "25132061802522031", name: "A. Kavitha", dept: "B.A. Tamil", date: "2026-08-16" }
    ]
  },
  {
    id: "club_sports",
    name: "Campus Sports & Fitness Academy",
    category: "Sports & Fitness",
    badgeClass: "badge-sports",
    tagline: "Fostering athletic excellence, teamwork & endurance",
    description: "Organizes university-level tournaments in Cricket, Badminton, Volleyball, Track & Field Athletics, and conducts morning physical conditioning camps.",
    tags: ["Cricket", "Athletics", "Badminton", "Fitness", "Yoga"],
    coordinator: "Mr. M. Anand (Physical Director)",
    venue: "College Sports Pavilion & Grounds",
    schedule: "Daily 6:30 AM & 4:30 PM",
    email: "sports@taggac.edu.in",
    members: [
      { regno: "25132061802522019", name: "S. Praveen Kumar", dept: "B.Com", date: "2026-08-19" },
      { regno: "25132061802522055", name: "G. Sanjay", dept: "B.Sc. Computer Science", date: "2026-08-21" }
    ]
  },
  {
    id: "club_nss",
    name: "National Service Scheme (NSS)",
    category: "Social Welfare",
    badgeClass: "badge-social",
    tagline: "Not Me But You - Community Empowerment",
    description: "Active community welfare unit organizing blood donation drives, environmental cleanups, tree plantations, literacy campaigns, and rural development camps.",
    tags: ["Blood Donation", "Tree Plantation", "Social Welfare", "Civic Action"],
    coordinator: "Dr. R. Balakrishnan (Chemistry Dept)",
    venue: "NSS Unit Room, Administrative Wing",
    schedule: "Saturdays 9:30 AM - 1:00 PM",
    email: "nss@taggac.edu.in",
    members: [
      { regno: "25132061802522068", name: "ROOBEENA.A", dept: "B.Sc. Computer Science", date: "2026-08-15" },
      { regno: "25132061802522077", name: "J. Nancy", dept: "B.Sc. Mathematics", date: "2026-08-25" }
    ]
  },
  {
    id: "club_web",
    name: "Web & UX Designers Guild",
    category: "Technical",
    badgeClass: "badge-tech",
    tagline: "Designing modern web interfaces & user experiences",
    description: "Focusing on Responsive UI/UX Design, CSS architecture, Tailwind CSS, Figma prototyping, and accessible frontend engineering for college portals.",
    tags: ["UI/UX", "Figma", "HTML5", "CSS3", "Design Systems"],
    coordinator: "Prof. E. Saravanan (CS Dept)",
    venue: "Design Studio Lab 1",
    schedule: "Every Thursday, 3:30 PM - 5:00 PM",
    email: "designguild@taggac.edu.in",
    members: [
      { regno: "25132061802522068", name: "ROOBEENA.A", dept: "B.Sc. Computer Science", date: "2026-08-15" }
    ]
  }
];

const INITIAL_EVENTS = [
  {
    id: "evt_101",
    clubId: "club_coding",
    clubName: "Coding & Open Source Club",
    title: "Level 2 Web Dev Hackathon & Showcase",
    date: "2026-10-24",
    time: "10:00 AM - 04:00 PM",
    venue: "Main Computer Lab 1",
    description: "Hands-on web development hackathon challenging student developers to build production-grade web applications using HTML5, CSS3, JavaScript, and LocalStorage APIs."
  },
  {
    id: "evt_102",
    clubId: "club_ai_data",
    clubName: "AI & Data Science Society",
    title: "Workshop: Building Intelligent Apps with Python",
    date: "2026-10-28",
    time: "02:00 PM - 04:30 PM",
    venue: "Smart Seminar Hall B",
    description: "Interactive session on neural network basics, training simple image classification models, and deploying API inference endpoints."
  },
  {
    id: "evt_103",
    clubId: "club_nss",
    clubName: "National Service Scheme (NSS)",
    title: "Campus Mega Blood Donation Camp 2026",
    date: "2026-11-02",
    time: "09:00 AM - 02:00 PM",
    venue: "College Indoor Sports Complex",
    description: "Organized in collaboration with Government District Hospital. Free medical health checkups and donor donor certificates provided."
  },
  {
    id: "evt_104",
    clubId: "club_arts",
    clubName: "Fine Arts & Literary Forum",
    title: "Inter-College Classical Tamil Elocution Contest",
    date: "2026-11-06",
    time: "10:30 AM - 01:30 PM",
    venue: "Auditorium Hall 1",
    description: "Annual competition celebrating classical Tamil poetry and modern literary oratory. Cash awards and trophies for winning speakers."
  }
];

const CURRENT_USER = {
  name: "ROOBEENA.A",
  regno: "25132061802522068",
  dept: "B.Sc. Computer Science",
  studentId: "20625UCSE233",
  college: "Thiru A. Govindasamy Government Arts College",
  email: "roobeena.cs@college.edu",
  phone: "9876543210"
};

let state = {
  clubs: [],
  events: [],
  selectedCategory: "ALL",
  searchQuery: "",
  activeClubModalId: null
};

const STORAGE_KEY_CLUBS = "campusclub_hub_clubs";
const STORAGE_KEY_EVENTS = "campusclub_hub_events";
const STORAGE_KEY_USER = "campusclub_hub_user";

document.addEventListener("DOMContentLoaded", () => {
  initLocalStorage();
  loadData();
  renderApp();
  populateEventClubDropdown();
});

function initLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY_CLUBS)) {
    localStorage.setItem(STORAGE_KEY_CLUBS, JSON.stringify(INITIAL_CLUBS));
  }
  if (!localStorage.getItem(STORAGE_KEY_EVENTS)) {
    localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(INITIAL_EVENTS));
  }
  if (!localStorage.getItem(STORAGE_KEY_USER)) {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(CURRENT_USER));
  }
}

function loadData() {
  state.clubs = JSON.parse(localStorage.getItem(STORAGE_KEY_CLUBS)) || [];
  state.events = JSON.parse(localStorage.getItem(STORAGE_KEY_EVENTS)) || [];
}

function saveData() {
  localStorage.setItem(STORAGE_KEY_CLUBS, JSON.stringify(state.clubs));
  localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(state.events));
}

function renderApp() {
  renderClubsGrid();
  renderEventsGrid();
  renderMyMemberships();
  updateStatistics();
}

function updateStatistics() {
  const totalClubs = state.clubs.length;
  const totalEvents = state.events.length;
  const memberSet = new Set();
  state.clubs.forEach(c => {
    c.members.forEach(m => memberSet.add(m.regno));
  });

  document.getElementById("stat-club-count").textContent = totalClubs;
  document.getElementById("stat-member-count").textContent = memberSet.size;
  document.getElementById("stat-event-count").textContent = totalEvents;
}

function renderClubsGrid() {
  const container = document.getElementById("clubs-container");
  const filteredClubs = state.clubs.filter(club => {
    const matchesCategory = state.selectedCategory === "ALL" || club.category === state.selectedCategory;
    const q = state.searchQuery.toLowerCase();
    const matchesSearch = club.name.toLowerCase().includes(q) || 
                          club.description.toLowerCase().includes(q) ||
                          club.tags.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  document.getElementById("catalog-count-label").textContent = 
    `Showing ${filteredClubs.length} of ${state.clubs.length} available clubs`;

  if (filteredClubs.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 12px; border: 1px dashed var(--gray-300);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--gray-500); margin-bottom: 0.75rem;"></i>
        <h3>No matching clubs found</h3>
        <p style="color: var(--gray-500);">Try adjusting your search terms or selecting another category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredClubs.map(club => {
    const isMember = isUserEnrolled(club.id);
    const clubEvents = state.events.filter(e => e.clubId === club.id);

    return `
      <article class="club-card">
        <div class="club-card-header">
          <span class="club-badge ${club.badgeClass}">${club.category}</span>
          ${isMember ? `<span class="membership-status-badge joined"><i class="fa-solid fa-check"></i> Enrolled</span>` : ''}
        </div>
        <div class="club-card-body">
          <h3 class="club-title">${escapeHtml(club.name)}</h3>
          <p class="club-description">${escapeHtml(club.description)}</p>
          <div class="club-tags">
            ${club.tags.map(t => `<span class="tag-item">#${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="club-metrics">
            <span><i class="fa-solid fa-users"></i> <strong>${club.members.length}</strong> Members</span>
            <span><i class="fa-solid fa-calendar-check"></i> <strong>${clubEvents.length}</strong> Events</span>
          </div>
        </div>
        <div class="club-card-footer">
          <button class="btn btn-outline btn-sm" onclick="openClubModal('${club.id}')">
            <i class="fa-solid fa-circle-info"></i> View Details
          </button>
          ${isMember ? `
            <button class="btn btn-danger btn-sm" onclick="leaveClub('${club.id}')">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Leave
            </button>
          ` : `
            <button class="btn btn-primary btn-sm" onclick="openRegistrationModal('${club.id}')">
              <i class="fa-solid fa-user-plus"></i> Join Club
            </button>
          `}
        </div>
      </article>
    `;
  }).join('');
}

function filterByCategory(category) {
  state.selectedCategory = category;
  document.querySelectorAll("#category-pills .pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderClubsGrid();
}

function handleSearchFilter() {
  state.searchQuery = document.getElementById("search-input").value.trim();
  renderClubsGrid();
}

function isUserEnrolled(clubId) {
  const club = state.clubs.find(c => c.id === clubId);
  if (!club) return false;
  return club.members.some(m => m.regno === CURRENT_USER.regno);
}

function renderEventsGrid() {
  const container = document.getElementById("events-container");
  if (state.events.length === 0) {
    container.innerHTML = `<p style="color: var(--gray-500); grid-column: 1/-1;">No announcements posted yet.</p>`;
    return;
  }

  container.innerHTML = state.events.map(evt => `
    <div class="event-card">
      <div>
        <div class="event-header">
          <span class="event-date-chip"><i class="fa-regular fa-calendar"></i> ${evt.date}</span>
          <small style="color: var(--primary); font-weight: 700;">${escapeHtml(evt.clubName)}</small>
        </div>
        <h4 class="event-title">${escapeHtml(evt.title)}</h4>
        <div class="event-meta">
          <span><i class="fa-regular fa-clock"></i> ${escapeHtml(evt.time)}</span>
          <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(evt.venue)}</span>
        </div>
        <p class="event-desc">${escapeHtml(evt.description)}</p>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="showToast('RSVP Confirmed for: ' + '${escapeHtml(evt.title)}', 'success')">
        <i class="fa-solid fa-bell"></i> RSVP Attending
      </button>
    </div>
  `).join('');
}

function renderMyMemberships() {
  const container = document.getElementById("my-memberships-container");
  const enrolledClubs = state.clubs.filter(club => isUserEnrolled(club.id));

  if (enrolledClubs.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 2rem; background: white; border-radius: 8px; border: 1px dashed var(--gray-300);">
        <p style="color: var(--gray-500); margin-bottom: 0.5rem;">You haven't joined any clubs yet.</p>
        <a href="#clubs" class="btn btn-outline btn-sm">Explore Clubs Directory</a>
      </div>
    `;
    return;
  }

  container.innerHTML = enrolledClubs.map(club => {
    const memberRecord = club.members.find(m => m.regno === CURRENT_USER.regno);
    return `
      <div class="enrolled-card">
        <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--dark);">${escapeHtml(club.name)}</h4>
        <span class="club-badge ${club.badgeClass}" style="display:inline-block; margin: 0.4rem 0 0.8rem;">${club.category}</span>
        <p style="font-size: 0.82rem; color: var(--gray-500); margin-bottom: 0.85rem;">
          <i class="fa-regular fa-calendar-check"></i> Enrolled on: ${memberRecord ? memberRecord.date : 'Recent'}
        </p>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-outline btn-sm" onclick="openClubModal('${club.id}')">View Portal</button>
          <button class="btn btn-danger btn-sm" onclick="leaveClub('${club.id}')">Leave</button>
        </div>
      </div>
    `;
  }).join('');
}

function openClubModal(clubId) {
  state.activeClubModalId = clubId;
  const club = state.clubs.find(c => c.id === clubId);
  if (!club) return;

  const isMember = isUserEnrolled(club.id);
  const clubEvents = state.events.filter(e => e.clubId === club.id);

  document.getElementById("modal-club-cat").textContent = club.category;
  document.getElementById("modal-club-title").textContent = club.name;
  document.getElementById("modal-club-tagline").textContent = club.tagline;
  document.getElementById("modal-member-count").textContent = club.members.length;
  document.getElementById("modal-event-count").textContent = clubEvents.length;

  document.getElementById("modal-club-desc").textContent = club.description;
  document.getElementById("modal-club-coordinator").textContent = club.coordinator;
  document.getElementById("modal-club-venue").textContent = club.venue;
  document.getElementById("modal-club-schedule").textContent = club.schedule;
  document.getElementById("modal-club-email").textContent = club.email;

  const tbody = document.getElementById("modal-members-tbody");
  tbody.innerHTML = club.members.map(m => `
    <tr>
      <td><strong>${escapeHtml(m.regno)}</strong></td>
      <td>${escapeHtml(m.name)}</td>
      <td>${escapeHtml(m.dept)}</td>
      <td>${escapeHtml(m.date)}</td>
    </tr>
  `).join('');

  const eventsContainer = document.getElementById("modal-events-list");
  if (clubEvents.length === 0) {
    eventsContainer.innerHTML = `<p style="padding: 1rem; color: var(--gray-500);">No upcoming events scheduled for this club yet.</p>`;
  } else {
    eventsContainer.innerHTML = clubEvents.map(e => `
      <div style="border: 1px solid var(--gray-200); padding: 1rem; border-radius: 8px; margin-bottom: 0.75rem; background: var(--gray-50);">
        <h4 style="color: var(--dark);">${escapeHtml(e.title)}</h4>
        <div style="font-size: 0.8rem; color: var(--gray-500); margin: 0.3rem 0;">
          <i class="fa-regular fa-calendar"></i> ${e.date} | <i class="fa-regular fa-clock"></i> ${e.time} | <i class="fa-solid fa-location-dot"></i> ${e.venue}
        </div>
        <p style="font-size: 0.85rem; color: var(--gray-600);">${escapeHtml(e.description)}</p>
      </div>
    `).join('');
  }

  const actionContainer = document.getElementById("modal-membership-action-container");
  if (isMember) {
    actionContainer.innerHTML = `
      <button class="btn btn-danger" onclick="leaveClub('${club.id}', true)">
        <i class="fa-solid fa-arrow-right-from-bracket"></i> Leave Club Membership
      </button>
    `;
  } else {
    actionContainer.innerHTML = `
      <button class="btn btn-primary" onclick="closeModal('club-info-modal'); openRegistrationModal('${club.id}')">
        <i class="fa-solid fa-user-plus"></i> Register & Join Club
      </button>
    `;
  }

  switchClubTab('about');
  document.getElementById("club-info-modal").classList.add("active");
}

function switchClubTab(tabName) {
  document.querySelectorAll(".modal-tabs .tab-btn").forEach((btn, idx) => {
    const isTarget = (tabName === 'about' && idx === 0) || (tabName === 'members' && idx === 1) || (tabName === 'events' && idx === 2);
    btn.classList.toggle("active", isTarget);
  });
  document.getElementById("tab-about").classList.toggle("active", tabName === 'about');
  document.getElementById("tab-members").classList.toggle("active", tabName === 'members');
  document.getElementById("tab-events").classList.toggle("active", tabName === 'events');
}

function openRegistrationModal(clubId) {
  const club = state.clubs.find(c => c.id === clubId);
  if (!club) return;

  document.getElementById("reg-club-id").value = club.id;
  document.getElementById("reg-club-subtext").textContent = `Registering for: ${club.name}`;
  document.getElementById("reg-name").value = CURRENT_USER.name;
  document.getElementById("reg-regno").value = CURRENT_USER.regno;
  document.getElementById("reg-studentid").value = CURRENT_USER.studentId;
  document.getElementById("reg-email").value = CURRENT_USER.email;
  document.getElementById("reg-phone").value = CURRENT_USER.phone;

  clearFormErrors();
  document.getElementById("registration-modal").classList.add("active");
}

function clearFormErrors() {
  document.getElementById("err-name").textContent = "";
  document.getElementById("err-regno").textContent = "";
  document.getElementById("err-studentid").textContent = "";
  document.getElementById("err-email").textContent = "";
  document.getElementById("err-phone").textContent = "";
}

function handleRegistrationSubmit(e) {
  e.preventDefault();
  clearFormErrors();

  const clubId = document.getElementById("reg-club-id").value;
  const name = document.getElementById("reg-name").value.trim();
  const regno = document.getElementById("reg-regno").value.trim();
  const studentId = document.getElementById("reg-studentid").value.trim();
  const dept = document.getElementById("reg-dept").value;
  const email = document.getElementById("reg-email").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const terms = document.getElementById("reg-terms").checked;

  let isValid = true;
  if (name.length < 3) {
    document.getElementById("err-name").textContent = "Please enter your full official name.";
    isValid = false;
  }
  const regRegex = /^[0-9]{12,18}$/;
  if (!regRegex.test(regno)) {
    document.getElementById("err-regno").textContent = "Register number must be 12 to 18 numeric digits.";
    isValid = false;
  }
  if (studentId.length < 5) {
    document.getElementById("err-studentid").textContent = "Provide a valid college student ID code.";
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("err-email").textContent = "Please enter a valid academic/personal email address.";
    isValid = false;
  }
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("err-phone").textContent = "Enter a valid 10-digit Indian mobile number.";
    isValid = false;
  }
  if (!terms) {
    showToast("Please agree to the membership guidelines.", "warning");
    isValid = false;
  }
  if (!isValid) return;

  const club = state.clubs.find(c => c.id === clubId);
  if (!club) return;

  if (club.members.some(m => m.regno === regno)) {
    showToast("You are already an active member of this club!", "warning");
    closeModal('registration-modal');
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  const newMember = { regno: regno, name: name, dept: dept, date: today };
  club.members.push(newMember);
  saveData();
  renderApp();
  closeModal('registration-modal');
  showToast(`Congratulations! You have successfully enrolled in ${club.name}`, "success");
}

function leaveClub(clubId, fromModal = false) {
  const club = state.clubs.find(c => c.id === clubId);
  if (!club) return;
  const confirmLeave = confirm(`Are you sure you want to leave ${club.name}?`);
  if (!confirmLeave) return;

  club.members = club.members.filter(m => m.regno !== CURRENT_USER.regno);
  saveData();
  renderApp();

  if (fromModal) openClubModal(clubId);
  showToast(`You have withdrawn your membership from ${club.name}.`, "info");
}

function populateEventClubDropdown() {
  const select = document.getElementById("event-club-select");
  select.innerHTML = state.clubs.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
}

function openAddEventModal() {
  populateEventClubDropdown();
  document.getElementById("add-event-form").reset();
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("event-date").min = today;
  document.getElementById("event-date").value = today;
  document.getElementById("add-event-modal").classList.add("active");
}

function handleAddEventSubmit(e) {
  e.preventDefault();
  const clubId = document.getElementById("event-club-select").value;
  const club = state.clubs.find(c => c.id === clubId);
  const title = document.getElementById("event-title").value.trim();
  const date = document.getElementById("event-date").value;
  const time = document.getElementById("event-time").value;
  const venue = document.getElementById("event-venue").value.trim();
  const desc = document.getElementById("event-description").value.trim();

  if (!title || !date || !time || !venue || !desc) {
    showToast("Please fill all event details", "warning");
    return;
  }

  const newEvent = {
    id: "evt_" + Date.now(),
    clubId: clubId,
    clubName: club ? club.name : "College Club",
    title: title,
    date: date,
    time: time,
    venue: venue,
    description: desc
  };

  state.events.unshift(newEvent);
  saveData();
  renderApp();
  closeModal('add-event-modal');
  showToast("Event announcement published successfully!", "success");
}

function openProfileModal() {
  showToast(`Current Candidate: ${CURRENT_USER.name} (${CURRENT_USER.regno}) · ${CURRENT_USER.dept}`, "info");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
  }
});

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "warning") icon = "fa-triangle-exclamation";
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
