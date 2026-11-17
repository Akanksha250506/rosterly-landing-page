import { useState } from 'react'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const people = ['Aarav', 'Mia', 'Noah']
const shifts = ['Morning', 'Evening', 'Night', 'Off']

const initialRoster = people.map((_, personIndex) => days.map((_, dayIndex) => (personIndex + dayIndex) % 3))

export default function RosterDemo() {
  const [roster, setRoster] = useState(initialRoster)
  const isCovered = days.every((_, dayIndex) => roster.some((person) => shifts[person[dayIndex]] !== 'Off'))
  const uncoveredDay = days.find((_, dayIndex) => roster.every((person) => shifts[person[dayIndex]] === 'Off'))

  const cycleShift = (personIndex, dayIndex) => {
    setRoster((current) => current.map((person, row) => person.map((shift, column) => row === personIndex && column === dayIndex ? (shift + 1) % shifts.length : shift)))
  }

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-mint/70 blur-2xl" aria-hidden="true" />
      <div className="rounded-3xl border border-line bg-paper p-4 shadow-soft sm:p-6">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-ink/60">This week</p>
            <h2 className="mt-1 font-display text-2xl font-bold">Front of house</h2>
          </div>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">Live</span>
        </div>
        <div className="grid grid-cols-[4.25rem_repeat(5,minmax(0,1fr))] gap-1.5 text-center text-xs sm:gap-2">
          <span />
          {days.map((day) => <span key={day} className="pb-2 font-bold text-ink/60">{day}</span>)}
          {people.map((person, personIndex) => (
            <div className="contents" key={person}>
              <span className="flex items-center text-left text-xs font-bold">{person}</span>
              {days.map((day, dayIndex) => {
                const shift = shifts[roster[personIndex][dayIndex]]
                return <button type="button" key={`${person}-${day}`} onClick={() => cycleShift(personIndex, dayIndex)} aria-label={`${person}, ${day}: ${shift}. Click to change shift`} className={`min-h-[62px] rounded-xl border p-1 text-[10px] font-bold transition-colors sm:min-h-[70px] ${shift === 'Off' ? 'border-line bg-paper text-ink/35' : shift === 'Morning' ? 'border-line bg-mint text-ink' : shift === 'Evening' ? 'border-ink/20 bg-ink text-paper' : 'border-accent bg-accent/20 text-ink'}`}><span className="block sm:hidden">{shift.slice(0, 1)}</span><span className="hidden sm:block">{shift}</span></button>
              })}
            </div>
          ))}
        </div>
        <p className={`mt-5 border-t border-line pt-4 text-sm font-bold ${isCovered ? 'text-ink' : 'text-danger'}`} aria-live="polite">
          <span className="mr-2" aria-hidden="true">{isCovered ? '✓' : '!'}</span>
          {isCovered ? 'All days covered' : `No one is working on ${uncoveredDay}`}
        </p>
      </div>
    </div>
  )
}
