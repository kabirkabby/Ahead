import React from 'react'

const ContentSection = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex justify-between flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-bold title-font mb-2 md:w-1/5">EQ Beats</h2>
            <div className="md:w-2/3 flex gap-5">
            <p className="leading-relaxed text-lg font-bold ">People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
            <p className="leading-relaxed text-lg font-bold ">They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
            </div>
        </div>
    </section>
  )
}

export default ContentSection