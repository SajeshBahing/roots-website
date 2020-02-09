import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';

export default function Story() {
  return (
    <div>
      <Header currentPage="story" />

      <section className="background-blue padding50">
        <div className="container">
          <h1 className="website-header">Listen to inspiring stories</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
        </div>
      </section>

      <section className="padding50 stories">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <Link href="/person?id=1">
                <a className="story-teller">Jane's story</a>
              </Link>
            </div>
            <div className="col-md-4 offset-xl-1">
                <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">John's story</a>
            </div>
            <div className="col-md-4 offset-xl-1 col-xl-3">
              <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">Edward's story</a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-xl-3">
              <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href='#' className="story-teller">Jane's story</a>
            </div>
            <div className="col-md-4 offset-xl-1">
                <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">John's story</a>
            </div>
            <div className="col-md-4 offset-xl-1 col-xl-3">
              <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">Edward's story</a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-xl-3">
              <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href='#' className="story-teller">Jane's story</a>
            </div>
            <div className="col-md-4 offset-xl-1">
                <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">John's story</a>
            </div>
            <div className="col-md-4 offset-xl-1 col-xl-3">
              <img src="https://via.placeholder.com/250x250" className="img-fluid" />
              <a href="#" className="story-teller">Edward's story</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}