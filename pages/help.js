import Header from "../components/header";
import Footer from "../components/footer";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Link from 'next/link';


export default function Help() 
{
  const [activeKey, setActiveKey] = useState('0');

  function CustomToggle({children, eventKey}) {
    const [active, setActive] = useState(activeKey == eventKey);

    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      {
        setActiveKey(eventKey);
        setActive(!active);
      }
    );

    return (
      <div className={active? "card-header active": "card-header"} onClick={decoratedOnClick}>
        {children}

        <div className="pull-right">
          <i className={active? "fa fa-chevron-down": "fa fa-chevron-right"}></i>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header currentPage="help" />
      
      <section className="padding50">
        <div className="container">
          <h1 className="website-header">Things you might want to know</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
        </div>
      </section>

      <section className="background-blue padding50">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <Accordion defaultActiveKey="0">
                <Card>
                  <CustomToggle eventKey="0">
                    Would my company get a badge for this?
                  </CustomToggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <CustomToggle eventKey="1">
                    Would my company get a badge for this?
                  </CustomToggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <CustomToggle eventKey="2">
                    Would my company get a badge for this?
                  </CustomToggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero doloremque ipsam odio porro magni cupiditate expedita modi, deleniti aliquid a veniam? Perferendis exercitationem cum rerum iure possimus reprehenderit voluptatum.</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      <section className="padding50">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h1 className="website-header">Still can't find what you want?</h1>
            </div>
            <div className="col">
              <Link href="contact">
                <a className="learn-more-button w-100" style={{margin: 0}}>
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}