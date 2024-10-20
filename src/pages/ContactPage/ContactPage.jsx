import { Contacts, Form } from '../../components';

import './ContactPageStyle.css';

export const ContactPage = () => {
  return (
    <section>

      {/* contact form container */}
      <div>

          {/* lets get in touch */}
         <div>
            <div>
              <span>Let's</span>
              <span>get</span>
              <span>in</span>
              <span>touch</span>
            </div>
          </div>

          {/* form */}
          <Form />
      </div>

      {/* contacts, or relevant links */}
      <Contacts />
    </section>
  )
}
                                         