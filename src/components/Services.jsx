const services = [
  {
    img: "picture/application.png",
    title: "Web Development",
    subtitle: "Modern and responsive websites",
    details:
      "I build fast, modern, and responsive websites using HTML, CSS, JavaScript, and Bootstrap with clean and maintainable code.",
  },
  {
    img: "picture/responsive-design.png",
    title: "Responsive Design",
    subtitle: "Perfect on all devices",
    details:
      "I create layouts that adapt perfectly to all screen sizes including mobile, tablet, and desktop for the best user experience.",
  },
  {
    img: "picture/performance.png",
    title: "Performance Optimization",
    details:
      "I optimize website performance by improving loading speed, reducing file sizes, and writing efficient code.",
  },
];

function Services() {
  return (
    <div className="service pt-4 pb-4 ">
      <div className="container reveul">
        <h2 className="special text-center mb-4">
          <p>My Services</p>
        </h2>
        <div className="row g-3">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 " key={service.title}>
              <div className="box-info rounded-3">
                <div className="box pb-2 d-flex align-items-center gap-3">
                  <img src={service.img} alt="" />
                  <div className="info">
                    <h4>{service.title}</h4>
                    {service.subtitle && <span>{service.subtitle}</span>}
                  </div>
                </div>
                <p className="mt-3 mb-4  details">{service.details}</p>
                <a href="#">
                  <div className="btn main-btn d-inline-flex align-items-center justify-content-around first work">
                    Learn More
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
