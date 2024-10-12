import { useState, useRef } from "react"
import {motion} from 'framer-motion'

import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

// service_hzf96t8

// template_4bdspkc

// 8mg1_KxJwsRiPKuZh


const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name : '',
    email : '',
    message : '',
  })

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target ;
    setForm({...form , [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);



    emailjs.send(
      'service_hzf96t8',
      'template_4bdspkc',
      {
        from_name:form.name,
        to_name: 'Saber Portfolio',
        from_email : form.email,
        to_email : 'sabergamer999@gmail.com',
        message : form.message,
      },
      '8mg1_KxJwsRiPKuZh'
    )
    
    .then(()=> { 
      setLoading(false)
      alert('thanks you . iwill get back to you as soon as possible.')
      setForm({
        name : '',
        email : '',
        message : '',
      })
    }
    ,(error) => {
      setLoading(false)
      
      console.log(error)

      alert("something went wrong")
    }
    )}

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
                Your Name
            </span>

            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="what's your name"
            className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"

            />

          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
                Your Email
            </span>

            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="what's your email"
            className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"

            />

          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
                Your Message
            </span>

            <textarea
            rows="7"
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="what do you want to say "
            className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"

            />

          </label>

          <button
          type="submit"
          className="px-8 py-3 font-bold text-white rounded-lg shadow-md outline-none bg-tertiary w-fit shadow-primary"
          >
            {loading ? 'Sending....' : 'Send'}

          </button>


        </form>

      </motion.div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>



    </div>
  )
}

export default SectionWrapper(Contact, "contact")