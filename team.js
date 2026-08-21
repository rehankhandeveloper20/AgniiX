// These are fictional team members for the frontend demo.

const teamMembers = [
    {
        id: "TM-101",
        name: "RIO Nitin",
        role: "Station Officer",
        shift: "Morning",
        status: "On Duty",
        phone: "98XXXX2145",
        experience: "8 Years",
        location: "Main Station"
    },

    {
        id: "TM-102",
        name: "Sarsha Volanki",
        role: "Firefighter",
        shift: "Morning",
        status: "On Duty",
        phone: "97XXXX5832",
        experience: "5 Years",
        location: "Main Station"
    },

    {
        id: "TM-103",
        name: "Arjun Mehta",
        role: "Driver",
        shift: "Morning",
        status: "On Duty",
        phone: "99XXXX3417",
        experience: "6 Years",
        location: "Vehicle Bay"
    },

    {
        id: "TM-104",
        name: "Neha Verma",
        role: "Firefighter",
        shift: "Evening",
        status: "On Duty",
        phone: "96XXXX7214",
        experience: "4 Years",
        location: "Main Station"
    },

    {
        id: "TM-105",
        name: "Kabir Singh",
        role: "Rescue Specialist",
        shift: "Evening",
        status: "On Leave",
        phone: "95XXXX4689",
        experience: "7 Years",
        location: "Off Duty"
    },

    {
        id: "TM-106",
        name: "Riya Sharma",
        role: "Firefighter",
        shift: "Night",
        status: "On Duty",
        phone: "98XXXX6521",
        experience: "3 Years",
        location: "Main Station"
    },

    {
        id: "TM-107",
        name: "Vikram Joshi",
        role: "Driver",
        shift: "Night",
        status: "On Duty",
        phone: "97XXXX1846",
        experience: "9 Years",
        location: "Vehicle Bay"
    },

    {
        id: "TM-108",
        name: "Aditya Rao",
        role: "Firefighter",
        shift: "Night",
        status: "Training",
        phone: "99XXXX7354",
        experience: "2 Years",
        location: "Training Room"
    }
];


// Every page gets the same simple navigation.
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
                            item.link === "team.html"
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


// Different status badges help the officer quickly scan the team.
function statusBadge(status) {

    if (status === "On Duty") {

        return `
            <span class="badge green">
                On Duty
            </span>
        `;
    }


    if (status === "On Leave") {

        return `
            <span class="badge gold">
                On Leave
            </span>
        `;
    }


    return `
        <span class="badge gray">
            ${status}
        </span>
    `;
}


// Small initials avatar.
function getInitials(name) {

    const words = name.split(" ");

    return (
        words[0].charAt(0) +
        words[words.length - 1].charAt(0)
    ).toUpperCase();
}


// Create team cards.
function renderTeam(list) {

    const container =
        document.getElementById("teamGrid");


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
                No team members found.
            </div>

        `;

        return;
    }


    container.innerHTML = list.map(member => `

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
                                width:46px;
                                height:46px;
                                border-radius:50%;
                                background:#fff4df;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                font-weight:700;
                                color:#b27a00;
                                font-size:13px;
                            "
                        >
                            ${getInitials(member.name)}
                        </div>


                        <div>

                            <h2
                                style="
                                    font-size:14px;
                                    margin-bottom:4px;
                                "
                            >
                                ${member.name}
                            </h2>

                            <span
                                style="
                                    color:var(--muted);
                                    font-size:11px;
                                "
                            >
                                ${member.role}
                            </span>

                        </div>

                    </div>


                    ${statusBadge(member.status)}

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
                            MEMBER ID
                        </span>

                        <strong style="font-size:12px;">
                            ${member.id}
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
                            SHIFT
                        </span>

                        <strong style="font-size:12px;">
                            ${member.shift}
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
                            EXPERIENCE
                        </span>

                        <strong style="font-size:12px;">
                            ${member.experience}
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
                            LOCATION
                        </span>

                        <strong style="font-size:12px;">
                            ${member.location}
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

                    <span
                        style="
                            display:block;
                            color:var(--muted);
                            font-size:10px;
                            margin-bottom:4px;
                        "
                    >
                        CONTACT
                    </span>

                    <strong style="font-size:11px;">
                        ${member.phone}
                    </strong>

                </div>


                <button
                    class="action-btn"
                    style="width:100%;"
                    onclick="viewMember('${member.id}')"
                >
                    View Profile
                </button>

            </div>

        </div>

    `).join("");
}


// Search and filter the team.
function filterTeam() {

    const search =
        document
            .getElementById("searchTeam")
            .value
            .toLowerCase()
            .trim();


    const role =
        document
            .getElementById("roleFilter")
            .value;


    const shift =
        document
            .getElementById("shiftFilter")
            .value;


    const status =
        document
            .getElementById("statusFilter")
            .value;


    const filtered =
        teamMembers.filter(member => {

            const matchesSearch =
                member.name
                    .toLowerCase()
                    .includes(search) ||

                member.id
                    .toLowerCase()
                    .includes(search) ||

                member.role
                    .toLowerCase()
                    .includes(search);


            const matchesRole =
                role === "All" ||
                member.role === role;


            const matchesShift =
                shift === "All" ||
                member.shift === shift;


            const matchesStatus =
                status === "All" ||
                member.status === status;


            return (
                matchesSearch &&
                matchesRole &&
                matchesShift &&
                matchesStatus
            );
        });


    renderTeam(filtered);
}


// Open member profile.
function viewMember(id) {

    const member =
        teamMembers.find(
            item => item.id === id
        );


    if (!member) {
        return;
    }


    document.getElementById("memberDetails").innerHTML = `

        <div
            style="
                text-align:center;
                margin-bottom:20px;
            "
        >

            <div
                style="
                    width:60px;
                    height:60px;
                    margin:0 auto 10px;
                    border-radius:50%;
                    background:#fff4df;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-weight:700;
                    color:#b27a00;
                "
            >
                ${getInitials(member.name)}
            </div>

            <h2 style="font-size:17px;">
                ${member.name}
            </h2>

            <p
                style="
                    color:var(--muted);
                    font-size:12px;
                    margin-top:4px;
                "
            >
                ${member.role}
            </p>

        </div>


        <div class="detail-row">
            <strong>Member ID</strong>
            <span>${member.id}</span>
        </div>

        <div class="detail-row">
            <strong>Role</strong>
            <span>${member.role}</span>
        </div>

        <div class="detail-row">
            <strong>Shift</strong>
            <span>${member.shift}</span>
        </div>

        <div class="detail-row">
            <strong>Status</strong>
            <span>${statusBadge(member.status)}</span>
        </div>

        <div class="detail-row">
            <strong>Experience</strong>
            <span>${member.experience}</span>
        </div>

        <div class="detail-row">
            <strong>Location</strong>
            <span>${member.location}</span>
        </div>

        <div class="detail-row">
            <strong>Contact</strong>
            <span>${member.phone}</span>
        </div>

    `;


    document
        .getElementById("memberModal")
        .classList
        .add("show");
}


// Close profile popup.
function closeMember() {

    document
        .getElementById("memberModal")
        .classList
        .remove("show");
}


// Small notification.
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
                    Team
                </h1>

                <p>
                    View station staff, shifts and duty status.
                </p>

            </div>


            <!-- Quick team numbers -->

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

                    <div class="stat-icon red">
                        👥
                    </div>

                    <div>

                        <span>
                            Total Members
                        </span>

                        <strong>
                            ${teamMembers.length}
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon green">
                        ✓
                    </div>

                    <div>

                        <span>
                            On Duty
                        </span>

                        <strong>
                            ${
                                teamMembers.filter(
                                    member =>
                                        member.status === "On Duty"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon gold">
                        🌙
                    </div>

                    <div>

                        <span>
                            On Leave
                        </span>

                        <strong>
                            ${
                                teamMembers.filter(
                                    member =>
                                        member.status === "On Leave"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon blue">
                        🎓
                    </div>

                    <div>

                        <span>
                            Training
                        </span>

                        <strong>
                            ${
                                teamMembers.filter(
                                    member =>
                                        member.status === "Training"
                                ).length
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
                        id="searchTeam"
                        type="text"
                        placeholder="Search team member..."
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
                        id="roleFilter"
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
                            All Roles
                        </option>

                        <option value="Station Officer">
                            Station Officer
                        </option>

                        <option value="Firefighter">
                            Firefighter
                        </option>

                        <option value="Driver">
                            Driver
                        </option>

                        <option value="Rescue Specialist">
                            Rescue Specialist
                        </option>

                    </select>


                    <select
                        id="shiftFilter"
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
                            All Shifts
                        </option>

                        <option value="Morning">
                            Morning
                        </option>

                        <option value="Evening">
                            Evening
                        </option>

                        <option value="Night">
                            Night
                        </option>

                    </select>


                    <select
                        id="statusFilter"
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

                        <option value="On Duty">
                            On Duty
                        </option>

                        <option value="On Leave">
                            On Leave
                        </option>

                        <option value="Training">
                            Training
                        </option>

                    </select>

                </div>


                <button
                    class="btn btn-primary"
                    id="addMemberBtn"
                >
                    + Add Member
                </button>

            </div>


            <!-- Team cards -->

            <div
                id="teamGrid"
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(3, 1fr);
                    gap:16px;
                "
            ></div>


            <!-- Profile modal -->

            <div
                class="modal-backdrop"
                id="memberModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Team Member
                        </h2>

                        <button
                            class="close"
                            id="closeMember"
                        >
                            ×
                        </button>

                    </div>


                    <div id="memberDetails"></div>


                    <div
                        style="
                            display:flex;
                            justify-content:flex-end;
                            margin-top:18px;
                        "
                    >

                        <button
                            class="btn btn-light"
                            onclick="closeMember()"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>


            <!-- Add member modal -->

            <div
                class="modal-backdrop"
                id="addMemberModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Add Team Member
                        </h2>

                        <button
                            class="close"
                            id="closeAddMember"
                        >
                            ×
                        </button>

                    </div>


                    <form id="addMemberForm">

                        <div class="form-grid">

                            <div class="form-group">

                                <label>
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Role
                                </label>

                                <select>

                                    <option>
                                        Firefighter
                                    </option>

                                    <option>
                                        Driver
                                    </option>

                                    <option>
                                        Station Officer
                                    </option>

                                    <option>
                                        Rescue Specialist
                                    </option>

                                </select>

                            </div>


                            <div class="form-group">

                                <label>
                                    Shift
                                </label>

                                <select>

                                    <option>
                                        Morning
                                    </option>

                                    <option>
                                        Evening
                                    </option>

                                    <option>
                                        Night
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
                                    id="cancelAddMember"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Add Member
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


// Show all members when the page opens.
renderTeam(teamMembers);


// Search.
document
    .getElementById("searchTeam")
    .addEventListener(
        "input",
        filterTeam
    );


// Role filter.
document
    .getElementById("roleFilter")
    .addEventListener(
        "change",
        filterTeam
    );


// Shift filter.
document
    .getElementById("shiftFilter")
    .addEventListener(
        "change",
        filterTeam
    );


// Status filter.
document
    .getElementById("statusFilter")
    .addEventListener(
        "change",
        filterTeam
    );


// Open add member popup.
document
    .getElementById("addMemberBtn")
    .addEventListener("click", () => {

        document
            .getElementById("addMemberModal")
            .classList
            .add("show");

    });


// Close add member popup.
document
    .getElementById("closeAddMember")
    .addEventListener("click", () => {

        document
            .getElementById("addMemberModal")
            .classList
            .remove("show");

    });


// Cancel add member.
document
    .getElementById("cancelAddMember")
    .addEventListener("click", () => {

        document
            .getElementById("addMemberModal")
            .classList
            .remove("show");

    });


// Close profile.
document
    .getElementById("closeMember")
    .addEventListener(
        "click",
        closeMember
    );


// Frontend-only add member demo.
document
    .getElementById("addMemberForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        document
            .getElementById("addMemberModal")
            .classList
            .remove("show");


        showToast(
            "Team member added for this demo."
        );

    });