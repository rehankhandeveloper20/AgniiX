// Demo equipment list for the station prototype.

const equipment = [
    {
        id: "EQ-301",
        name: "Breathing Apparatus",
        category: "Safety",
        quantity: 12,
        available: 10,
        condition: "Good",
        location: "Safety Room A",
        checked: "20 Aug 2026"
    },

    {
        id: "EQ-302",
        name: "Fire Hose",
        category: "Fire Fighting",
        quantity: 24,
        available: 21,
        condition: "Good",
        location: "Equipment Bay 01",
        checked: "20 Aug 2026"
    },

    {
        id: "EQ-303",
        name: "Hydraulic Cutter",
        category: "Rescue",
        quantity: 4,
        available: 3,
        condition: "Good",
        location: "Rescue Bay",
        checked: "19 Aug 2026"
    },

    {
        id: "EQ-304",
        name: "Thermal Camera",
        category: "Technology",
        quantity: 3,
        available: 2,
        condition: "Good",
        location: "Control Room",
        checked: "19 Aug 2026"
    },

    {
        id: "EQ-305",
        name: "Fire Helmet",
        category: "Safety",
        quantity: 32,
        available: 29,
        condition: "Good",
        location: "Safety Room B",
        checked: "20 Aug 2026"
    },

    {
        id: "EQ-306",
        name: "Portable Ladder",
        category: "Fire Fighting",
        quantity: 6,
        available: 5,
        condition: "Needs Check",
        location: "Equipment Bay 02",
        checked: "18 Aug 2026"
    },

    {
        id: "EQ-307",
        name: "First Aid Kit",
        category: "Medical",
        quantity: 10,
        available: 8,
        condition: "Good",
        location: "Medical Cabinet",
        checked: "20 Aug 2026"
    },

    {
        id: "EQ-308",
        name: "Rescue Rope",
        category: "Rescue",
        quantity: 15,
        available: 13,
        condition: "Good",
        location: "Rescue Bay",
        checked: "18 Aug 2026"
    }
];


// Shared sidebar keeps every page connected.
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
                            item.link === "equipment.html"
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


// Equipment condition badge.
function conditionBadge(condition) {

    if (condition === "Good") {

        return `
            <span class="badge green">
                Good
            </span>
        `;
    }


    if (condition === "Needs Check") {

        return `
            <span class="badge gold">
                Needs Check
            </span>
        `;
    }


    return `
        <span class="badge red">
            ${condition}
        </span>
    `;
}


// Build equipment cards.
function renderEquipment(list) {

    const container =
        document.getElementById("equipmentGrid");


    if (list.length === 0) {

        container.innerHTML = `

            <div
                class="panel"
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:45px;
                    color:var(--muted);
                "
            >
                No equipment found.
            </div>

        `;

        return;
    }


    container.innerHTML = list.map(item => `

        <div class="panel">

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
                        gap:10px;
                        align-items:flex-start;
                    "
                >

                    <div>

                        <div
                            style="
                                font-size:28px;
                                margin-bottom:8px;
                            "
                        >
                            🧯
                        </div>

                        <h2
                            style="
                                font-size:15px;
                                margin-bottom:4px;
                            "
                        >
                            ${item.name}
                        </h2>

                        <span
                            style="
                                font-size:11px;
                                color:var(--muted);
                            "
                        >
                            ${item.category}
                        </span>

                    </div>


                    ${conditionBadge(item.condition)}

                </div>

            </div>


            <div style="padding:18px;">

                <div
                    style="
                        display:grid;
                        grid-template-columns:1fr 1fr;
                        gap:14px;
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
                            EQUIPMENT ID
                        </span>

                        <strong style="font-size:12px;">
                            ${item.id}
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
                            TOTAL
                        </span>

                        <strong style="font-size:12px;">
                            ${item.quantity}
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
                            AVAILABLE
                        </span>

                        <strong style="font-size:12px;">
                            ${item.available}
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
                            LAST CHECK
                        </span>

                        <strong style="font-size:12px;">
                            ${item.checked}
                        </strong>

                    </div>

                </div>


                <div
                    style="
                        background:#f7f8f9;
                        border-radius:7px;
                        padding:10px;
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
                        STORAGE LOCATION
                    </span>

                    <strong style="font-size:11px;">
                        ${item.location}
                    </strong>

                </div>


                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        gap:8px;
                    "
                >

                    <button
                        class="action-btn"
                        onclick="viewEquipment('${item.id}')"
                    >
                        View Details
                    </button>


                    <button
                        class="btn btn-primary"
                        style="
                            padding:7px 10px;
                            font-size:10px;
                        "
                        onclick="checkEquipment('${item.id}')"
                    >
                        Check Item
                    </button>

                </div>

            </div>

        </div>

    `).join("");
}


// Search and filters.
function filterEquipment() {

    const search =
        document
            .getElementById("searchEquipment")
            .value
            .toLowerCase()
            .trim();


    const category =
        document
            .getElementById("categoryFilter")
            .value;


    const condition =
        document
            .getElementById("conditionFilter")
            .value;


    const filtered = equipment.filter(item => {

        const matchesSearch =
            item.name.toLowerCase().includes(search) ||
            item.id.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search);


        const matchesCategory =
            category === "All" ||
            item.category === category;


        const matchesCondition =
            condition === "All" ||
            item.condition === condition;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesCondition
        );
    });


    renderEquipment(filtered);
}


// Show complete equipment details.
function viewEquipment(id) {

    const item =
        equipment.find(
            equipmentItem => equipmentItem.id === id
        );


    if (!item) {
        return;
    }


    document.getElementById("equipmentDetails").innerHTML = `

        <div class="detail-row">
            <strong>Name</strong>
            <span>${item.name}</span>
        </div>

        <div class="detail-row">
            <strong>Equipment ID</strong>
            <span>${item.id}</span>
        </div>

        <div class="detail-row">
            <strong>Category</strong>
            <span>${item.category}</span>
        </div>

        <div class="detail-row">
            <strong>Total Quantity</strong>
            <span>${item.quantity}</span>
        </div>

        <div class="detail-row">
            <strong>Available</strong>
            <span>${item.available}</span>
        </div>

        <div class="detail-row">
            <strong>Condition</strong>
            <span>${conditionBadge(item.condition)}</span>
        </div>

        <div class="detail-row">
            <strong>Location</strong>
            <span>${item.location}</span>
        </div>

        <div class="detail-row">
            <strong>Last Checked</strong>
            <span>${item.checked}</span>
        </div>

    `;


    document
        .getElementById("equipmentModal")
        .classList
        .add("show");
}


// Close equipment popup.
function closeEquipmentDetails() {

    document
        .getElementById("equipmentModal")
        .classList
        .remove("show");
}


// Demo equipment check.
function checkEquipment(id) {

    const item =
        equipment.find(
            equipmentItem => equipmentItem.id === id
        );


    if (!item) {
        return;
    }


    item.checked = "Just now";


    showToast(
        `${item.name} marked as checked.`
    );


    renderEquipment(equipment);
}


// Create page.
document.getElementById("app").innerHTML = `

    <div class="app-shell">

        ${createSidebar()}


        <main class="main">

            <div class="page-title">

                <h1>
                    Equipment
                </h1>

                <p>
                    Check and manage station safety equipment.
                </p>

            </div>


            <!-- Search and filter controls -->

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
                        id="searchEquipment"
                        type="text"
                        placeholder="Search equipment..."
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
                        id="categoryFilter"
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
                            All Categories
                        </option>

                        <option value="Safety">
                            Safety
                        </option>

                        <option value="Fire Fighting">
                            Fire Fighting
                        </option>

                        <option value="Rescue">
                            Rescue
                        </option>

                        <option value="Technology">
                            Technology
                        </option>

                        <option value="Medical">
                            Medical
                        </option>

                    </select>


                    <select
                        id="conditionFilter"
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
                            All Conditions
                        </option>

                        <option value="Good">
                            Good
                        </option>

                        <option value="Needs Check">
                            Needs Check
                        </option>

                    </select>

                </div>


                <button
                    class="btn btn-primary"
                    id="addEquipmentBtn"
                >
                    + Add Equipment
                </button>

            </div>


            <!-- Equipment cards -->

            <div
                id="equipmentGrid"
                style="
                    display:grid;
                    grid-template-columns:
                        repeat(3, 1fr);
                    gap:16px;
                "
            ></div>


            <!-- Equipment details -->

            <div
                class="modal-backdrop"
                id="equipmentModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Equipment Details
                        </h2>

                        <button
                            class="close"
                            id="closeEquipment"
                        >
                            ×
                        </button>

                    </div>


                    <div id="equipmentDetails"></div>


                    <div
                        style="
                            display:flex;
                            justify-content:flex-end;
                            margin-top:18px;
                        "
                    >

                        <button
                            class="btn btn-light"
                            onclick="closeEquipmentDetails()"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>


            <!-- Add equipment -->

            <div
                class="modal-backdrop"
                id="addEquipmentModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Add Equipment
                        </h2>

                        <button
                            class="close"
                            id="closeAddEquipment"
                        >
                            ×
                        </button>

                    </div>


                    <form id="addEquipmentForm">

                        <div class="form-grid">

                            <div class="form-group">

                                <label>
                                    Equipment Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Example: Fire Blanket"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Category
                                </label>

                                <select>

                                    <option>
                                        Safety
                                    </option>

                                    <option>
                                        Fire Fighting
                                    </option>

                                    <option>
                                        Rescue
                                    </option>

                                    <option>
                                        Technology
                                    </option>

                                    <option>
                                        Medical
                                    </option>

                                </select>

                            </div>


                            <div class="form-group">

                                <label>
                                    Quantity
                                </label>

                                <input
                                    type="number"
                                    min="1"
                                    placeholder="Enter quantity"
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
                                    id="cancelAddEquipment"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Add Equipment
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


// Show equipment when page opens.
renderEquipment(equipment);


// Search.
document
    .getElementById("searchEquipment")
    .addEventListener(
        "input",
        filterEquipment
    );


// Category filter.
document
    .getElementById("categoryFilter")
    .addEventListener(
        "change",
        filterEquipment
    );


// Condition filter.
document
    .getElementById("conditionFilter")
    .addEventListener(
        "change",
        filterEquipment
    );


// Open add equipment popup.
document
    .getElementById("addEquipmentBtn")
    .addEventListener("click", () => {

        document
            .getElementById("addEquipmentModal")
            .classList
            .add("show");

    });


// Close add equipment popup.
document
    .getElementById("closeAddEquipment")
    .addEventListener("click", () => {

        document
            .getElementById("addEquipmentModal")
            .classList
            .remove("show");

    });


// Cancel add equipment.
document
    .getElementById("cancelAddEquipment")
    .addEventListener("click", () => {

        document
            .getElementById("addEquipmentModal")
            .classList
            .remove("show");

    });


// Close details.
document
    .getElementById("closeEquipment")
    .addEventListener(
        "click",
        closeEquipmentDetails
    );


// Frontend-only add equipment.
document
    .getElementById("addEquipmentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        document
            .getElementById("addEquipmentModal")
            .classList
            .remove("show");


        showToast(
            "Equipment added for this demo."
        );

    });


// Small message at bottom.
function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}