import PropTypes from "prop-types";
const UserData =[
  {
    name:"USER 1",
    status:"ONLINE",
    addr:"Chennai",
    role:"Web Developer",
    skills:["UI/UX","HTML","CSS","Javascript","React","Wordpress","PHP","Jquery","SQL","Node"],
    profile:"images/user_dum.png"
  },
  {
    name:"USER 2",
    status:"OFFLINE",
    addr:"Thanjavur",
    role:"Full Stack Developer",
    skills:["HTML","CSS","Javascript","SQL","C","C++","Data structure","django","MongoDB"],
    profile:"images/user_dum.png"
  },
  {
    name:"USER 3",
    status:"ONLINE",
    addr:"Trichy",
    role:"Front End Developer",
    skills:["React","Javascript","Data structure","HTML","CSS","C","Angular","C#","Node","Jquery"],
    profile:"images/user_dum.png"
  }
]
function User(props){
  let {sta}="";
  if(props.status == "ONLINE"){
    sta = "online";
  }else{
    sta = "offline";
  }
  
  return <div className="card-container">
        <span className={`pro ${sta}`}>{props.status}</span>
        <img src={props.profile} className="img"alt="User" />
        <h3>{props.name}</h3>
        <h3>{props.addr}</h3>
        <p>{props.role}</p>
        <div>
          <button className="primary">Message</button>
          <button className="primary outline">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {
              props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
              ))
            }
          </ul>
        </div>
  </div>
}
const UserCard = () => {
  return (
    <>
      {
        UserData.map((user,index)=>(
          <User key={index} 
          name={user.name}
          status={user.status}
          addr={user.addr}
          role={user.role}
          skills={user.skills}
          profile = {user.profile}
          />

        ))
      }
      {/* <User name="USER 1" status="ONLINE" addr="Chennai" role="Web Developer" skills={["HTML","CSS","Javascript","React","Wordpress","PHP","Jquery","SQL",]} profile="images/user_dum.png"/>
      <User name="USER 2" status="OFFLINE" addr="Thanjavur" role="Full Stack Developer" skills={["HTML","CSS","Javascript","SQL","C","Data structure"]} profile="images/user_dum.png"/>
      <User name="USER 3" status="ONLINE" addr="Trichy" role="Front End Developer" skills={["React","Javascript","Data structure","HTML","CSS","C"]} profile="images/user_dum.png"/>    */}
    </>
      
  )
}
User.propTypes = {
  name:PropTypes.string.isRequired,
  status:PropTypes.string.isRequired,
  addr:PropTypes.string.isRequired,
  role:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  profile:PropTypes.string.isRequired
}
export default UserCard
