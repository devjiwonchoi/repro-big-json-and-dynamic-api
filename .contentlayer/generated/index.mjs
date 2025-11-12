// This is HUGE. Not importing allDocs makes the issue go away.
import allDocs from './Doc/_index.json' with { type: 'json' }
import allCourses from './Course/_index.json' with { type: 'json' }

export { allCourses }