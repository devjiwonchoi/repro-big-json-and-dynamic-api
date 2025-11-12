import { Suspense } from 'react'
import { cookies } from 'next/headers'
import { getCourses } from './get-course'

export default async function Page() {
  const courses = getCourses()
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <DynamicAPI />
      </Suspense>
      {courses.map((course) => (
        <div key={course._id}>{course.title}</div>
      ))}
    </>
  )
}
async function DynamicAPI() {
  // dynamic APIs like cookies, headers, etc.
  await cookies()

  return <p>hello world</p>
}
