import * as React from "react"

const WeekNav = ({ min, max, week, setWeek }) => {
  return (
    <div className="center">
      <button
        className="nav-button"
        disabled={week <= min}
        onClick={() => { setWeek(week - 1) }}
      >
        <i className="bi bi-caret-left-fill" />
      </button>
      <span>
        Week {week}
      </span>
      <button
        className="nav-button"
        disabled={week >= max}
        onClick={() => { setWeek(week + 1) }}
      >
        <i className="bi bi-caret-right-fill" />
      </button>
    </div>
  )
}

export default WeekNav
