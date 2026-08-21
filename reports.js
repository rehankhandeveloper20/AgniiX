// Sample report data for the frontend demo.

const reports = [
    {
        id: "RP-501",
        title: "Monthly Incident Summary",
        type: "Incident",
        period: "August 2026",
        generated: "20 Aug 2026",
        records: 24,
        status: "Ready"
    },

    {
        id: "RP-502",
        title: "Vehicle Availability Report",
        type: "Vehicle",
        period: "August 2026",
        generated: "20 Aug 2026",
        records: 8,
        status: "Ready"
    },

    {
        id: "RP-503",
        title: "Equipment Inspection Report",
        type: "Equipment",
        period: "August 2026",
        generated: "19 Aug 2026",
        records: 32,
        status: "Ready"
    },

    {
        id: "RP-504",
        title: "Team Duty Report",
        type: "Team",
        period: "August 2026",
        generated: "19 Aug 2026",
        records: 18,
        status: "Ready"
    },

    {
        id: "RP-505",
        title: "Training Activity Report",
        type: "Training",
        period: "August 2026",
        generated: "18 Aug 2026",
        records: 14,
        status: "Ready"
    },

    {
        id: "RP-506",
        title: "Emergency Response Report",
        type: "Emergency",
        period: "July 2026",
        generated: "01 Aug 2026",
        records: 17,
        status: "Ready"
    }
];


// Keep the sidebar consistent with the other pages.
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
                            item.link === "reports.html"
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


// Report type icons make the list easier to understand.
function reportIcon(type) {

    const icons = {
        Incident: "🚨",
        Vehicle: "🚒",
        Equipment: "🧯",
        Team: "👥",
        Training: "🎓",
        Emergency: "⚠️"
    };


    return icons[type] || "📄";
}


// Filter reports from the search box.
function filterReports() {

    const search =
        document
            .getElementById("reportSearch")
            .value
            .toLowerCase()
            .trim();


    const type =
        document
            .getElementById("reportType")
            .value;


    const filtered =
        reports.filter(report => {

            const matchesSearch =
                report.title
                    .toLowerCase()
                    .includes(search) ||

                report.id
                    .toLowerCase()
                    .includes(search) ||

                report.period
                    .toLowerCase()
                    .includes(search);


            const matchesType =
                type === "All" ||
                report.type === type;


            return (
                matchesSearch &&
                matchesType
            );
        });


    renderReports(filtered);
}


// Render report cards.
function renderReports(list) {

    const container =
        document.getElementById("reportsList");


    if (list.length === 0) {

        container.innerHTML = `

            <div
                class="panel"
                style="
                    padding:45px;
                    text-align:center;
                    color:var(--muted);
                "
            >
                No reports found.
            </div>

        `;

        return;
    }


    container.innerHTML = list.map(report => `

        <div
            class="panel"
            style="
                margin-bottom:12px;
            "
        >

            <div
                style="
                    padding:18px;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    gap:18px;
                "
            >

                <div
                    style="
                        display:flex;
                        align-items:center;
                        gap:14px;
                        min-width:0;
                    "
                >

                    <div
                        style="
                            width:44px;
                            height:44px;
                            flex-shrink:0;
                            border-radius:10px;
                            background:#fff4df;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            font-size:19px;
                        "
                    >
                        ${reportIcon(report.type)}
                    </div>


                    <div style="min-width:0;">

                        <h2
                            style="
                                font-size:14px;
                                margin-bottom:5px;
                            "
                        >
                            ${report.title}
                        </h2>

                        <div
                            style="
                                display:flex;
                                gap:12px;
                                flex-wrap:wrap;
                                color:var(--muted);
                                font-size:10px;
                            "
                        >

                            <span>
                                ${report.id}
                            </span>

                            <span>
                                ${report.period}
                            </span>

                            <span>
                                ${report.records} records
                            </span>

                        </div>

                    </div>

                </div>


                <div
                    style="
                        display:flex;
                        align-items:center;
                        gap:9px;
                        flex-shrink:0;
                    "
                >

                    <span class="badge green">
                        ${report.status}
                    </span>


                    <button
                        class="action-btn"
                        onclick="viewReport('${report.id}')"
                    >
                        View
                    </button>


                    <button
                        class="btn btn-primary"
                        style="
                            padding:7px 11px;
                            font-size:10px;
                        "
                        onclick="downloadReport('${report.id}')"
                    >
                        Export
                    </button>

                </div>

            </div>

        </div>

    `).join("");
}


// Show selected report details.
function viewReport(id) {

    const report =
        reports.find(
            item => item.id === id
        );


    if (!report) {
        return;
    }


    document.getElementById("reportDetails").innerHTML = `

        <div
            style="
                text-align:center;
                margin-bottom:20px;
            "
        >

            <div style="font-size:34px;">
                ${reportIcon(report.type)}
            </div>

            <h2 style="font-size:17px;">
                ${report.title}
            </h2>

            <p
                style="
                    color:var(--muted);
                    font-size:11px;
                    margin-top:5px;
                "
            >
                ${report.type} Report
            </p>

        </div>


        <div class="detail-row">
            <strong>Report ID</strong>
            <span>${report.id}</span>
        </div>

        <div class="detail-row">
            <strong>Report Type</strong>
            <span>${report.type}</span>
        </div>

        <div class="detail-row">
            <strong>Period</strong>
            <span>${report.period}</span>
        </div>

        <div class="detail-row">
            <strong>Generated</strong>
            <span>${report.generated}</span>
        </div>

        <div class="detail-row">
            <strong>Total Records</strong>
            <span>${report.records}</span>
        </div>

        <div class="detail-row">
            <strong>Status</strong>
            <span class="badge green">${report.status}</span>
        </div>

    `;


    document
        .getElementById("reportModal")
        .classList
        .add("show");
}


// Close report details.
function closeReport() {

    document
        .getElementById("reportModal")
        .classList
        .remove("show");
}


// Frontend-only export demo.
function downloadReport(id) {

    const report =
        reports.find(
            item => item.id === id
        );


    if (!report) {
        return;
    }


    /*
     * This creates a tiny text report locally.
     * It is only a frontend demo, not a real server export.
     */

    const content = `
FIRE STATION REPORT
-------------------

Report ID: ${report.id}
Title: ${report.title}
Type: ${report.type}
Period: ${report.period}
Generated: ${report.generated}
Records: ${report.records}
Status: ${report.status}

This is a frontend demo report.
    `.trim();


    const file =
        new Blob(
            [content],
            { type: "text/plain" }
        );


    const url =
        URL.createObjectURL(file);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        `${report.id}-report.txt`;


    document.body.appendChild(link);

    link.click();

    link.remove();


    URL.revokeObjectURL(url);


    showToast(
        `${report.title} exported.`
    );
}


// Create a small notification.
function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


// Build the Reports page.
document.getElementById("app").innerHTML = `

    <div class="app-shell">

        ${createSidebar()}


        <main class="main">

            <div class="page-title">

                <h1>
                    Reports
                </h1>

                <p>
                    View station activity and generate reports.
                </p>

            </div>


            <!-- Report overview -->

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
                        📄
                    </div>

                    <div>

                        <span>
                            Total Reports
                        </span>

                        <strong>
                            ${reports.length}
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon green">
                        ✓
                    </div>

                    <div>

                        <span>
                            Ready
                        </span>

                        <strong>
                            ${
                                reports.filter(
                                    item =>
                                        item.status === "Ready"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon blue">
                        📊
                    </div>

                    <div>

                        <span>
                            Total Records
                        </span>

                        <strong>
                            ${
                                reports.reduce(
                                    (total, item) =>
                                        total + item.records,
                                    0
                                )
                            }
                        </strong>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon gold">
                        📅
                    </div>

                    <div>

                        <span>
                            Latest
                        </span>

                        <strong>
                            Aug 2026
                        </strong>

                    </div>

                </div>

            </div>


            <!-- Search and report filter -->

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
                        id="reportSearch"
                        type="text"
                        placeholder="Search reports..."
                        style="
                            width:240px;
                            padding:10px 12px;
                            border:1px solid var(--border);
                            border-radius:8px;
                            outline:none;
                            font-size:12px;
                            background:white;
                        "
                    >


                    <select
                        id="reportType"
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
                            All Reports
                        </option>

                        <option value="Incident">
                            Incident
                        </option>

                        <option value="Vehicle">
                            Vehicle
                        </option>

                        <option value="Equipment">
                            Equipment
                        </option>

                        <option value="Team">
                            Team
                        </option>

                        <option value="Training">
                            Training
                        </option>

                        <option value="Emergency">
                            Emergency
                        </option>

                    </select>

                </div>


                <button
                    class="btn btn-primary"
                    onclick="showToast('New report generation is ready for backend integration.')"
                >
                    + Generate Report
                </button>

            </div>


            <!-- Reports list -->

            <div id="reportsList"></div>


            <!-- Report details -->

            <div
                class="modal-backdrop"
                id="reportModal"
            >

                <div class="modal">

                    <div class="modal-head">

                        <h2>
                            Report Details
                        </h2>

                        <button
                            class="close"
                            id="closeReport"
                        >
                            ×
                        </button>

                    </div>


                    <div id="reportDetails"></div>


                    <div
                        style="
                            display:flex;
                            justify-content:flex-end;
                            margin-top:18px;
                        "
                    >

                        <button
                            class="btn btn-light"
                            onclick="closeReport()"
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


// Show reports when page opens.
renderReports(reports);


// Search reports.
document
    .getElementById("reportSearch")
    .addEventListener(
        "input",
        filterReports
    );


// Filter by report type.
document
    .getElementById("reportType")
    .addEventListener(
        "change",
        filterReports
    );


// Close report modal.
document
    .getElementById("closeReport")
    .addEventListener(
        "click",
        closeReport
    );