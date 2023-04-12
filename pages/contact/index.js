const Contact = () => {
  return (
    <div className="bg-white ">
      <p className="text-center text-6xl font-bold text-black py-10 mx-auto">
        Contact details
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center">
        <section className="text-black font-bold text-xl p-4 my-5 shadow-2xl bg-[#70ad46] rounded-lg h-48 w-96">
          <div className="my-5">
            <p className="text-blue-900 text-4xl font-bold 	">
              Md. Karimul Hassan
            </p>
            <p>Managing Director</p>

            <p>
              Cell:
              <a href="tel:+8801711974027">+88 01711-974027</a>
            </p>

            <p>
              E-mail:
              <a className="text-blue-900" href="mailto:hassan@mkattire.com">
                hassan@mkattire.com
              </a>{" "}
            </p>
          </div>
        </section>
        <section className="text-black font-bold text-xl p-4 my-5 shadow-2xl bg-[#70ad46] rounded-lg h-48 w-96">
          <div className="my-5 ">
            <p className="text-blue-900 text-4xl font-bold">Md. Mahatab Alam</p>
            <p> Chairman</p>
            <p>
              Cell:
              <a href="tel:+8801716670738">+88 01716-670738</a>
            </p>
            <p>Cell:</p>
            <p>
              E-mail:
              <a className="text-blue-900" href="mailto:alam@mkattire.com">
                alam@mkattire.com{" "}
              </a>{" "}
            </p>
          </div>
        </section>
        <section className="text-black font-bold text-xl p-4 my-5 shadow-2xl bg-[#70ad46] rounded-lg h-48 w-96">
          <div className="my-5">
            <p className="text-blue-900 text-4xl font-bold">
              Md. Jobaidul Karim
            </p>
            <p> Director</p>
            <p>
              Cell:
              <a href="tel:+8801841042989">+88 01841-042989</a>
            </p>
            <p>
              E-mail:
              <a className="text-blue-900" href="mailto:jkarim@mkattire.com">
                jkarim@mkattire.com{" "}
              </a>{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
