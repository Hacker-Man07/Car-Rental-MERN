import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most out of it</h2>
            <p>
            Discover the freedom of the open road with our innovative car rental app! Say goodbye to the hassles of traditional car rental services and hello to convenience at your fingertips. Whether it's a spontaneous weekend getaway or a planned business trip, our app offers a seamless booking experience. With a wide range of vehicles to choose from and easy-to-use features, you can find the perfect ride for every occasion. Download our app today and embark on a journey where convenience meets adventure. Your next car rental is just a tap away!
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;