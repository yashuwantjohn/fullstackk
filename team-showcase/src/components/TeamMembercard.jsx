// src/components/TeamMemberCard.jsx  
import './TeamMemberCard.css';  

function TeamMemberCard({ name, title }) {  
  return (  
    <div className="team-member-card">  
      <h3>{name}</h3>  
      <p>{title}</p>  
    </div>  
  );  
}  

export default TeamMemberCard;  