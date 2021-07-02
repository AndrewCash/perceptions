import Link from 'next/link'

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Any questions? <span className="colored">Contact us.</span></h2>
      <p className="contact__paragraph">We&apos;re looking forward to hearing from you. Feel free to contact us if you have any questions!</p>
      <a href="mailto:andrew@csh.casa">
        <button>Contact Us</button>
      </a>
    </div>
  )
}