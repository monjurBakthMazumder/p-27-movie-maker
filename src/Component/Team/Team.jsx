import PropTypes from 'prop-types';

const Team = ({team, handleChosenTeam}) => {
    const {name, role, image, salary} = team;
    return (
        <div className="card card-compact border-2">
        <figure className="pt-3">
            <img src={image} alt={`image of ${name}`} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center pt-1">
            <h2 className="card-title">{name}</h2>
            <p className='font-light text-base'>{role}</p>
            <p className='font-semibold'>Salary: ${salary}</p>
            <div className="card-actions mt-1">
            <button 
                onClick={()=> handleChosenTeam(team)}
                className="btn btn-primary"
            >Chose</button>
            </div>
        </div>
        </div>
    );
};

Team.propTypes = {
    team : PropTypes.object,
    handleChosenTeam : PropTypes.func,
};

export default Team;