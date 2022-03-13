import React, { FC } from 'react'
const Section: FC = ({ children }) => {
  return (
    <section className="my-2 mx-auto h-[88vh] bg-white xl:max-w-6xl">
      {children}
    </section>
  )
}
export default Section