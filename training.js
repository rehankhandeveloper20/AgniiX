// Demo training records for the station.

const trainingSessions = [
    {
        id: "TR-201",
        title: "Fire Suppression Drill",
        type: "Fire Safety",
        trainer: "RIO Nitin",
        date: "22 Aug 2026",
        time: "09:00 AM",
        duration: "2 Hours",
        location: "Training Ground",
        enrolled: 12,
        capacity: 15,
        status: "Upcoming"
    },

    {
        id: "TR-202",
        title: "First Aid & CPR",
        type: "Medical",
        trainer: "Neha Verma",
        date: "23 Aug 2026",
        time: "11:00 AM",
        duration: "3 Hours",
        location: "Training Room",
        enrolled: 10,
        capacity: 12,
        status: "Upcoming"
    },

    {
        id: "TR-203",
        title: "Vehicle Rescue Practice",
        type: "Rescue",
        trainer: "Sarsha Volanki",
        date: "24 Aug 2026",
        time: "10:30 AM",
        duration: "2 Hours",
        location: "Rescue Bay",
        enrolled: 8,
        capacity: 10,
        status: "Upcoming"
    },

    {
        id: "TR-204",
        title: "Night Emergency Drill",
        type: "Emergency",
        trainer: "Arjun Mehta",
        date: "25 Aug 2026",
        time: "08:00 PM",
        duration: "2 Hours",
        location: "Station Area",
        enrolled: 14,
        capacity: 15,
        status: "Upcoming"
    },

    {
        id: "TR-205",
        title: "Equipment Handling",
        type: "Equipment",
        trainer: "Vikram Joshi",
        date: "18 Aug 2026",
        time: "10:00 AM",
        duration: "90 Minutes",
        location: "Equipment Bay",
        enrolled: 15,
        capacity: 15,
        status: "Completed"
    },

    {
        id: "TR-206",
        title: "Basic Rope Rescue",
        type: "Rescue",
        trainer: "Kabir Singh",
        date: "16 Aug 2026",
        time: "09:30 AM",
        duration: "2 Hours",
        location: "Training Ground",
        enrolled: 11,
        capacity: 12,
        status: "Completed"
    },

    {
        id: "TR-207",
        title: "Fire Extinguisher Training",
        type: "Fire Safety",
        trainer: "RIO Nitin",
        date: "14 Aug 2026",
        time: "11:00 AM",
        duration: "1 Hour",
        location: "Training Ground",
        enrolled: 13,
        capacity: 15,
        status: "Completed"
    }
];


// Same navigation is used across the dashboard.
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
                            item.link === "training.html"
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


// Training status badge.
function statusBadge(status) {

    if (status === "Upcoming") {

        return `
            <span class="badge blue">
                Upcoming
            </span>
        `;
    }


    return `
        <span class="badge green">
            Completed
        </span>
    `;
}


// Training type icon makes cards easier to scan.
function trainingIcon(type) {

    const icons = {
        "Fire Safety": "🔥",
        "Medical": "🩺",
        "Rescue": "🛟",
        "Emergency": "🚨",
        "Equipment": "🧯"
    };


    return icons[type] || "🎓";
}


// Render all training cards.
function renderTraining(list) {

    const container =
        document.getElementById("trainingGrid");


    if (list.length === 0) {

        container.innerHTML = `

            <div
                class="panel"
                style="
                    grid-column:1/-1;
                    padding:45px;
                    text-align:center;
                    color:var(--muted);
                "
            >
                No training sessions found.
            </div>

        `;

        return;
    }


    container.innerHTML = list.map(session => {

        const seatsLeft =
            session.capacity - session.enrolled;


        return `

            <div class="panel">

                <div style="padding:18px;">

                    <div
                        style="
                            display:flex;
                            justify-content:space-between;
                            align-items:flex-start;
                            gap:10px;
                            margin-bottom:18px;
                        "
                    >

                        <div
                            style="
                                display:flex;
                                align-items:center;
                                gap:12px;
                            "
                        >

                            <div
                                style="
                                    width:44px;
                                    height:44px;
                                    border-radius:10px;
                                    background:#fff4df;
                                    display:flex;
                                    align-items:center;
                                    justify-content:center;
                                    font-size:20px;
                                "
                            >
                                ${trainingIcon(session.type)}
                            </div>


                            <div>

                                <h2
                                    style="
                                        font-size:14px;
                                        margin-bottom:4px;
                                    "
                                >
                                    ${session.title}
                                </h2>

                                <span
                                    style="
                                        font-size:10px;
                                        color:var(--muted);
                                    "
                                >
                                    ${session.type}
                                </span>

                            </div>

                        </div>


                        ${statusBadge(session.status)}

                    </div>


                    <div
                        style="
                            display:grid;
                            grid-template-columns:1fr 1fr;
                            gap:13px;
                            margin-bottom:16px;
                        "
                    >

                        <div>

                            <span
                                style="
                                    display:block;
                                    color:var(--muted);
                                    font-size:10px;
                                    margin-bottom:4px;
                                "
                            >
                                DATE
                            </span>

                            <strong style="font-size:12px;">
                                ${session.date}
                            </strong>

                        </div>


                        <div>

                            <span
                                style="
                                    display:block;
                                    color:var(--muted);
                                    font-size:10px;
                                    margin-bottom:4px;
                                "
                            >
                                TIME
                            </span>

                            <strong style="font-size:12px;">
                                ${session.time}
                            </strong>

                        </div>


                        <div>

                            <span
                                style="
                                    display:block;
                                    color:var(--muted);
                                    font-size:10px;
                                    margin-bottom:4px;
                                "
                            >
                                TRAINER
                            </span>

                            <strong style="font-size:12px;">
                                ${session.trainer}
                            </strong>

                        </div>


                        <div>

                            <span
                                style="
                                    display:block;
                                    color:var(--muted);
                                    font-size:10px;
                                    margin-bottom:4px;
                                "
                            >
                                DURATION
                            </span>

                            <strong style="font-size:12px;">
                                ${session.duration}
                            </strong>

                        </div>

                    </div>


                    <div
                        style="
                            background:#f7f8f9;
                            padding:10px;
                            border-radius:7px;
                            margin-bottom:14px;
                        "
                    >

                        <div
                            style="
                                display:flex;
                                justify-content:space-between;
                                font-size:10px;
                                margin-bottom:7px;
                            "
                        >

                            <span>
                                Participants
                            </span>

                            <strong>
                                ${session.enrolled}/${session.capacity}
                            </strong>

                        </div>


                        <div
                            style="
                                width:100%;
                                height:5px;
                                background:#e7e9ec;
                                border-radius:5px;
                                overflow:hidden;
                            "
                        >

                            <div
                                style="
                                    width:${
                                        (session.enrolled /
                                        session.capacity) * 100
                                    }%;
                                    height:100%;
                                    background:#e39a20;
                                    border-radius:5px;
                                "
                            ></div>

                        </div>


                        <div
                            style="
                                margin-top:7px;
                                color:var(--muted);
                                font-size:10px;
                            "
                        >
                            ${seatsLeft} seat(s) available
                        </div>

                    </div>


                    <div
                        style="
                            display:flex;
                            gap:8px;
                        "
                    >

                        <button
                            class="action-btn"
                            style="flex:1;"
                            onclick="viewTraining('${session.id}')"
                        >
                            View Details
                        </button>


                        ${
                            session.status === "Upcoming"
                                ? `
                                    <button
                                        class="btn btn-primary"
                                        style="
                                            padding:7px 11px;
                                            font-size:10px;
                                        "
                                        onclick="joinTraining('${session.id}')"
                                    >
                                        Join
                                    </button>
                                `
                                : ""
                        }

                    </div>

                </div>

            </div>

        `;

    }).join("");
}


// Search and filters.
function filterTraining() {

    const search =
        document
            .getElementById("searchTraining")
            .value
            .toLowerCase()
            .trim();


    const type =
        document
            .getElementById("typeFilter")
            .value;


    const status =
        document
            .getElementById("trainingStatus")
            .value;


    const filtered =
        trainingSessions.filter(session => {

            const matchesSearch =
                session.title
                    .toLowerCase()
                    .includes(search) ||

                session.trainer
                    .toLowerCase()
                    .includes(search) ||

                session.id
                    .toLowerCase()
                    .includes(search);


            const matchesType =
                type === "All" ||
                session.type === type;


            const matchesStatus =
                status === "All" ||
                session.status === status;


            return (
                matchesSearch &&
                matchesType &&
                matchesStatus
            );
        });


    renderTraining(filtered);
}


// Show training details.
function viewTraining(id) {

    const session =
        trainingSessions.find(
            item => item.id === id
        );


    if (!session) {
        return;
    }


    document.getElementById("trainingDetails").innerHTML = `

        <div
            style="
                text-align:center;
                margin-bottom:18px;
            "
        >

            <div style="font-size:32px;">
                ${trainingIcon(session.type)}
            </div>

            <h2 style="font-size:17px;">
                ${session.title}
            </h2>

            <p
                style="
                    color:var(--muted);
                    font-size:11px;
                    margin-top:4px;
                "
            >
                ${session.type}
            </p>

        </div>


        <div class="detail-row">
            <strong>Training ID</strong>
            <span>${session.id}</span>
        </div>

        <div class="detail-row">
            <strong>Date</strong>
            <span>${session.date}</span>
        </div>

        <div class="detail-row">
            <strong>Time</strong>
            <span>${session.time}</span>
        </div>

        <div class="detail-row">
            <strong>Duration</strong>
            <span>${session.duration}</span>
        </div>

        <div class="detail-row">
            <strong>Trainer</strong>
            <span>${session.trainer}</span>
        </div>

        <div class="detail-row">
            <strong>Location</strong>
            <span>${session.location}</span>
        </div>

        <div class="detail-row">
            <strong>Participants</strong>
            <span>
                ${session.enrolled}/${session.capacity}
            </span>
        </div>

        <div class="detail-row">
            <strong>Status</strong>
            <span>${statusBadge(session.status)}</span>
        </div>

    `;


    document
        .getElementById("trainingModal")
        .classList
        .add("show");
}


// Close details.
function closeTraining() {

    document
        .getElementById("trainingModal")
        .classList
        .remove("show");
}


// Join a training session in this frontend demo.
function joinTraining(id) {

    const session =
        trainingSessions.find(
            item => item.id === id
        );


    if (!session) {
        return;
    }


    if (session.enrolled >= session.capacity) {

        showToast(
            "This training session is already full."
        );

        return;
    }


    session.enrolled++;


    renderTraining(trainingSessions);


    showToast(
        `You joined ${session.title}.`
    );
}


// Simple toast message.
function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


// Build the page.
document.getElementById("app").innerHTML = `

    <div class="app-shell">

        ${createSidebar()}


        <main class="main">

            <div class="page-title">

                <h1>
                    Training
                </h1>

                <p>
                    Manage firefighter training and upcoming drills.
                </p>

            </div>


            <!-- Training overview -->

            <div
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(4, 1fr);
                    gap:14px;
                    margin-bottom:18px;
                "
            >

                <div class="stat-card">

                    <div class="stat-icon blue">
                        🎓
                    </div>

                    <div>

                        <span>
                            Total Sessions
                        </span>

                        <strong>
                            ${trainingSessions.length}
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon gold">
                        📅
                    </div>

                    <div>

                        <span>
                            Upcoming
                        </span>

                        <strong>
                            ${
                                trainingSessions.filter(
                                    item =>
                                        item.status === "Upcoming"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon green">
                        ✓
                    </div>

                    <div>

                        <span>
                            Completed
                        </span>

                        <strong>
                            ${
                                trainingSessions.filter(
                                    item =>
                                        item.status === "Completed"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon red">
                        👥
                    </div>

                    <div>

                        <span>
                            Participants
                        </span>

                        <strong>
                            ${
                                trainingSessions.reduce(
                                    (total, item) =>
                                        total + item.enrolled,
                                    0
                                )
                            }
                        </strong>

                    </div>

                </div>

            </div>


            <!-- Search and filters -->

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:12px;
                    margin-bottom:18px;
                    flex-wrap:wrap;
                "
            >

                <div
                    style="
                        display:flex;
                        gap:10px;
                        flex-wrap:wrap;
                    "
                >

                    <input
                        id="searchTraining"
                        type="text"
                        placeholder="Search training..."
                        style="
                            padding:10px 12px;
                            border:1px solid var(--border);
                            border-radius:8px;
                            outline:none;
                            font-size:12px;
                            background:white;
                        "
                    >


                    <select
                        id="typeFilter"
                        style="
                            padding:10px 12px;
                            border:1px solid var(--border);
                            border-radius:8px;
                            outline:none;
                            font-size:12px;
                            background:white;
                        "
                    >

                        <option value="All">
                            All Types
                        </option>

                        <option value="Fire Safety">
                            Fire Safety
                        </option>

                        <option value="Medical">
                            Medical
                        </option>

                        <option value="Rescue">
                            Rescue
                        </option>

                        <option value="Emergency">
                            Emergency
                        </option>

                        <option value="Equipment">
                            Equipment
                        </option>

                    </select>


                    <select
                        id="trainingStatus"
                        style="
                            padding:10px 12px;
                            border:1px solid var(--border);
                            border-radius:8px;
                            outline:none;
                            font-size:12px;
                            background:white;
                        "
                    >

                        <option value="All">
                            All Status
                        </option>

                        <option value="Upcoming">
                            Upcoming
                        </option>

                        <option value="Completed">
                            Completed
                        </option>

                    </select>

                </div>


                <button
                    class="btn btn-primary"
                    onclick="showToast('Training creation is ready for backend integration.')"
                >
                    + Schedule Training
                </button>

            </div>


            <!-- Training cards -->

            <div
                id="trainingGrid"
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(3, 1fr);
                    gap:16px;
                "
            ></div>


            <!-- Details popup -->

            <div
                class="modal-backdrop"
                id="trainingModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Training Details
                        </h2>

                        <button
                            class="close"
                            id="closeTraining"
                        >
                            ×
                        </button>

                    </div>


                    <div id="trainingDetails"></div>


                    <div
                        style="
                            display:flex;
                            justify-content:flex-end;
                            margin-top:18px;
                        "
                    >

                        <button
                            class="btn btn-light"
                            onclick="closeTraining()"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>


            <div
                class="toast"
                id="toast"
            ></div>

        </main>

    </div>
`;


// Render training on first load.
renderTraining(trainingSessions);


// Search listener.
document
    .getElementById("searchTraining")
    .addEventListener(
        "input",
        filterTraining
    );


// Type filter listener.
document
    .getElementById("typeFilter")
    .addEventListener(
        "change",
        filterTraining
    );


// Status filter listener.
document
    .getElementById("trainingStatus")
    .addEventListener(
        "change",
        filterTraining
    );


// Close popup.
document
    .getElementById("closeTraining")
    .addEventListener(
        "click",
        closeTraining
    );