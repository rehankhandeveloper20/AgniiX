// I kept the dashboard data simple so you can understand and replace it later.

const incidents = [
    {
        icon: "🔥",
        title: "Residential Fire",
        location: "Andheri West, Mumbai",
        time: "10:30 AM",
        status: "In Progress",
        color: "red"
    },

    {
        icon: "🚗",
        title: "Road Accident",
        location: "Link Road, Andheri",
        time: "09:15 AM",
        status: "Responded",
        color: "blue"
    },

    {
        icon: "🌳",
        title: "Tree Fall",
        location: "Lokhandwala, Andheri",
        time: "08:45 AM",
        status: "Completed",
        color: "green"
    }
];


const team = [
    {
        initials: "KS",
        name: "Kavya Sharma",
        role: "Station Officer"
    },

    {
        initials: "RP",
        name: "Rohan Patil",
        role: "Firefighter"
    },

    {
        initials: "SI",
        name: "Sneha Iyer",
        role: "Firefighter"
    },

    {
        initials: "AS",
        name: "Arjun Singh",
        role: "Driver"
    }
];



/* Sidebar is generated once so every page can use the same navigation. */

function createSidebar(activePage) {

    const menu = [
        {
            name: "Dashboard",
            icon: "🏠",
            link: "index.html",
            id: "dashboard"
        },

        {
            name: "Incidents",
            icon: "🚨",
            link: "incidents.html",
            id: "incidents"
        },

        {
            name: "Vehicles",
            icon: "🚒",
            link: "vehicles.html",
            id: "vehicles"
        },

        {
            name: "Equipment",
            icon: "🧯",
            link: "equipment.html",
            id: "equipment"
        },

        {
            name: "Team",
            icon: "👥",
            link: "team.html",
            id: "team"
        },

        {
            name: "Training",
            icon: "🎓",
            link: "training.html",
            id: "training"
        },

        {
            name: "Reports",
            icon: "📄",
            link: "reports.html",
            id: "reports"
        },

        {
            name: "Settings",
            icon: "⚙️",
            link: "settings.html",
            id: "settings"
        }
    ];


    return `
        <aside class="sidebar">

            <div class="brand">

                <div class="brand-mark">
                    🔥
                </div>

                <div class="brand-text">
                    <strong>FIRE STATION</strong>
                    <span>DASHBOARD</span>
                </div>

            </div>


            <nav class="nav">

                ${menu.map(item => `

                    <a
                        href="${item.link}"
                        class="nav-link ${activePage === item.id ? "active" : ""}"
                    >

                        <span class="nav-icon">
                            ${item.icon}
                        </span>

                        <span>
                            ${item.name}
                        </span>

                    </a>

                `).join("")}

            </nav>


            <div class="hotline">

                <div class="hotline-icon">
                    📞
                </div>

                <div>

                    <strong>
                        101
                    </strong>

                    <span>
                        Emergency Hotline ·<br>
                        24/7
                    </span>

                </div>

            </div>

        </aside>
    `;
}



/* This creates the four small statistic cards. */

function createStatCard(icon, color, title, value) {

    return `
        <div class="stat-card">

            <div class="stat-icon ${color}">
                ${icon}
            </div>

            <div>

                <div class="stat-label">
                    ${title}
                </div>

                <div class="stat-value">
                    ${value}
                </div>

            </div>

        </div>
    `;
}



/* Recent incidents section. */

function createIncidentList() {

    return incidents.map(item => `

        <div class="incident-row">

            <div class="incident-icon">
                ${item.icon}
            </div>


            <div class="incident-main">

                <strong>
                    ${item.title}
                </strong>

                <span>
                    ${item.location}
                </span>

            </div>


            <div class="incident-time">

                ${item.time}

                <br>

                <span class="badge ${item.color}">
                    ${item.status}
                </span>

            </div>

        </div>

    `).join("");
}



/* Team members shown at the bottom of the dashboard. */

function createTeamList() {

    return team.map(member => `

        <div class="member-card">

            <div class="avatar">
                ${member.initials}
            </div>

            <div>

                <strong>
                    ${member.name}
                </strong>

                <span>
                    <i class="dot"></i>
                    ${member.role}
                </span>

            </div>

        </div>

    `).join("");
}



/* Popup used by the New Incident button. */

function createModal() {

    return `

        <div
            class="modal-backdrop"
            id="incidentModal"
        >

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        Create New Incident
                    </h2>

                    <button
                        class="close"
                        id="closeModal"
                    >
                        ×
                    </button>

                </div>


                <form id="incidentForm">

                    <div class="form-grid">

                        <div class="form-group">

                            <label>
                                Incident Type
                            </label>

                            <select required>

                                <option>
                                    Fire
                                </option>

                                <option>
                                    Road Accident
                                </option>

                                <option>
                                    Rescue
                                </option>

                                <option>
                                    Tree Fall
                                </option>

                            </select>

                        </div>


                        <div class="form-group">

                            <label>
                                Location
                            </label>

                            <input
                                type="text"
                                placeholder="Enter incident location"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label>
                                Priority
                            </label>

                            <select>

                                <option>
                                    High
                                </option>

                                <option>
                                    Medium
                                </option>

                                <option>
                                    Low
                                </option>

                            </select>

                        </div>


                        <div
                            style="
                                display:flex;
                                justify-content:flex-end;
                                gap:10px;
                                margin-top:10px;
                            "
                        >

                            <button
                                type="button"
                                class="btn btn-light"
                                id="cancelModal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                Create Incident
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </div>

    `;
}



/* Build the complete dashboard. */

document.getElementById("app").innerHTML = `

    <div class="app-shell">

        ${createSidebar("dashboard")}


        <main class="main">

            <div class="page-title">

                <h1>
                    Welcome to Fire Station Dashboard
                </h1>

                <p>
                    Stay safe. Stay prepared.
                </p>

            </div>


            <section class="stats-grid">

                ${createStatCard(
                    "🔥",
                    "red",
                    "Total Incidents",
                    "24"
                )}

                ${createStatCard(
                    "🚒",
                    "blue",
                    "Active Vehicles",
                    "06"
                )}

                ${createStatCard(
                    "👥",
                    "gold",
                    "Team Members",
                    "32"
                )}

                ${createStatCard(
                    "🧯",
                    "green",
                    "Equipment",
                    "112"
                )}

            </section>



            <section class="dashboard-grid">


                <!-- Recent incidents -->

                <div class="panel">

                    <div class="panel-head">

                        <h2>
                            Recent Incidents
                        </h2>

                        <a href="incidents.html">
                            View All ›
                        </a>

                    </div>


                    <div class="incident-list">

                        ${createIncidentList()}

                    </div>

                </div>



                <!-- Active vehicle -->

                <div class="panel">

                    <div class="panel-head">

                        <h2>
                            Active Vehicles
                        </h2>

                    </div>


                    <div class="vehicle-preview">

                        🚒 &nbsp; Engine 07

                    </div>


                    <div class="vehicle-info">

                        <strong>
                            Engine 07
                        </strong>

                        <span>
                            Water Tender
                        </span>

                        <span class="badge green">
                            Available
                        </span>

                    </div>

                </div>



                <!-- Quick actions -->

                <div class="panel">

                    <div class="panel-head">

                        <h2>
                            Quick Actions
                        </h2>

                    </div>


                    <div class="quick-actions">

                        <button
                            class="quick-btn"
                            id="newIncidentBtn"
                        >

                            <span>
                                🚨
                            </span>

                            <strong>
                                New Incident
                            </strong>

                        </button>


                        <a
                            class="quick-btn"
                            href="reports.html"
                        >

                            <span>
                                📋
                            </span>

                            <strong>
                                Report
                            </strong>

                        </a>


                        <a
                            class="quick-btn"
                            href="team.html"
                        >

                            <span>
                                👥
                            </span>

                            <strong>
                                Team Status
                            </strong>

                        </a>


                        <a
                            class="quick-btn"
                            href="equipment.html"
                        >

                            <span>
                                🧰
                            </span>

                            <strong>
                                Equipment Check
                            </strong>

                        </a>

                    </div>

                </div>

            </section>



            <!-- Team section -->

            <section class="panel team-panel">

                <div class="panel-head">

                    <h2>
                        Team On Duty
                    </h2>

                    <a href="team.html">
                        View All Team ›
                    </a>

                </div>


                <div class="team-grid">

                    ${createTeamList()}

                </div>

            </section>


            ${createModal()}


            <div
                class="toast"
                id="toast"
            ></div>

        </main>

    </div>

`;



/* Open the incident popup. */

document
    .getElementById("newIncidentBtn")
    .addEventListener("click", () => {

        document
            .getElementById("incidentModal")
            .classList
            .add("show");

    });



/* Close popup from X button. */

document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);



/* Close popup from Cancel button. */

document
    .getElementById("cancelModal")
    .addEventListener("click", closeModal);



function closeModal() {

    document
        .getElementById("incidentModal")
        .classList
        .remove("show");

}



/* Fake submit for our frontend-only demo. */

document
    .getElementById("incidentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        closeModal();

        showToast(
            "Incident created successfully."
        );

    });



/* Small notification message. */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}