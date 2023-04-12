const Contact = () => {
  return (
    <div className="bg-white ">
      <p className="text-center mx-auto">Contact details</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center">
        <section className="text-blue-700 font-bold text-xl h-96 shadow-2xl p-4 my-5">
          <div className="my-5">
            <p className="text-blue-900 text-4xl font-bold">
              Md. Karimul Hassan
            </p>
            <p>Managing Director</p>
            <p>Cell:+88 01711-974027</p>
            <p>E-mail: hassan@mkattire.com</p>
          </div>
        </section>
        <section className="text-blue-700 font-bold text-xl p-4 my-5 shadow-2xl">
          <div className="my-5">
            <p className="text-blue-900 text-4xl font-bold">Md. Mahatab Alam</p>
            <p> Chairman</p>
            <p>Cell:+88 01716-670738</p>
            <p>E-mail: alam@mkattire.com</p>
          </div>
        </section>
        <section className="text-blue-700 font-bold text-xl p-4 my-5 shadow-2xl">
          <div className="my-5">
            <p className="text-blue-900 text-4xl font-bold">
              Md. Jobaidul Karim
            </p>
            <p> Director</p>
            <p>Cell:+88 01841-042989</p>
            <p>E-mail: jkarim@mkattire.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
