import "./ChooseUs.css";
import {
  Ticket,
  Clock,
  Sparkles,
  ShieldCheck,
  CreditCard,
  PhoneCall,
} from "lucide-react";

function ChooseUs() {
  // const features = [
  //   {
  //     title: "50% OFF RETURNS",
  //     desc: "Flat discount on return trips",
  //     icon: Ticket,
  //     color: "#ffb100",
  //   },
  //   {
  //     title: "FAIR WAITING",
  //     desc: "12 mins per km free upto 40km",
  //     icon: Clock,
  //     color: "#00a3ff",
  //   },
  //   {
  //     title: "PRISTINE FLEET",
  //     desc: "Clean & sanitized cars",
  //     icon: Sparkles,
  //     color: "#00d084",
  //   },
  //   {
  //     title: "MAXIMUM SAFETY",
  //     desc: "Verified partner drivers",
  //     icon: ShieldCheck,
  //     color: "#b14cff",
  //   },
  //   {
  //     title: "DIRECT PAYMENTS",
  //     desc: "Pay driver directly via UPI/Cash",
  //     icon: CreditCard,
  //     color: "#7c5cff",
  //   },
  //   {
  //     title: "24/7 SUPPORT",
  //     desc: "Always here to help you",
  //     icon: PhoneCall,
  //     color: "#ff4d5a",
  //   },
  // ];
const features = [
  {
    title: "50% OFF RETURNS",
    desc: "Enjoy up to 50% discount on return trips with affordable and transparent pricing.",
    icon: Ticket,
    color: "#ffb100",
  },
  {
    title: "FAIR WAITING",
    desc: "Get complimentary waiting time with fair charges only after the free limit.",
    icon: Clock,
    color: "#00a3ff",
  },
  {
    title: "PRISTINE FLEET",
    desc: "Travel in clean, sanitized, and regularly maintained premium vehicles.",
    icon: Sparkles,
    color: "#00d084",
  },
  {
    title: "MAXIMUM SAFETY",
    desc: "Verified drivers, GPS-enabled rides, and well-maintained vehicles for every journey.",
    icon: ShieldCheck,
    color: "#b14cff",
  },
  {
    title: "DIRECT PAYMENTS",
    desc: "Pay securely via UPI, cash, or other convenient payment options after your trip.",
    icon: CreditCard,
    color: "#7c5cff",
  },
  {
    title: "24/7 SUPPORT",
    desc: "Our customer support team is available around the clock to assist you anytime.",
    icon: PhoneCall,
    color: "#ff4d5a",
  },
];
  return (
    <section className="why-section mt-5">
      <div className="why-container">
        {/* <div className="why-header">
          <span className="why-label">ELITE STANDARDS</span>
          <h2 className="why-title">
            WHY CHOOSE <span>US?</span>
          </h2>
        </div> */}
        <div className="why-header">
  <span className="why-label">ELITE STANDARDS</span>

  <h2 className="why-title">
    WHY CHOOSE <span>US?</span>
  </h2>

  <p className="why-description">
    At HELLO11, we believe every journey should be safe, comfortable, and
    hassle-free. From local city rides to airport transfers and outstation
    travel, our professional chauffeurs, well-maintained premium fleet, and
    transparent pricing ensure a reliable travel experience. With 24/7
    customer support, punctual pickups, and a commitment to passenger
    satisfaction, we make every trip smooth, secure, and enjoyable.
  </p>
</div>

        <div className="why-grid">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="why-card" key={index}>
                <div
                  className="why-icon"
                  style={{
                    background: `${item.color}20`, // soft background
                    color: item.color,
                  }}
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;