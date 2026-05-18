import Name from './name.jsx'; // This creates the variable 'Name'
import C_exhibition from './C_exhibition.jsx';
import P_exhibition from './P_exhibition.jsx';
import ArtistSubmissions from './ArtistSubmissions.jsx';
import MissionStatement from './MissionStatement.jsx';
import ComingSoon from './ComingSoon.jsx';
const Home = () => {
  return (
    <div>
      <Name />  {/* Changed from <Hero /> to <Name /> */}
      {/* <C_exhibition /> */}
      {/* <P_exhibition /> */}
      <ComingSoon />
      <MissionStatement />
      <ArtistSubmissions />
      

    </div>
  );
};
export default Home;