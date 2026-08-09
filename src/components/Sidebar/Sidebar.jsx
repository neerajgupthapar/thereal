import "./Sidebar.css";
import {
    University,
    Users,
    MessageCircle,
    Megaphone,
    Bell,
    Moon,
    Settings,
    Bug
} from "lucide-react";

function Sidebar() {
    return (
        <nav className="sidebar">

        <div className="top-section">
             <div className="logo">
                <span>LP</span>
            </div>

            <div className="menu">
                <ul>
                    <li className="active" title="University"><University /></li>
                    <li title="Users"><Users /></li>
                    <li title="MessageCircle"><MessageCircle /></li>
                    <li title="Megaphone"><Megaphone /></li>
                    <li><Bell /></li>
                </ul>
            </div>
        </div>

            <div className="bottom-menu">
                <ul>
                    <li title="Dark Mode"><Moon /></li>
                    <li title="Settings"><Settings /></li>
                    <li><Bug /></li>
                </ul>
            </div>

        </nav>
    );
}

export default Sidebar;