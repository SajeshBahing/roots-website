import Link from 'next/link';

export default function Footer()
{
  return (
    <div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <div className="footer-links">
                <h1>Deakin create</h1>
                <ul>
                  <li>
                    <a href="#">Copyright</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="footer-links">
                  <h1>About us</h1>
                  <ul>
                    <li>
                      <a href="#">What we do</a>
                    </li>
                    <li>
                      <a href="#">Staff</a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="col-sm-2">
              <div className="footer-links">
                <h1>Help</h1>
                <ul>
                  <li>
                    <Link href="/help">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="footer-links">
                <h1>My account</h1>
                <ul>
                  <li>
                    <a href="#">Create opportunity</a>
                  </li>
                  <li>
                    <a href="#">See the candidates</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 offset-sm-2">
              <div className="footer-links text-right">
                  <h1>Follow us</h1>
                  <a href="#" className="social-icons">
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a href="#" className="social-icons">
                      <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <span className="copyright">&copy; Copyright Deakin university</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}