import PropTypes from 'prop-types';
import { LuDelete } from 'react-icons/lu';
const Member = ({item, handleRemoveChose}) => {
    const {name, image, role}= item;
    return (
        <div className="card card-side border-2 overflow-hidden my-3">
            <figure className='w-1/3'><img src={image} alt="Movie"/></figure>
            <div className="flex justify-between items-center gap-2 md:gap-5 px-2 md:px-5 w-full">
                <div>
                    <h2 className="text-base md:text-lg font-bold">{name}</h2>
                    <p>{role}</p>
                </div>
                <LuDelete 
                    onClick={()=>handleRemoveChose(item)}
                    className='text-xl md:text-2xl cursor-pointer hover:text-red-600'/>
            </div>
        </div>
    );
};

Member.propTypes = {
    item : PropTypes.object,
    handleRemoveChose : PropTypes.func,
};

export default Member;