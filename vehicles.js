// These are just demo vehicles for the frontend prototype.

const vehicles = [
    {
        id: "VH-204",
        name: "Engine 07",
        type: "Fire Engine",
        driver: "RIO Nitin",
        location: "Station Bay 01",
        status: "Available",
        fuel: "82%",
        mileage: "18,420 km",
        lastCheck: "20 Aug 2026",
        equipment: "Water Tank, Hose, Ladder"
    },

    {
        id: "VH-205",
        name: "Rescue 03",
        type: "Rescue Vehicle",
        driver: "Arjun Mehta",
        location: "Station Bay 02",
        status: "On Call",
        fuel: "64%",
        mileage: "12,850 km",
        lastCheck: "19 Aug 2026",
        equipment: "Rescue Kit, Cutter, First Aid"
    },

    {
        id: "VH-206",
        name: "Engine 04",
        type: "Fire Engine",
        driver: "Sarsha Volanki",
        location: "Station Bay 03",
        status: "Available",
        fuel: "91%",
        mileage: "21,300 km",
        lastCheck: "20 Aug 2026",
        equipment: "Water Tank, Hose, Foam Unit"
    },

    {
        id: "VH-207",
        name: "Rescue 02",
        type: "Rescue Vehicle",
        driver: "Kabir Singh",
        location: "Emergency Route",
        status: "On Call",
        fuel: "58%",
        mileage: "15,740 km",
        lastCheck: "18 Aug 2026",
        equipment: "Rescue Kit, Hydraulic Tools"
    },

    {
        id: "VH-208",
        name: "Water Tender 01",
        type: "Water Tender",
        driver: "Vikram Joshi",
        location: "Station Bay 05",
        status: "Available",
        fuel: "76%",
        mileage: "26,210 km",
        lastCheck: "20 Aug 2026",
        equipment: "Large Water Tank, Hose"
    },

    {
        id: "VH-209",
        name: "Support 01",
        type: "Support Vehicle",
        driver: "Neha Verma",
        location: "Maintenance Area",
        status: "Maintenance",
        fuel: "43%",
        mileage: "9,650 km",
        lastCheck: "17 Aug 2026",
        equipment: "Tools, Safety Gear"
    }
];


// Shared sidebar for this page.
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
                            item.link === "vehicles.html"
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


// Different colors make vehicle status easier to understand.
function statusBadge(status) {

    let color = "gray";

    if (status === "Available") {
        color = "green";
    }

    if (status === "On Call") {
        color = "red";
    }

    if (status === "Maintenance") {
        color = "gold";
    }

    return `
        <span class="badge ${color}">
            ${status}
        </span>
    `;
}


// Create the vehicle cards.
function renderVehicles(list) {

    const container =
        document.getElementById("vehicleGrid");


    if (list.length === 0) {

        container.innerHTML = `

            <div
                class="panel"
                style="
                    grid-column:1/-1;
                    padding:40px;
                    text-align:center;
                    color:var(--muted);
                "
            >
                No vehicles found.
            </div>

        `;

        return;
    }


    container.innerHTML = list.map(vehicle => `

        <div class="panel vehicle-card">

            <div
                style="
                    padding:18px;
                    border-bottom:1px solid var(--border);
                "
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:flex-start;
                        gap:10px;
                    "
                >

                    <div>

                        <div
                            style="
                                font-size:28px;
                                margin-bottom:8px;
                            "
                        >
                            🚒
                        </div>

                        <h2
                            style="
                                font-size:16px;
                                margin-bottom:4px;
                            "
                        >
                            ${vehicle.name}
                        </h2>

                        <span
                            style="
                                color:var(--muted);
                                font-size:11px;
                            "
                        >
                            ${vehicle.type}
                        </span>

                    </div>


                    ${statusBadge(vehicle.status)}

                </div>

            </div>


            <div style="padding:18px;">

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
                            VEHICLE ID
                        </span>

                        <strong
                            style="font-size:12px;"
                        >
                            ${vehicle.id}
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
                            DRIVER
                        </span>

                        <strong
                            style="font-size:12px;"
                        >
                            ${vehicle.driver}
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
                            FUEL
                        </span>

                        <strong
                            style="font-size:12px;"
                        >
                            ${vehicle.fuel}
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
                            MILEAGE
                        </span>

                        <strong
                            style="font-size:12px;"
                        >
                            ${vehicle.mileage}
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
                        CURRENT LOCATION
                    </span>

                    <strong
                        style="font-size:11px;"
                    >
                        ${vehicle.location}
                    </strong>

                </div>


                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        gap:8px;
                    "
                >

                    <button
                        class="action-btn"
                        onclick="viewVehicle('${vehicle.id}')"
                    >
                        View Details
                    </button>


                    <button
                        class="btn btn-primary"
                        style="
                            padding:7px 10px;
                            font-size:10px;
                        "
                        onclick="changeStatus('${vehicle.id}')"
                    >
                        Change Status
                    </button>

                </div>

            </div>

        </div>

    `).join("");
}


// Search and status filter.
function filterVehicles() {

    const search =
        document
            .getElementById("searchVehicle")
            .value
            .toLowerCase()
            .trim();


    const status =
        document
            .getElementById("vehicleStatus")
            .value;


    const filtered = vehicles.filter(vehicle => {

        const matchesSearch =
            vehicle.name.toLowerCase().includes(search) ||
            vehicle.id.toLowerCase().includes(search) ||
            vehicle.driver.toLowerCase().includes(search) ||
            vehicle.type.toLowerCase().includes(search);


        const matchesStatus =
            status === "All" ||
            vehicle.status === status;


        return matchesSearch && matchesStatus;
    });


    renderVehicles(filtered);
}


// Show vehicle information.
function viewVehicle(id) {

    const vehicle =
        vehicles.find(item => item.id === id);


    if (!vehicle) {
        return;
    }


    document.getElementById("vehicleDetails").innerHTML = `

        <div class="detail-row">
            <strong>Vehicle</strong>
            <span>${vehicle.name}</span>
        </div>

        <div class="detail-row">
            <strong>Vehicle ID</strong>
            <span>${vehicle.id}</span>
        </div>

        <div class="detail-row">
            <strong>Type</strong>
            <span>${vehicle.type}</span>
        </div>

        <div class="detail-row">
            <strong>Driver</strong>
            <span>${vehicle.driver}</span>
        </div>

        <div class="detail-row">
            <strong>Location</strong>
            <span>${vehicle.location}</span>
        </div>

        <div class="detail-row">
            <strong>Status</strong>
            <span>${statusBadge(vehicle.status)}</span>
        </div>

        <div class="detail-row">
            <strong>Fuel</strong>
            <span>${vehicle.fuel}</span>
        </div>

        <div class="detail-row">
            <strong>Mileage</strong>
            <span>${vehicle.mileage}</span>
        </div>

        <div class="detail-row">
            <strong>Last Check</strong>
            <span>${vehicle.lastCheck}</span>
        </div>

        <div class="detail-row">
            <strong>Equipment</strong>
            <span>${vehicle.equipment}</span>
        </div>

    `;


    document
        .getElementById("vehicleModal")
        .classList
        .add("show");
}


// Close details.
function closeVehicleDetails() {

    document
        .getElementById("vehicleModal")
        .classList
        .remove("show");
}


// Simple frontend status demo.
function changeStatus(id) {

    const vehicle =
        vehicles.find(item => item.id === id);


    if (!vehicle) {
        return;
    }


    if (vehicle.status === "Available") {

        vehicle.status = "On Call";

    } else if (vehicle.status === "On Call") {

        vehicle.status = "Maintenance";

    } else {

        vehicle.status = "Available";

    }


    renderVehicles(vehicles);


    showToast(
        `${vehicle.name} is now ${vehicle.status}.`
    );
}


// Build the complete page.
document.getElementById("app").innerHTML = `

    <div class="app-shell">

        ${createSidebar()}


        <main class="main">

            <div class="page-title">

                <h1>
                    Vehicles
                </h1>

                <p>
                    Monitor fire engines, rescue vehicles and support units.
                </p>

            </div>


            <!-- Search and filter area -->

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
                        id="searchVehicle"
                        type="text"
                        placeholder="Search vehicle..."
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
                        id="vehicleStatus"
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

                        <option value="Available">
                            Available
                        </option>

                        <option value="On Call">
                            On Call
                        </option>

                        <option value="Maintenance">
                            Maintenance
                        </option>

                    </select>

                </div>


                <button
                    class="btn btn-primary"
                    id="addVehicleBtn"
                >
                    + Add Vehicle
                </button>

            </div>


            <!-- Vehicle cards -->

            <div
                id="vehicleGrid"
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(3, 1fr);
                    gap:16px;
                "
            ></div>


            <!-- Vehicle details modal -->

            <div
                class="modal-backdrop"
                id="vehicleModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Vehicle Details
                        </h2>

                        <button
                            class="close"
                            id="closeVehicle"
                        >
                            ×
                        </button>

                    </div>


                    <div id="vehicleDetails"></div>


                    <div
                        style="
                            display:flex;
                            justify-content:flex-end;
                            margin-top:18px;
                        "
                    >

                        <button
                            class="btn btn-light"
                            onclick="closeVehicleDetails()"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>


            <!-- Add vehicle demo modal -->

            <div
                class="modal-backdrop"
                id="addVehicleModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Add Vehicle
                        </h2>

                        <button
                            class="close"
                            id="closeAddVehicle"
                        >
                            ×
                        </button>

                    </div>


                    <form id="addVehicleForm">

                        <div class="form-grid">

                            <div class="form-group">

                                <label>
                                    Vehicle Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Example: Engine 09"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Vehicle Type
                                </label>

                                <select>

                                    <option>
                                        Fire Engine
                                    </option>

                                    <option>
                                        Rescue Vehicle
                                    </option>

                                    <option>
                                        Water Tender
                                    </option>

                                    <option>
                                        Support Vehicle
                                    </option>

                                </select>

                            </div>


                            <div class="form-group">

                                <label>
                                    Driver Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter driver name"
                                    required
                                >

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
                                    id="cancelAddVehicle"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Add Vehicle
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


// Show initial vehicles.
renderVehicles(vehicles);


// Search vehicles.
document
    .getElementById("searchVehicle")
    .addEventListener(
        "input",
        filterVehicles
    );


// Filter vehicles by status.
document
    .getElementById("vehicleStatus")
    .addEventListener(
        "change",
        filterVehicles
    );


// Open add vehicle modal.
document
    .getElementById("addVehicleBtn")
    .addEventListener("click", () => {

        document
            .getElementById("addVehicleModal")
            .classList
            .add("show");

    });


// Close add vehicle modal.
document
    .getElementById("closeAddVehicle")
    .addEventListener("click", () => {

        document
            .getElementById("addVehicleModal")
            .classList
            .remove("show");

    });


// Cancel add vehicle.
document
    .getElementById("cancelAddVehicle")
    .addEventListener("click", () => {

        document
            .getElementById("addVehicleModal")
            .classList
            .remove("show");

    });


// Close vehicle details.
document
    .getElementById("closeVehicle")
    .addEventListener(
        "click",
        closeVehicleDetails
    );


// Frontend-only add vehicle demo.
document
    .getElementById("addVehicleForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        document
            .getElementById("addVehicleModal")
            .classList
            .remove("show");


        showToast(
            "Vehicle added for this demo."
        );

    });


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