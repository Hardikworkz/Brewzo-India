 
import './contact.css';  
import pic from  '../../assets/brewzoo/images/review-2.jpeg';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="contact-wrapper">
      <div className="page-container">
        
        {/* Left Column: Form */}
        <div className="form-column">
          <div className="contact-label">CONTACT FORM</div>
          <h1 className="form-title">Reach Out!</h1>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name <span className="required-asterisk">*</span>
              </label>
              <input type="text" id="name" className="form-input" required />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email <span className="required-asterisk">*</span>
              </label>
              <input type="email" id="email" className="form-input" required />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message <span className="required-asterisk">*</span>
              </label>
              <textarea id="message" className="form-input form-textarea" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">GET IN TOUCH</button>
          </form>
        </div>

        {/* Right Column: Image */}
        <div className="image-column">
          <div className="contact-image-container">
            <img 
              src={pic}  
              alt="Two people behind a cafe counter" 
              className="contact-image" 
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;