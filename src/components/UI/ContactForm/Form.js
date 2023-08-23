export default function ContactForm () {
  return (
    <form className="form">
      <div className="form__inputs">
        <input type='name' name='name' placeholder="Name"></input>
        <input type='email' name='email' placeholder="Email"></input>
        <textarea name='message' rows='5' column='50' placeholder="Message"></textarea>
      </div>

      <button>Send message</button>
    </form>
  )
}