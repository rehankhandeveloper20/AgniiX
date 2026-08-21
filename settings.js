// Demo settings stay in memory while the page is open.

const stationSettings = {

    stationName: "Central Fire & Rescue Station",

    stationCode: "FS-204",

    officerName: "RIO Nitin",

    phone: "98XXXX2145",

    email: "station.demo@example.com",

    location: "Sector 14, Central Zone",

    emergencyNumber: "101",

    notifications: true,

    incidentAlerts: true,

    vehicleAlerts: true,

    equipmentAlerts: true,

    trainingReminders: true,

    compactMode: false
};


// Same sidebar used throughout the dashboard.
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
                            item.link === "settings.html"
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


// Show a small message instead of silently changing things.
function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


// Update the toggle appearance.
function updateToggle(id, value) {

    const toggle =
        document.getElementById(id);


    if (!toggle) {
        return;
    }


    toggle.classList.toggle(
        "active",
        value
    );


    toggle.setAttribute(
        "aria-checked",
        value
    );
}


// Create the settings page.
document.getElementById("app").innerHTML = `

    <div class="app-shell">

        ${createSidebar()}


        <main class="main">

            <div class="page-title">

                <h1>
                    Settings
                </h1>

                <p>
                    Manage station profile and dashboard preferences.
                </p>

            </div>


            <div
                style="
                    display:grid;
                    grid-template-columns:
                        minmax(0, 2fr)
                        minmax(280px, 1fr);
                    gap:18px;
                    align-items:start;
                "
            >

                <!-- Station profile -->

                <section class="panel">

                    <div
                        style="
                            padding:18px;
                            border-bottom:1px solid var(--border);
                        "
                    >

                        <h2 style="font-size:14px;">
                            Station Profile
                        </h2>

                        <p
                            style="
                                color:var(--muted);
                                font-size:11px;
                                margin-top:5px;
                            "
                        >
                            Basic information used across the dashboard.
                        </p>

                    </div>


                    <form
                        id="stationForm"
                        style="padding:18px;"
                    >

                        <div class="form-grid">

                            <div class="form-group">

                                <label>
                                    Station Name
                                </label>

                                <input
                                    id="stationName"
                                    type="text"
                                    value="${stationSettings.stationName}"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Station Code
                                </label>

                                <input
                                    id="stationCode"
                                    type="text"
                                    value="${stationSettings.stationCode}"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Station Officer
                                </label>

                                <input
                                    id="officerName"
                                    type="text"
                                    value="${stationSettings.officerName}"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Contact Number
                                </label>

                                <input
                                    id="phone"
                                    type="text"
                                    value="${stationSettings.phone}"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value="${stationSettings.email}"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Emergency Number
                                </label>

                                <input
                                    id="emergencyNumber"
                                    type="text"
                                    value="${stationSettings.emergencyNumber}"
                                    required
                                >

                            </div>


                            <div
                                class="form-group"
                                style="grid-column:1/-1;"
                            >

                                <label>
                                    Station Location
                                </label>

                                <input
                                    id="location"
                                    type="text"
                                    value="${stationSettings.location}"
                                    required
                                >

                            </div>

                        </div>


                        <div
                            style="
                                display:flex;
                                justify-content:flex-end;
                                margin-top:18px;
                            "
                        >

                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                Save Changes
                            </button>

                        </div>

                    </form>

                </section>


                <!-- Quick station info -->

                <section class="panel">

                    <div
                        style="
                            padding:18px;
                            border-bottom:1px solid var(--border);
                        "
                    >

                        <h2 style="font-size:14px;">
                            Station Status
                        </h2>

                    </div>


                    <div style="padding:18px;">

                        <div
                            style="
                                display:flex;
                                align-items:center;
                                gap:10px;
                                padding:12px;
                                background:#f5faf7;
                                border-radius:8px;
                                margin-bottom:15px;
                            "
                        >

                            <span
                                style="
                                    width:9px;
                                    height:9px;
                                    border-radius:50%;
                                    background:#2e9b62;
                                "
                            ></span>

                            <div>

                                <strong
                                    style="
                                        display:block;
                                        font-size:12px;
                                    "
                                >
                                    Station Operational
                                </strong>

                                <span
                                    style="
                                        color:var(--muted);
                                        font-size:10px;
                                    "
                                >
                                    All dashboard services are running.
                                </span>

                            </div>

                        </div>


                        <div class="detail-row">

                            <strong>
                                Station Code
                            </strong>

                            <span>
                                ${stationSettings.stationCode}
                            </span>

                        </div>


                        <div class="detail-row">

                            <strong>
                                Emergency
                            </strong>

                            <span>
                                ${stationSettings.emergencyNumber}
                            </span>

                        </div>


                        <div class="detail-row">

                            <strong>
                                System
                            </strong>

                            <span class="badge green">
                                Online
                            </span>

                        </div>

                    </div>

                </section>


                <!-- Notifications -->

                <section class="panel">

                    <div
                        style="
                            padding:18px;
                            border-bottom:1px solid var(--border);
                        "
                    >

                        <h2 style="font-size:14px;">
                            Notifications
                        </h2>

                        <p
                            style="
                                color:var(--muted);
                                font-size:11px;
                                margin-top:5px;
                            "
                        >
                            Choose which dashboard alerts you want to see.
                        </p>

                    </div>


                    <div style="padding:8px 18px;">

                        <div class="setting-row">

                            <div>

                                <strong>
                                    All Notifications
                                </strong>

                                <span>
                                    Enable dashboard notifications.
                                </span>

                            </div>


                            <button
                                class="toggle ${
                                    stationSettings.notifications
                                        ? "active"
                                        : ""
                                }"
                                id="notificationsToggle"
                                aria-checked="${stationSettings.notifications}"
                                role="switch"
                            >
                                <span></span>
                            </button>

                        </div>


                        <div class="setting-row">

                            <div>

                                <strong>
                                    Incident Alerts
                                </strong>

                                <span>
                                    New emergency and incident alerts.
                                </span>

                            </div>


                            <button
                                class="toggle ${
                                    stationSettings.incidentAlerts
                                        ? "active"
                                        : ""
                                }"
                                id="incidentToggle"
                                aria-checked="${stationSettings.incidentAlerts}"
                                role="switch"
                            >
                                <span></span>
                            </button>

                        </div>


                        <div class="setting-row">

                            <div>

                                <strong>
                                    Vehicle Alerts
                                </strong>

                                <span>
                                    Vehicle availability and maintenance alerts.
                                </span>

                            </div>


                            <button
                                class="toggle ${
                                    stationSettings.vehicleAlerts
                                        ? "active"
                                        : ""
                                }"
                                id="vehicleToggle"
                                aria-checked="${stationSettings.vehicleAlerts}"
                                role="switch"
                            >
                                <span></span>
                            </button>

                        </div>


                        <div class="setting-row">

                            <div>

                                <strong>
                                    Equipment Alerts
                                </strong>

                                <span>
                                    Equipment inspection reminders.
                                </span>

                            </div>


                            <button
                                class="toggle ${
                                    stationSettings.equipmentAlerts
                                        ? "active"
                                        : ""
                                }"
                                id="equipmentToggle"
                                aria-checked="${stationSettings.equipmentAlerts}"
                                role="switch"
                            >
                                <span></span>
                            </button>

                        </div>


                        <div class="setting-row">

                            <div>

                                <strong>
                                    Training Reminders
                                </strong>

                                <span>
                                    Upcoming training session reminders.
                                </span>

                            </div>


                            <button
                                class="toggle ${
                                    stationSettings.trainingReminders
                                        ? "active"
                                        : ""
                                }"
                                id="trainingToggle"
                                aria-checked="${stationSettings.trainingReminders}"
                                role="switch"
                            >
                                <span></span>
                            </button>

                        </div>

                    </div>

                </section>


                <!-- Appearance -->

                <section class="panel">

                    <div
                        style="
                            padding:18px;
                            border-bottom:1px solid var(--border);
                        "
                    >

                        <h2 style="font-size:14px;">
                            Dashboard Preferences
                        </h2>

                        <p
                            style="
                                color:var(--muted);
                                font-size:11px;
                                margin-top:5px;
                            "
                        >
                            Simple display options for the dashboard.
                        </p>

                    </div>


                    <div style="padding:8px 18px;">

                        <div class="setting-row">

                            <div>

                                <strong>
                                    Compact Mode
                                </strong>

                                <span>
                                    Show more information with less spacing.
                                </span>

                            </div>


                            <button
                                class="toggle"
                                id="compactToggle"
                                aria-checked="false"
                                role="switch"
                            >
                                <span></span>
                            </button>

                        </div>


                        <div
                            style="
                                margin:15px 0 8px;
                                padding:12px;
                                background:#fff8ed;
                                border:1px solid #f2dfbf;
                                border-radius:8px;
                            "
                        >

                            <strong
                                style="
                                    display:block;
                                    font-size:11px;
                                    margin-bottom:4px;
                                "
                            >
                                Frontend Demo
                            </strong>

                            <span
                                style="
                                    color:var(--muted);
                                    font-size:10px;
                                    line-height:1.5;
                                "
                            >
                                Settings are temporary in this version.
                                They reset when the page is refreshed.
                            </span>

                        </div>

                    </div>

                </section>

            </div>


            <!-- Reset area -->

            <section
                class="panel"
                style="margin-top:18px;"
            >

                <div
                    style="
                        padding:18px;
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        gap:15px;
                    "
                >

                    <div>

                        <h2
                            style="
                                font-size:13px;
                                margin-bottom:5px;
                            "
                        >
                            Reset Demo Settings
                        </h2>

                        <p
                            style="
                                color:var(--muted);
                                font-size:10px;
                            "
                        >
                            Restore the temporary settings used in this demo.
                        </p>

                    </div>


                    <button
                        class="btn btn-light"
                        id="resetSettings"
                    >
                        Reset
                    </button>

                </div>

            </section>


            <div
                class="toast"
                id="toast"
            ></div>

        </main>

    </div>
`;


// Save station information.
document
    .getElementById("stationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        stationSettings.stationName =
            document
                .getElementById("stationName")
                .value;


        stationSettings.stationCode =
            document
                .getElementById("stationCode")
                .value;


        stationSettings.officerName =
            document
                .getElementById("officerName")
                .value;


        stationSettings.phone =
            document
                .getElementById("phone")
                .value;


        stationSettings.email =
            document
                .getElementById("email")
                .value;


        stationSettings.emergencyNumber =
            document
                .getElementById("emergencyNumber")
                .value;


        stationSettings.location =
            document
                .getElementById("location")
                .value;


        showToast(
            "Station settings updated."
        );

    });


// Notification toggle.
document
    .getElementById("notificationsToggle")
    .addEventListener("click", function() {

        stationSettings.notifications =
            !stationSettings.notifications;


        updateToggle(
            "notificationsToggle",
            stationSettings.notifications
        );

    });


// Incident alerts.
document
    .getElementById("incidentToggle")
    .addEventListener("click", function() {

        stationSettings.incidentAlerts =
            !stationSettings.incidentAlerts;


        updateToggle(
            "incidentToggle",
            stationSettings.incidentAlerts
        );

    });


// Vehicle alerts.
document
    .getElementById("vehicleToggle")
    .addEventListener("click", function() {

        stationSettings.vehicleAlerts =
            !stationSettings.vehicleAlerts;


        updateToggle(
            "vehicleToggle",
            stationSettings.vehicleAlerts
        );

    });


// Equipment alerts.
document
    .getElementById("equipmentToggle")
    .addEventListener("click", function() {

        stationSettings.equipmentAlerts =
            !stationSettings.equipmentAlerts;


        updateToggle(
            "equipmentToggle",
            stationSettings.equipmentAlerts
        );

    });


// Training reminders.
document
    .getElementById("trainingToggle")
    .addEventListener("click", function() {

        stationSettings.trainingReminders =
            !stationSettings.trainingReminders;


        updateToggle(
            "trainingToggle",
            stationSettings.trainingReminders
        );

    });


// Compact mode.
document
    .getElementById("compactToggle")
    .addEventListener("click", function() {

        stationSettings.compactMode =
            !stationSettings.compactMode;


        updateToggle(
            "compactToggle",
            stationSettings.compactMode
        );


        document.body.classList.toggle(
            "compact-mode",
            stationSettings.compactMode
        );


        showToast(
            stationSettings.compactMode
                ? "Compact mode enabled."
                : "Compact mode disabled."
        );

    });


// Reset everything back to the demo values.
document
    .getElementById("resetSettings")
    .addEventListener("click", function() {

        stationSettings.notifications = true;

        stationSettings.incidentAlerts = true;

        stationSettings.vehicleAlerts = true;

        stationSettings.equipmentAlerts = true;

        stationSettings.trainingReminders = true;

        stationSettings.compactMode = false;


        document
            .getElementById("stationName")
            .value =
            "Central Fire & Rescue Station";


        document
            .getElementById("stationCode")
            .value =
            "FS-204";


        document
            .getElementById("officerName")
            .value =
            "RIO Nitin";


        document
            .getElementById("phone")
            .value =
            "98XXXX2145";


        document
            .getElementById("email")
            .value =
            "station.demo@example.com";


        document
            .getElementById("emergencyNumber")
            .value =
            "101";


        document
            .getElementById("location")
            .value =
            "Sector 14, Central Zone";


        updateToggle(
            "notificationsToggle",
            true
        );

        updateToggle(
            "incidentToggle",
            true
        );

        updateToggle(
            "vehicleToggle",
            true
        );

        updateToggle(
            "equipmentToggle",
            true
        );

        updateToggle(
            "trainingToggle",
            true
        );

        updateToggle(
            "compactToggle",
            false
        );


        document.body.classList.remove(
            "compact-mode"
        );


        showToast(
            "Demo settings reset."
        );

    });