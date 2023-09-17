import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Team from "../Team/Team";

const MovieTeam = ({handleChosenTeam, cost}) => {
    const [teams,setTeams] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setTeams(data));
    },[])
    return (
        <>
            <h1 className='text-xl md:text-xl text-center my-5 md:my-10 font-medium underline'>Now your total cost: ${cost} </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-10 md:mb-20 mx-5 md:mx-[5%]">
                {
                    teams.map(team=> (<Team team={team} key={team.id} handleChosenTeam={handleChosenTeam}/>))
                }
            </div>
        </>
    );
};
MovieTeam.propTypes = {
    handleChosenTeam : PropTypes.func,
    cost : PropTypes.number,
};

export default MovieTeam;