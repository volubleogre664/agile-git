"use strict";

function HomeOptionButton({ label, icon, onClick = undefined }) {
  return (
    <button className="homeOptionBtn" onClick={onClick}>
      <i className={icon}></i>
      <span>{label}</span>
    </button>
  );
}

module.exports = HomeOptionButton;
