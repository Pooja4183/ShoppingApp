import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCottonBureau } from '@fortawesome/free-brands-svg-icons';

const AppLogo=()=> {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faCottonBureau} className="text-3xl text-blue-600" />
      <span className="text-xl font-bold"></span>
    </div>
  );
}

export default AppLogo;
