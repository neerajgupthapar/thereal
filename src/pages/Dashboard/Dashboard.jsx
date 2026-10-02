import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  const username = localStorage.getItem("username");

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">

        {/* Dashboard Header */}
        <header className="dashboard-header">
          <div>
            <h1>Welcome back, {username} 👋</h1>
            <p>Here's what's happening around LPULive.</p>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="stats-container">

          <div className="stat-card">
            <h3>Announcements</h3>
            <p>12</p>
          </div>

          <div className="stat-card">
            <h3>Upcoming Events</h3>
            <p>5</p>
          </div>

          <div className="stat-card">
            <h3>Messages</h3>
            <p>8</p>
          </div>

          <div className="stat-card">
            <h3>Notifications</h3>
            <p>3</p>
          </div>

        </section>

        {/* Announcements */}
        <section className="dashboard-section">
          <h2>Latest Announcements</h2>

          <div className="announcement-card">
            <h3>Mid-Term Examination Schedule</h3>
            <p>
              The mid-term examination schedule has been published.
            </p>
            <span>2 hours ago</span>
          </div>

          <div className="announcement-card">
            <h3>Campus Placement Drive</h3>
            <p>
              A new placement drive has been announced for eligible students.
            </p>
            <span>Yesterday</span>
          </div>
        </section>

        {/* Events */}
        <section className="dashboard-section">
          <h2>Upcoming Events</h2>

          <div className="events-container">

            <div className="event-card">
              <h3>Hackathon 2026</h3>
              <p>October 10, 2026</p>
              <span>University Auditorium</span>
            </div>

            <div className="event-card">
              <h3>Tech Fest</h3>
              <p>October 18, 2026</p>
              <span>Block 32</span>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;