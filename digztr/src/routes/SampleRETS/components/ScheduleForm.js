import React,{Component} from 'react';

export default class ScheduleForm extends Component {
    componentDidMount() {
      // var totalSteps = 4;
      // var startWidth = 100 / totalSteps;
      // $('#schedules .progress-bar').css({width: startWidth + '%'});
      // let carousel = new Carousel({
      //   panels: $('#myCarousel')
      // })
      // // $('#myCarousel').carousel({
      // //   interval: false
      // // });
      // $('#myCarousel').bind('slide.bs.carousel', function (e) {
      //   //update progress
      //   var step = $(e.relatedTarget).data('step');
      //   var percent = (parseInt(step) / totalSteps) * 100;
      //   var styles = {
      //     width: percent + "%"
      //   };
      //   $('#schedules .progress-bar').css({width: percent + '%'});
      // });
    }
    render() {
        return (
          <div className="card" style={{marginTop: "40px"}}>
          <div className="card-title text-center orange-03-bg">
            <h5>Schedule A Free Tour Now</h5>
          </div>

          <div className="card-content text-center">
            <h6>Choose the day you want to see it</h6>
            <div id="myCarousel" className="carousel slide">
              <div className="carousel-inner">
                <div className="item active" data-step="1">
                  <div className="row calendar-box no-pad">
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="row cal-text no-pad orange-text">
                            ASAP
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Fri
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            21
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Sat
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            22
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Sun
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            23
                          </div>
                          <div className="cal-month row no-pad">
                          Jul
                        </div>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="item" data-step="2">
                  <div className="row calendar-box no-pad">
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Mon
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            24
                          </div>
                          <div className="cal-month row no-pad">
                          Jul
                        </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Tue
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            25
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Wed
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            26
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Thu
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            27
                          </div>
                          <div className="cal-month row no-pad">
                          Jul
                        </div>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="item" data-step="3">
                  <div className="row calendar-box no-pad">
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Fri
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            28
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Sat
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            29
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Sun
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            30
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Mon
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            31
                          </div>
                          <div className="cal-month row no-pad">
                            Jul
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="item" data-step="4">
                  <div className="row calendar-box no-pad">
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Tue
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            1
                          </div>
                          <div className="cal-month row no-pad">
                            Aug
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="row cal-text no-pad orange-text">
                            ASAP
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Thu
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            3
                          </div>
                          <div className="cal-month row no-pad">
                            Aug
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xs-3 no-pad">
                      <div className="row item-calendar text-center">
                        <a href="#">
                          <div className="cal-week row violet-03-bg">
                            Fri
                          </div>
                          <div className="row cal-day no-pad orange-text">
                            4
                          </div>
                          <div className="cal-month row no-pad">
                            Aug
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

             <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev" style={{marginTop:"10px"}}>
               <span style={{marginTop: "15px"}}> <img src={require("../../../assets/svg/arr-left.svg")} alt="" width="100%" /> </span>
             </a>
             <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next" style={{marginTop:"10px"}}>
               <span> <img src={require("../../../assets/svg/arr-right.svg")} alt="" width="100%" /> </span>
             </a>
            </div>
            <div id="schedules" className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="5" >
              </div>
            </div>
            <h6><b>Or Call Toll Free: 1-800-123-8899</b></h6>
          </div>
        </div>
        );
    }
}
