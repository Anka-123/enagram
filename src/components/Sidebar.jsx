import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaSpellCheck,
  FaMicrophone,
  FaRegFileAlt,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { MdTextFields } from "react-icons/md";
import { RiVoiceprintFill } from "react-icons/ri";
import "../App.css";
import logo from "../img/logo.png";
function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="top-section">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo-img" />
          {!collapsed && <span>ENAGRAM</span>}
        </Link>
        <button className="menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </button>
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
      </div>

      <nav className={`nav ${mobileMenu ? "open" : ""}`}>
        {" "}
        <NavLink
          to="/autocorector"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaSpellCheck />
          {!collapsed && <span>მართლმწერი</span>}
        </NavLink>
        <NavLink
          to="/text-compare"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <MdTextFields />
          {!collapsed && <span>ტექსტის შედარება</span>}
        </NavLink>
        <NavLink
          to="/audio-to-text"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaMicrophone />
          {!collapsed && <span>ხმა → ტექსტი</span>}
        </NavLink>
        <NavLink
          to="/text-to-audio"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <RiVoiceprintFill />
          {!collapsed && <span>ტექსტი → ხმა</span>}
        </NavLink>
        <NavLink
          to="/pdf"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaRegFileAlt />
          {!collapsed && <span>PDF კონვერტაცია</span>}
        </NavLink>
      </nav>
      <div className="sidebar-user">
        <div className="user-avatar">U</div>

        <div className="user-info">
          <p className="user-name">{!collapsed && <span>User</span>}</p>
        </div>

        <div className="user-menu">{!collapsed && <span>•••</span>} </div>
      </div>
    </div>
  );
}

export default Sidebar;
