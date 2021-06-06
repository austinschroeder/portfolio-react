import ContactForm from './ContactForm'
// FIX FORMATTING


// **LIVES IN DIV className=CONTAINER**

function Contact() {
    return(
        // <!-- BEGIN CONTACT -->

      <div className="row blue">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header">
            <a className="anchor" name="contact"></a>
            <h2 className="white-text">Contact Me</h2>
          </div>
          <div className="contact content-body">
            <ContactForm />
            {/* <form method="POST" action="https://formspree.io/austinsoundy@gmail.com">
                <input type="hidden" name="_subject" value="Contact request from personal website" />
                <input type="email" name="_replyto" placeholder="Your email" required />
                <textarea name="message" placeholder="Your message" required></textarea>
                <button type="submit">Send</button>
            </form> */}
                {/* <form action="https://formspree.io/f/{form_id}" method="post">
                    <label for="email">Your Email</label>
                    <input name="Email" id="email" type="email" />
                    <button type="submit">Submit</button>
                </form> */}
          </div>
        </div>
        <div className="side-content"></div>
      </div>
    //   {/* END CONTACT --></div> */}
    )
};

export default Contact;