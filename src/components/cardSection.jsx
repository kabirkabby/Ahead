import Card from '@/components/card'
import React from 'react'

const CardSection = () => {

  const content = [
    {
      title: "You argue with a colleague",
      paragraph: "You get angry and defensive. instead of staying open and working towards common ground.",
    },
    {
      title: "You get a promotion at work",
      paragraph: "You question yourself and wonder when they'll realize you•re an unqualified imposter, instead of trusting yourself & your abilities."
    },
    {
      title: "You attend a Class reunion",
      paragraph: "You compare yourself with your peers' instead Of making your sellf-judgement more independent of other."
    },
    {
      title: "You are at a lively dinner party ",
      paragraph: "You play on your phone, instead of confidently apprcxtching strangers and striking up Chat,."
    }
  ]

  return (
    <div className='px-16 my-16 '>
        <h2 className='font-bold text-5xl mb-16 '> Does this sound familiar...</h2>
        <div className='flex gap-8 items-center overflow-x-auto flex-nowrap '>
            <Card title={content[0].title} paragraph={content[0].paragraph} className="bg-rose-300"/>
            <Card title={content[1].title} paragraph={content[1].paragraph} className="bg-violet-300"/>
            <Card title={content[2].title} paragraph={content[2].paragraph} className="bg-green-300"/>
            <Card title={content[3].title} paragraph={content[3].paragraph} className="bg-amber-300"/>
        </div>
    </div>
  )
}

export default CardSection