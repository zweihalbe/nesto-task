import { organization, schedule } from './domain/data.ts'
import { collectStores, collectEmployees, formatShift } from './domain/utils.ts'

/* ---------- Aufgabe 1 ---------- */
console.log(`\nStores of ${organization.name}:`)
collectStores(organization).forEach(store => console.log(`* ${store.name}`))

/* ---------- Aufgabe 2 ---------- */
console.log(`\nEmployees of ${organization.name}:`)
collectEmployees(organization).forEach(employee => console.log(`* ${employee}`))

/* ---------- Aufgabe 3 ---------- */
collectStores(organization).forEach(store => {
  console.log(`\nTime table ${store.name}:`)
  store.employees.forEach(employee => {
    const shifts = schedule[employee] || []
    console.log(`* ${employee}: ${shifts.map(formatShift).join(', ')}`)
  })
})
