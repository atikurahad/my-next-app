const Contact = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div>
          {" "}
          <section>
            <h1 className="text-2xl font-bold text-blue-600">Hot Line</h1>
            <p>Cell: +88 02 48964132</p>
          </section>
          <section>
            <h1>Call Us</h1>
            <p>Tel: ++88 09611686004-7, +88 02 8933290, 02477 990021</p>
          </section>
          <section>
            <h1>Email Us</h1>
            <p>Info Service: info@silkensewing.com</p>
            <p>Carrier : carrier@silkensewing.com</p>
          </section>
          <section>
            <h1>Get In Tuch</h1>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
            <input type="email" name="email" id="email" placeholder="Enter Your Email" required />
 <input type="text" name="text" id="text" placeholder="Enter Your Message" required />

          </section>
        </div>

        <div>
          <section className="flex flex-col ">
            <div className="border-2">
              <p> House#02, Road#20/A, Sector#3</p>
              <p>Uttara, Dhaka-1230, Bangladesh</p>
              <iframe
                className="h-48 w-96"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d29189.07808617935!2d90.3917!3d23.8671!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUyJzAxLjYiTiA5MMKwMjMnMzAuMSJF!5e0!3m2!1ses!2sus!4v1679927873765!5m2!1ses!2sus"
              ></iframe>
            </div>
          </section>

          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d29122.930211337232!2d90.427697!3d24.158884!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA5JzMyLjAiTiA5MMKwMjUnMzkuNyJF!5e0!3m2!1ses!2sus!4v1679928054934!5m2!1ses!2sus"></iframe>

          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d19468.1353115631!2d-1.5142050000000002!3d52.415431!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDI0JzU1LjYiTiAxwrAzMCc1MS4xIlc!5e0!3m2!1ses!2sus!4v1679928093346!5m2!1ses!2sus"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
