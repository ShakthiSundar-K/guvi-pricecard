import React from 'react'

function Card({data}) {
  return <>

      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.plan==="Free"?data.user:<b>{data.user}</b>}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.pubproject}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.access}</li>
              <li className={data.ispriproject?"":"text-muted"}><span className="fa-li"><i className={data.ispriproject?"fas fa-check":"fas fa-times"}></i></span>{data.priproject}</li>
              <li className={data.issupport?"":"text-muted"}><span className="fa-li"><i className={data.issupport?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.isdomain?"":"text-muted"}><span className="fa-li"><i className={data.isdomain?"fas fa-check":"fas fa-times"}></i></span>{data.domain}</li>
              <li className={data.isreport?"":"text-muted"}><span className="fa-li"><i className={data.isreport?"fas fa-check":"fas fa-times"}></i></span>{data.report}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

  </>
}

export default Card
