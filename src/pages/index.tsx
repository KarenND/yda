export default function Home() {

  const car: any = {
    year: 2012,
    brand: "Chevrolet",
    model: "Impala",
    mileage: 127463,
    location: "Tavares",
    extendedLocation: "Tavares, FL (200 E. Burleigh Blvd)",
    engine: "3.6L V6 DOHC 16V FFV",
    transmision: "6-Speed Automatic",
    vin: "2G1WC5E36C1158443",
    color: "gold",
    image: "https://cdn.prod.website-files.com/659d52e325ba52d02c9bab63/670f4c2509ee683b20d2e237_4e0f67ad-d923-4c68-a073-f96da1cb7a40.jpeg",
    safety: [
        "ABS Brakes",
        "Child Safety Door Locks",
        "Driver Airbag",
        "Fog Lights",
        "Front Side Airbag",
        "Keyless Entry",
        "Passenger Airbag",
        "Rear Window Defogger",
        "Traction Control",
        "Vehicle Anti-Theft",
        "Vehicle Stability Control System",
    ],
    comfort: [
        "Air Conditioning",
        "AM/FM Radio",
        "Cruise Control",
        "Driver Multi-Adjustable Power Seat",
        "Front Heated Seat",
        "Manual Sunroof",
        "Passenger Multi-Adjustable Power Seat",
        "Power Windows",
        "Remote Ignition",
        "Separate Driver/Front Passenger Climate Controls",
        "Tilt Steering",
        "Tilt Steering Column",
    ],
    exterior: [
        "Alloy Wheels",
        "Automatic Headlights",
        "Daytime Running Lights",
        "Front Air Dam",
        "Heated Exterior Mirror",
        "Rear Spoiler",
        "Splash Guards",
    ],
    interior: [
        "Cargo Net",
        "Electrochromic Interior Rearview Mirror",
        "Leather Seat",
        "Leather Steering Wheel",
        "Second Row Folding Seat",
        "Steering Wheel Mounted Controls",
        "Trip Computer",
    ],
    entertainment: [
        "CD Player",
        "Voice Activated Telephone",
    ],
    specs: [
        "Tachometer",
        "Telematics System",
        "Tire Pressure Monitor",
        "Trunk Anti-Trap Device",
    ],
    others: [
        "Interval Wipers",
        "Power Adjustable Exterior Mirror",
        "Power Door Locks",
        "Power Sunroof",
        "Side Head Curtain Airbag",
    ],

  } 


  return (
    <div>
      <div className="d-flex">
      <div>
          <img className="car-image" src={car.image} alt="Car Image" />
        </div>
        <div className="vehicle-information">
          <span>
            <h2>{car.year} / {car.brand} / {car.model}</h2>
          </span>
          <div>
          <h4>Milleage: <span className="weight-normal">{car.mileage}</span> <br/> Location: <span className="weight-normal">{car.location}</span></h4>  
          <div>
            <h4 className="text-red">This car is on sale!*</h4>
            <button className="cta">Get Pre-Approved</button>
            <p className="terms">Complete our no-commitment <br/> pre-approval process in 3 minutes! </p>
          </div>
          </div>
        </div>
      </div>
      <div>
        <h2>General Information</h2>
        <h4>Engine: <span className="weight-normal">{car.engine}</span> <br/> 
        Transmision: <span className="weight-normal">{car.transmision}</span> <br/> 
        VIN: <span className="weight-normal">{car.vin}</span> <br/> 
        Extended location: <span className="weight-normal">{car.extendedLocation}</span><br/> 
        Color: <span className="weight-normal">{car.color}</span></h4>
      </div>
      <div>
        <h3>Safety:</h3>
        <br/>
        <ul>
          {
            car.safety.map((item:string) => (
              <li>{item}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h3>Comfort:</h3> 
        <br/>
        <ul>
          {
            car.comfort.map((item:string) => (
              <li>{item}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h3>Exterior:</h3>
        <br/>
        {
            car.exterior.map((item:string) => (
              <li>{item}</li>
            ))
          }
      </div>
      <div>
        <h3>Interior:</h3> 
        <br/>
        {
            car.interior.map((item:string) => (
              <li>{item}</li>
            ))
          }
      </div>
      <div>
        <h3>Entertainment:</h3> 
        <br/>
        {
            car.entertainment.map((item:string) => (
              <li>{item}</li>
            ))
          }
        </div>
      <div>
        <h3>Specs:</h3>
        <br/>
        {
            car.specs.map((item:string) => (
              <li>{item}</li>
            ))
          }
      </div>
      <div>
        <h3>Others:</h3>
        <br/>
        {
            car.others.map((item:string) => (
              <li>{item}</li>
            ))
          }
      </div>
    </div>
  );
}
