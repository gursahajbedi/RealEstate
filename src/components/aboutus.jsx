import "./aboutus.css"

export default function AboutUs(){
    return(
        <section className="container py-4 mt-5 bg-light border border-3">
        <div className="container text-dark">
          <h1 className="display-5 text-center border-bottom">About Us</h1>
          <div className="d-flex mt-5 flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row my-3">
                <div className="container">
                  <h2 className="h1 ">Our Mission</h2>
                  <img style={{height:"250px", width:"100%", objectFit:"cover"}} src="https://www.projectmanager.com/wp-content/uploads/2018/11/181112_Blog_Feature_Mission.jpg"></img>
                  <p className="mt-3">
                  At Urban-Nestle, our vision is to become the go-to platform for home buyers and sellers in the (Region) area. We envision a future where every customer is satisfied with their real estate experience and has found their dream home.
                  </p>
                </div>
                <div className="container">
                  <h2 className="h1">Our Awards and Accolades</h2>
                  <img style={{height:"250px", width:"100%", objectFit:"cover"}} src="https://blog.vantagecircle.com/content/images/2019/12/Employee-recognition-awards.png"></img>
                  <p className="mt-3">
                  Over the years, our company has consistently demonstrated its commitment to excellence and innovation. We have been honored with numerous awards and accolades, including the "Best Property Listing Platform" in India for 18 years. <br/>At Urban-Nestle , we believe in giving back to the community and making a positive impact on the lives of our customers.
                  </p>
                </div>
            </div>
            <div className="d-flex flex-row my-3">
                <div className="container">
                    <h2 className="h1">Our Approach</h2>
                    <img style={{height:"250px", width:"100%", objectFit:"cover"}} src="https://classplusapp.com/growth/wp-content/uploads/2023/06/Blog-image-June_Importance-of-multi-disciplinary-approach-in-teaching-1-scaled.jpg"></img>
                    <p className="mt-3">
                    We take a customized and iterative approach to developing and enhancing our platform. We understand that every customer's needs are unique, and we adapt our platform to meet these specific needs. We are constantly reviewing our product to ensure timely delivery and exceptional quality.
                    </p>
                </div>
                <div className="container">
                  <h2 className="h1">Our Vision</h2>
                  <img style={{height:"250px", width:"100%", objectFit:"cover"}} src="https://www.kindpng.com/picc/m/194-1946513_vision-statement-hd-png-download.png"></img>
                  <p className="mt-3">
                  Our mission is to revolutionize the real estate industry by offering a user-friendly and comprehensive platform. We strive to create a seamless experience for both home buyers and sellers, making their real estate journey as convenient and hassle-free as possible.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}