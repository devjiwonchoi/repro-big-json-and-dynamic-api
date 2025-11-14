import { getCourses } from './get-course'
import { connection } from 'next/server'

export default async function Page() {
  const courses = getCourses()
  await connection()
  return courses.map((course) => <div key={course._id}>{course.title}</div>)
}
