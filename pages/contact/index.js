const Contact = () => {
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-2 ">
        <div>
          {" "}
          <div className="flex  items-center flex-col">
            <section>
              <h1 className="text-2xl font-bold text-blue-600 ">Hot Line</h1>
              <p className="text-black">Cell: +88 02 48964132</p>
            </section>
            <section>
              <h1 className="text-2xl font-bold text-blue-600 ">Call Us</h1>
              <p className="text-black">Tel: +88 09611686004-7, +88 02 8933290, 02477 990021</p>
            </section>
            <section>
              <h1 className="text-2xl font-bold text-blue-600 ">Email Us</h1>
              <span className="text-black">
                Info Service:{" "}
                <a
                  className="text-blue-600"
                  href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJvpZrxWsTzsPWwRwRXKxRmmjDSZRzTSgggMLLxvlrzbVstbmrNjqlXFdXKCgxJhTRZgxtL"
                >
                  info@silkensewing.com
                </a>
              </span>
              <span className="text-black">
                {" "}
                <br />
                Carrier :{" "}
                <a
                  href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJvlqLqXWTKSfSWxqPpDwPmKJdMWtrtVxtCMVWjjfsTphWjZmZDzDlTmWCDCbdVLhDTqvSV"
                  className="text-blue-600"
                >
                  carrier@silkensewing.com
                </a>{" "}
              </span>
            </section>
          </div>
          <section className="flex flex-col my-3 mx-12">
            <h1 className="text-2xl font-bold bl-2 text-blue-800">
              Get In Tuch
            </h1>
            <input
              className="bg-white text-black border-2 p-2 my-2 border-gray-600 "
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              required
            />
            <input
              className="bg-white text-black border-2 p-2 my-2 border-gray-600 "
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
            <input
              className="bg-white text-black border-2 border-gray-600  p-2 my-2"
              type="text"
              name="text"
              id="text"
              placeholder="I would like to discuss"
              required
            />
            <input
              className="bg-white h-[4rem] text-black border-2 border-gray-600 p-2 my-2"
              type="text"
              name="text"
              id="text"
              placeholder="Write your message/comment here"
              required
            />
            <button
              className="btn bg-blue-600 border
             p-4 w-48 text-white font-bold"
            >
              Send Message
            </button>
            {/* <input
              type="submit"
              value="Send Message"
              className="bg-blue-600 border
             p-4

             "
            /> */}
          </section>
        </div>

        <div className="mx-auto">
          <section className="flex flex-col ">
            <div className="mx-auto">
              <div className="card w-96  shadow-xl m-2 bg-white text-black">
                <div className="card-body">
                  <h2 className="card-title">
                    {" "}
                    Silken Sewing Ltd, Head Office
                  </h2>
                  <p>House#02, Road#20/A, Sector#3</p>
                  <p>Uttara, Dhaka-1230, Bangladesh</p>
                </div>
                <figure>
                  <iframe
                    className="h-48 w-96"
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d29189.07808617935!2d90.3917!3d23.8671!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUyJzAxLjYiTiA5MMKwMjMnMzAuMSJF!5e0!3m2!1ses!2sus!4v1679927873765!5m2!1ses!2sus"
                  ></iframe>
                </figure>
              </div>
            </div>
          </section>

          <div className="my-4">
            <div className="card w-96 bg-white text-black shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> Silken Sewing Ltd, Factory</h2>
                <p>Baniarchala (Membarbari), Vobanipur</p>
                <p>Gazipur-1702, Bangladesh</p>
              </div>
              <figure>
                <iframe
                  className="h-48 w-96"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d29122.930211337232!2d90.427697!3d24.158884!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA5JzMyLjAiTiA5MMKwMjUnMzkuNyJF!5e0!3m2!1ses!2sus!4v1679928054934!5m2!1ses!2sus"
                ></iframe>
              </figure>
            </div>
          </div>

          <div className="my-4">
            <div className="card w-96 bg-white text-black shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> Silken Sewing Ltd, Factory</h2>
                <p>Baniarchala (Membarbari), Vobanipur</p>
                <p>Gazipur-1702, Bangladesh</p>
              </div>
              <figure>
                <iframe
                  className="h-48 w-96"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d19468.1353115631!2d-1.5142050000000002!3d52.415431!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDI0JzU1LjYiTiAxwrAzMCc1MS4xIlc!5e0!3m2!1ses!2sus!4v1679928093346!5m2!1ses!2sus"
                ></iframe>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
