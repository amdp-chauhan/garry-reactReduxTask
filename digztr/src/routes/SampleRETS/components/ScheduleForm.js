import React,{Component} from 'react';
import moment from 'moment';
import axios from 'axios';
import config from '../../../config';
import { withCookies, Cookies } from 'react-cookie';

class ScheduleForm extends Component {
    state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      selectedDate: ""
    };
    componentWillMount() {
      const { cookies } = this.props;

      this.setState({
        name: cookies.get('schedule_name'),
        phone: cookies.get('schedule_phone'),
        email: cookies.get('schedule_email'),
        message: "",
        selectedDate: ""
      })
    }
    handleNameChange(e){
      const { cookies } = this.props;

      cookies.set('schedule_name', e.target.value, { path: '/' });
      this.setState({name: e.target.value});
    }
    handlePhoneChange(e){
      const { cookies } = this.props;

      cookies.set('schedule_phone', e.target.value, { path: '/' });
      this.setState({phone: e.target.value});
    }
    handleEmailChange(e){
      const { cookies } = this.props;

      cookies.set('schedule_email', e.target.value, { path: '/' });
      this.setState({email: e.target.value});
    }
    handleMessageChange(e){
      this.setState({message: e.target.value});
    }
    clearFields(){
      this.setState({
        message: "",
        selectedDate: ""
      });
    }
    handleSubmit(e){
      e.preventDefault();

      let data = {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        message: this.state.message,
        date: this.state.selectedDate
      }

      axios.post(`${config.api.baseUrl}/api/schedules`, data)
        .then(res => {
          this.clearFields();
        });
    }
    renderModal(){
      return (
        <div>
          <div id="thankyouModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="img-container">
                    <img src="http://digztr-temp.imgix.net/uploads/01.jpg?h=200&w=200"/>
                  </div>
                  <h2><center>Thank You</center></h2>
                  <p>We'll call or text you very soon to confirm your request (typically within 15 minutes, but it might be a bit longer outside business hours or in rare cases). It's free, and there's no obligation! We look forward to helping you.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="scheduleModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content" style={{width:"300px"}}>
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Your Contact Information</h4>
                </div>
                <div className="modal-body">
                  <form
                    className="forms"
                    onSubmit={e => this.handleSubmit(e)}
                    >
                    <input
                      type="text"
                      value={this.state.name}
                      className="form-control"
                      placeholder="Fullname"
                      onChange={e => this.handleNameChange(e)}
                      />
                    <input
                      type="text"
                      value={this.state.phone}
                      className="form-control"
                      placeholder="Phone"
                      onChange={e => this.handlePhoneChange(e)}
                      />
                      <input
                        type="text"
                        value={this.state.email}
                        className="form-control"
                        placeholder="Email"
                        onChange={e => this.handleEmailChange(e)}
                        />
                    <textarea
                      className="form-control"
                      rows="3"
                      cols="80"
                      placeholder="Your Message"
                      onChange={e => this.handleMessageChange(e)}
                      >
                      {this.state.message}
                    </textarea>
                    <input
                      type="submit"
                      className="btn-overwrite"
                      style={{position: "absolute", marginLeft:"80px",width:"120px",padding: "5px 20px"}}
                      value="Submit"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#thankyouModal"
                      />
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
    handleSelectDate(date){
      this.setState({selectedDate:date.format("YYYY-MM-DD")});
    }
    renderItem(item){
      return (
        <div className="col-xs-3 no-pad">
          <div className="row item-calendar text-center">
            <a
              href="#"
              data-toggle="modal"
              data-target="#scheduleModal"
              onClick={() => this.handleSelectDate(item)}
              >
              <div className="cal-week row violet-03-bg">
                {item.format('ddd')}
              </div>
              <div className="row cal-day no-pad orange-text">
                {item.format('D')}
              </div>
              <div className="cal-month row no-pad">
                {item.format("MMM")}
              </div>
            </a>
          </div>
        </div>
      )
    }
    renderDate(arr,step){
      if(step===1){
        return (
          <div className="item active" data-step={step} key={step}>
          <div className="row calendar-box no-pad">
          {
            arr.map((item,index) => {
              if (step===1&&!index) {
                return (
                  <div className="col-xs-3 no-pad">
                    <div className="row item-calendar text-center">
                      <a href="#">
                        <div className="row cal-text no-pad orange-text">
                          ASAP
                        </div>
                      </a>
                    </div>
                  </div>
                )
              }else{
                return this.renderItem(item);
              }
            })
          }
          </div>
          </div>
        );
      }else{
        return (
          <div className="item" data-step={step} key={step}>
          <div className="row calendar-box no-pad">
          {
            arr.map(item => {
              return this.renderItem(item);
            })
          }
          </div>
          </div>
        );
      }
    }
    renderDates() {
      let step = 1;

      let start = moment();
      let end = moment().add(2,'weeks');

      let dates = [];
      for(let i = moment(start) ; i.isBefore(end) ; i.add(1,'days')){
        dates.push(moment(i));
      }
      let chunkArray = (arr, chunk_size) => {
        let tempArray = [];

        for (let i = 0; i < arr.length; i+=chunk_size) {
          let chunk = arr.slice(i,i+chunk_size);
          tempArray.push(chunk);
        }
        return tempArray;
      }
      return (
        chunkArray(dates,4).map((item,index) => {
          return (
            this.renderDate(item,index+1)
          );
        })
      );

      // return (
      //   <div className="item active" data-step="1">
      //     <div className="row calendar-box no-pad">
      //       <div className="col-xs-3 no-pad">
      //         <div className="row item-calendar text-center">
      //           <a href="#">
      //             <div className="row cal-text no-pad orange-text">
      //               ASAP
      //             </div>
      //           </a>
      //         </div>
      //       </div>
      //       <div className="col-xs-3 no-pad">
      //         <div className="row item-calendar text-center">
      //           <a href="#">
      //             <div className="cal-week row violet-03-bg">
      //               Fri
      //             </div>
      //             <div className="row cal-day no-pad orange-text">
      //               21
      //             </div>
      //             <div className="cal-month row no-pad">
      //               Jul
      //             </div>
      //           </a>
      //         </div>
      //       </div>
      //       <div className="col-xs-3 no-pad">
      //         <div className="row item-calendar text-center">
      //           <a href="#">
      //             <div className="cal-week row violet-03-bg">
      //               Sat
      //             </div>
      //             <div className="row cal-day no-pad orange-text">
      //               22
      //             </div>
      //             <div className="cal-month row no-pad">
      //               Jul
      //             </div>
      //           </a>
      //         </div>
      //       </div>
      //       <div className="col-xs-3 no-pad">
      //         <div className="row item-calendar text-center">
      //           <a href="#">
      //             <div className="cal-week row violet-03-bg">
      //               Sun
      //             </div>
      //             <div className="row cal-day no-pad orange-text">
      //               23
      //             </div>
      //             <div className="cal-month row no-pad">
      //             Jul
      //           </div>
      //           </a>
      //         </div>
      //       </div>
      //
      //     </div>
      //   </div>
      // );
    }
    render() {

        return (
          <div className="card" style={{marginTop: "40px"}}>
          <div className="card-title text-center orange-03-bg">
            <h5>Schedule A Free Tour Now</h5>
          </div>
          {this.renderModal()}
          <div className="card-content text-center">
            <h6>Choose the day you want to see it</h6>
            <div id="myCarousel" className="carousel slide">
              <div className="carousel-inner">
                {this.renderDates()}

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
export default withCookies(ScheduleForm);
