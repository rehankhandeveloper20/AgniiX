// I kept the incident list in simple JavaScript so you can easily understand the demo.

// Demo incidents for the frontend.
const incidents = [
    {
        id: "INC-1024",
        type: "Residential Fire",
        location: "Andheri West, Mumbai",
        priority: "High",
        status: "In Progress",
        team: "Team Alpha",
        vehicle: "Engine 07",
        date: "20 Aug 2026",
        time: "10:30 AM"
    },

    {
        id: "INC-1023",
        type: "Road Accident",
        location: "Link Road, Andheri",
        priority: "High",
        status: "Responded",
        team: "Team Bravo",
        vehicle: "Rescue 03",
        date: "20 Aug 2026",
        time: "09:15 AM"
    },

    {
        id: "INC-1022",
        type: "Tree Fall",
        location: "Lokhandwala, Mumbai",
        priority: "Medium",
        status: "Completed",
        team: "Team Charlie",
        vehicle: "Engine 04",
        date: "20 Aug 2026",
        time: "08:45 AM"
    },

    {
        id: "INC-1021",
        type: "Gas Leak",
        location: "Jogeshwari East",
        priority: "High",
        status: "Completed",
        team: "Team Alpha",
        vehicle: "Rescue 02",
        date: "19 Aug 2026",
        time: "06:20 PM"
    },

    {
        id: "INC-1020",
        type: "Small Fire",
        location: "Bandra East",
        priority: "Medium",
        status: "Completed",
        team: "Team Bravo",
        vehicle: "Engine 05",
        date: "19 Aug 2026",
        time: "04:10 PM"
    },

    {
        id: "INC-1019",
        type: "Rescue Call",
        location: "Malad West",
        priority: "Low",
        status: "Completed",
        team: "Team Charlie",
        vehicle: "Rescue 01",
        date: "19 Aug 2026",
        time: "02:35 PM"
    },

    {
        id: "INC-1018",
        type: "Commercial Fire",
        location: "Saki Naka",
        priority: "High",
        status: "In Progress",
        team: "Team Alpha",
        vehicle: "Engine 07",
        date: "19 Aug 2026",
        time: "11:50 AM"
    }
];


// Sidebar is shared with the dashboard design.
function createSidebar() {

    const menu = [
        {
            name: "Dashboard",
            icon: "🏠",
            link: "index.html"
        },

        {
            name: "Incidents",
            icon: "🚨",
            link: "incidents.html"
        },

        {
            name: "Vehicles",
            icon: "🚒",
            link: "vehicles.html"
        },

        {
            name: "Equipment",
            icon: "🧯",
            link: "equipment.html"
        },

        {
            name: "Team",
            icon: "👥",
            link: "team.html"
        },

        {
            name: "Training",
            icon: "🎓",
            link: "training.html"
        },

        {
            name: "Reports",
            icon: "📄",
            link: "reports.html"
        },

        {
            name: "Settings",
            icon: "⚙️",
            link: "settings.html"
        }
    ];


    return `
        <aside class="sidebar">

            <div class="brand">

                <div class="brand-mark">
                    🔥
                </div>

                <div class="brand-text">

                    <strong>
                        FIRE STATION
                    </strong>

                    <span>
                        DASHBOARD
                    </span>

                </div>

            </div>


            <nav class="nav">

                ${menu.map(item => `

                    <a
                        href="${item.link}"
                        class="nav-link ${
                            item.link === "incidents.html"
                                ? "active"
                                : ""
                        }"
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


// Convert priority into a badge.
function priorityBadge(priority) {

    let color = "gray";

    if (priority === "High") {
        color = "red";
    }

    if (priority === "Medium") {
        color = "gold";
    }

    if (priority === "Low") {
        color = "green";
    }

    return `
        <span class="badge ${color}">
            ${priority}
        </span>
    `;
}


// Convert incident status into a badge.
function statusBadge(status) {

    let color = "gray";

    if (status === "In Progress") {
        color = "red";
    }

    if (status === "Responded") {
        color = "blue";
    }

    if (status === "Completed") {
        color = "green";
    }

    return `
        <span class="badge ${color}">
            ${status}
        </span>
    `;
}


// Create rows for the incident table.
function renderIncidents(list) {

    const tableBody =
        document.getElementById("incidentTableBody");


    if (list.length === 0) {

        tableBody.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    class="empty-state"
                >
                    No incidents found.
                </td>

            </tr>

        `;

        return;
    }


    tableBody.innerHTML = list.map(incident => `

        <tr>

            <td class="incident-id">
                ${incident.id}
            </td>

            <td>
                ${incident.type}
            </td>

            <td>
                ${incident.location}
            </td>

            <td>
                ${priorityBadge(incident.priority)}
            </td>

            <td>
                ${statusBadge(incident.status)}
            </td>

            <td>
                ${incident.team}
            </td>

            <td>
                ${incident.date}<br>
                <small>${incident.time}</small>
            </td>

            <td>

                <button
                    class="action-btn"
                    onclick="viewIncident('${incident.id}')"
                >
                    View
                </button>

            </td>

        </tr>

    `).join("");
}


// Search and filter the incident list.
function filterIncidents() {

    const search =
        document
            .getElementById("searchIncident")
            .value
            .toLowerCase()
            .trim();


    const status =
        document
            .getElementById("statusFilter")
            .value;


    const priority =
        document
            .getElementById("priorityFilter")
            .value;


    const filtered = incidents.filter(incident => {

        const matchesSearch =
            incident.id.toLowerCase().includes(search) ||
            incident.type.toLowerCase().includes(search) ||
            incident.location.toLowerCase().includes(search);


        const matchesStatus =
            status === "All" ||
            incident.status === status;


        const matchesPriority =
            priority === "All" ||
            incident.priority === priority;


        return (
            matchesSearch &&
            matchesStatus &&
            matchesPriority
        );
    });


    renderIncidents(filtered);
}


// Show complete incident details.
function viewIncident(id) {

    const incident =
        incidents.find(item => item.id === id);


    if (!incident) {
        return;
    }


    document.getElementById("detailContent").innerHTML = `

        <div class="detail-row">
            <strong>Incident ID</strong>
            <span>${incident.id}</span>
        </div>

        <div class="detail-row">
            <strong>Type</strong>
            <span>${incident.type}</span>
        </div>

        <div class="detail-row">
            <strong>Location</strong>
            <span>${incident.location}</span>
        </div>

        <div class="detail-row">
            <strong>Priority</strong>
            <span>${priorityBadge(incident.priority)}</span>
        </div>

        <div class="detail-row">
            <strong>Status</strong>
            <span>${statusBadge(incident.status)}</span>
        </div>

        <div class="detail-row">
            <strong>Team</strong>
            <span>${incident.team}</span>
        </div>

        <div class="detail-row">
            <strong>Vehicle</strong>
            <span>${incident.vehicle}</span>
        </div>

        <div class="detail-row">
            <strong>Date</strong>
            <span>${incident.date}</span>
        </div>

        <div class="detail-row">
            <strong>Time</strong>
            <span>${incident.time}</span>
        </div>

    `;


    document
        .getElementById("detailModal")
        .classList
        .add("show");
}


// Close details popup.
function closeDetails() {

    document
        .getElementById("detailModal")
        .classList
        .remove("show");
}


// Create the incidents page.
document.getElementById("app").innerHTML = `

    <div class="app-shell">

        ${createSidebar()}


        <main class="main">

            <div class="page-title">

                <h1>
                    Incidents
                </h1>

                <p>
                    Track and manage emergency incidents.
                </p>

            </div>


            <div class="page-actions">

                <div class="filters">

                    <input
                        type="text"
                        id="searchIncident"
                        placeholder="Search incidents..."
                    >


                    <select id="statusFilter">

                        <option value="All">
                            All Status
                        </option>

                        <option value="In Progress">
                            In Progress
                        </option>

                        <option value="Responded">
                            Responded
                        </option>

                        <option value="Completed">
                            Completed
                        </option>

                    </select>


                    <select id="priorityFilter">

                        <option value="All">
                            All Priority
                        </option>

                        <option value="High">
                            High
                        </option>

                        <option value="Medium">
                            Medium
                        </option>

                        <option value="Low">
                            Low
                        </option>

                    </select>

                </div>


                <button
                    class="btn btn-primary"
                    id="newIncidentBtn"
                >
                    + New Incident
                </button>

            </div>


            <section class="panel">

                <div class="panel-head">

                    <h2>
                        Incident Records
                    </h2>

                    <span
                        id="incidentCount"
                        style="
                            color:var(--muted);
                            font-size:11px;
                        "
                    >
                        ${incidents.length} incidents
                    </span>

                </div>


                <div class="table-wrap">

                    <table class="data-table">

                        <thead>

                            <tr>

                                <th>
                                    ID
                                </th>

                                <th>
                                    Type
                                </th>

                                <th>
                                    Location
                                </th>

                                <th>
                                    Priority
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Team
                                </th>

                                <th>
                                    Date / Time
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody id="incidentTableBody"></tbody>

                    </table>

                </div>

            </section>


            <!-- Incident details popup -->

            <div
                class="modal-backdrop"
                id="detailModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Incident Details
                        </h2>

                        <button
                            class="close"
                            id="closeDetails"
                        >
                            ×
                        </button>

                    </div>


                    <div id="detailContent"></div>


                    <div
                        style="
                            display:flex;
                            justify-content:flex-end;
                            margin-top:18px;
                        "
                    >

                        <button
                            class="btn btn-light"
                            onclick="closeDetails()"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>


            <!-- New incident popup -->

            <div
                class="modal-backdrop"
                id="newIncidentModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Create New Incident
                        </h2>

                        <button
                            class="close"
                            id="closeNewIncident"
                        >
                            ×
                        </button>

                    </div>


                    <form id="newIncidentForm">

                        <div class="form-grid">

                            <div class="form-group">

                                <label>
                                    Incident Type
                                </label>

                                <select required>

                                    <option>
                                        Residential Fire
                                    </option>

                                    <option>
                                        Commercial Fire
                                    </option>

                                    <option>
                                        Road Accident
                                    </option>

                                    <option>
                                        Rescue
                                    </option>

                                    <option>
                                        Gas Leak
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
                                    placeholder="Enter location"
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
                                    margin-top:8px;
                                "
                            >

                                <button
                                    type="button"
                                    class="btn btn-light"
                                    id="cancelNewIncident"
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


            <div
                class="toast"
                id="toast"
            ></div>

        </main>

    </div>
`;


// Render initial table.
renderIncidents(incidents);


// Search box updates while typing.
document
    .getElementById("searchIncident")
    .addEventListener(
        "input",
        filterIncidents
    );


// Status filter.
document
    .getElementById("statusFilter")
    .addEventListener(
        "change",
        filterIncidents
    );


// Priority filter.
document
    .getElementById("priorityFilter")
    .addEventListener(
        "change",
        filterIncidents
    );


// Open new incident popup.
document
    .getElementById("newIncidentBtn")
    .addEventListener("click", () => {

        document
            .getElementById("newIncidentModal")
            .classList
            .add("show");

    });


// Close new incident popup.
document
    .getElementById("closeNewIncident")
    .addEventListener("click", () => {

        document
            .getElementById("newIncidentModal")
            .classList
            .remove("show");

    });


// Cancel new incident.
document
    .getElementById("cancelNewIncident")
    .addEventListener("click", () => {

        document
            .getElementById("newIncidentModal")
            .classList
            .remove("show");

    });


// Close details popup.
document
    .getElementById("closeDetails")
    .addEventListener(
        "click",
        closeDetails
    );


// Frontend-only incident creation.
document
    .getElementById("newIncidentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        document
            .getElementById("newIncidentModal")
            .classList
            .remove("show");


        showToast(
            "New incident added for this demo."
        );

    });


// Small notification at the bottom.
function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}