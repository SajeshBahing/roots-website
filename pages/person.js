import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';

export default function Person() {
  return (
    <div>
      <Header currentPage="person" />
      
      <section className="padding50">

      <div className="container">
        <Link href="/story">
          <a className="person-back-button">
            <i className="fa fa-chevron-left"></i> &nbsp;
            Back to the list
          </a>
        </Link>

        <div className="row">
          <div className="col-sm-3">
            <img src="https://via.placeholder.com/250x250" className="img-fluid" />
          </div>

          <div className="col person-detail-contaier">
              <div className="person-detail-content">
                <h1 className="website-header">
                  John doe
                </h1>

                <p>"Tagline from his story"</p>
              </div>
          </div>
        </div>

        <div className="row padding50">
          <div className="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>

          <img src="https://via.placeholder.com/1200x400" className="img-fluid my-4" />
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
          </div>
        </div>
      </div>

      </section>

      <Footer />
    </div>
  );
}