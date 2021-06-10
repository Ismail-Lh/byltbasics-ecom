import classes from './ContactUsPageContainer.module.scss';

const ContactUsPageContainer = () => {
  return (
    <div className={classes.contactUs}>
      <div className='container'>
        <div className={classes.contactUs__grid}>
          <div className={classes.contactUs__img}>
            <img src='/assets/contact-page.jpg' alt='contact us' />
          </div>

          <div className={classes.contactUs__info}>
            <div className={classes.header}>
              <h1>contact us</h1>
              <h3>9:00 am - 5:00 pm pst | monday - friday</h3>
            </div>

            <div className={classes.paragraphs}>
              <p>
                Please contact our support team with any questions or concerns
                you may have. We're here to help!
              </p>
              <p>
                <span>
                  *Please note, due to our high order volume, responses from our
                  customer support team may take up to 3 business days.
                </span>{' '}
                Once your order is placed, order processing will take 5 - 7
                business days. Expedited shipping does not affect order
                processing time. Once your items have shipped, they will be
                delivered from our doorstep to yours within 7 business days.
              </p>
              <p>
                Please be advised, due to higher order volumes during this time,
                your order may take up to 5 - 7 business days to be processed.
                Once processed you will receive an email confirmation regarding
                your shipping details.
              </p>
              <p>Please also view helpful resource pages here:</p>
            </div>

            <form className={classes.form}>
              <div className={classes.form__user}>
                <input type='text' placeholder='name' />
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='email'
                />

                <textarea
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                  placeholder='message'
                />
              </div>
              <button type='submit' className={classes.submitBtn}>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPageContainer;
